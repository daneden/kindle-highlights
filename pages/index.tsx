import Head from "next/head"
import Book from "../components/Book"
import fetchHighlights, {
  Highlight as THighlight,
} from "../lib/fetchHighlights"
import linkify from "../utils/linkify"

interface Book {
  title: string
  author: string
  highlights: [THighlight]
}

export default function HomePage({ highlights }: { highlights: [THighlight] }) {
  const groupedHighlights = highlights
    .reduce<[Book?]>((accumulator, highlight) => {
      const titleIndex = accumulator.findIndex(
        (title) => title.title == highlight.title
      )
      if (titleIndex === -1) {
        accumulator.push({
          title: highlight.title,
          author: highlight.author,
          highlights: [highlight],
        })
      } else {
        accumulator[titleIndex].highlights.push(highlight)
      }

      return accumulator
    }, [])
    .map((title) => {
      const sortedHighlights = title.highlights.sort(
        (a, b) => a.locStart - b.locStart
      )
      title.highlights = sortedHighlights

      return title
    })

  return (
    <>
      <Head>
        <title>Kindle Highlights | Daniel Eden, Designer</title>
      </Head>
      <main>
        <header>
          <h1>Highlights</h1>
          <details>
            <summary>
              A selection of Kindle highlights from the library of{" "}
              <a href="https://daneden.me">Daniel Eden</a>.
            </summary>
            <p>
              Highlights are manually synced from a Kindle to Airtable using a{" "}
              <a href="https://github.com/daneden/kindle-airtable-sync">
                JavaScript program
              </a>
              . The source code for this website is{" "}
              <a href="https://github.com/daneden/kindle-highlights">
                available to view
              </a>
              .
            </p>
          </details>
          <h2>Table of Contents</h2>
          <ul>
            {groupedHighlights.map(({ title, author }) => (
              <li key={title}>
                <a href={`#${linkify(title)}`}>{title}</a> by {author}
              </li>
            ))}
          </ul>
        </header>
        {groupedHighlights.map(({ title, author, highlights }) => (
          <Book
            key={title}
            title={title}
            author={author}
            highlights={highlights}
          />
        ))}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const highlights = await fetchHighlights()

  return {
    props: {
      highlights,
      unstable_revalidate: 1,
    },
  }
}
