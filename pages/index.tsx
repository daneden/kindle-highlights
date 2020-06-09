import Head from "next/head"
import Book from "../components/Book"
import fetchHighlights, {
  groupHighlights,
  Highlight as THighlight,
} from "../lib/fetchHighlights"
import linkify from "../utils/linkify"

interface Book {
  title: string
  author: string
  highlights: [THighlight]
}

export default function HomePage({ highlights }: { highlights: [THighlight] }) {
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
            {highlights.map(({ title, author }) => (
              <li key={title}>
                <a href={`#${linkify(title)}`}>{title}</a> by {author}
              </li>
            ))}
          </ul>
        </header>
        {highlights.map(({ title, author, highlights }) => (
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
  const groupedHighlights = groupHighlights(highlights)

  return {
    props: {
      highlights: groupedHighlights,
      unstable_revalidate: 1,
    },
  }
}
