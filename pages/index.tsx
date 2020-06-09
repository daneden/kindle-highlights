import Head from "next/head"
import AllBooksContext from "../components/AllBooksContext"
import Book from "../components/Book"
import Header from "../components/Header"
import fetchHighlights, {
  groupHighlights,
  Highlight as THighlight,
} from "../lib/fetchHighlights"

interface Book {
  title: string
  author: string
  highlights: [THighlight]
}

export default function HomePage({ highlights }: { highlights: [THighlight] }) {
  return (
    <AllBooksContext.Provider value={highlights}>
      <Head>
        <title>Kindle Highlights | Daniel Eden, Designer</title>
      </Head>
      <main>
        <Header />
        {highlights.map(({ title, author, highlights }) => (
          <Book
            key={title}
            title={title}
            author={author}
            highlights={highlights}
          />
        ))}
      </main>
    </AllBooksContext.Provider>
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
