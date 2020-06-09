import Head from "next/head"
import Link from "next/link"
import Book from "../../components/Book"
import fetchHighlights, {
  Book as TBook,
  groupHighlights,
} from "../../lib/fetchHighlights"
import linkify from "../../utils/linkify"

export default function HomePage({
  book: { title, author, highlights },
}: {
  book: TBook
}) {
  return (
    <>
      <Head>
        <title>Highlights for “{title}” | Daniel Eden, Designer</title>
      </Head>
      <main>
        <header>
          <nav>
            <Link href="/">
              <a>⭠ Back to all highlights</a>
            </Link>
          </nav>
        </header>
        <Book
          key={title}
          title={title}
          author={author}
          highlights={highlights}
        />
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const {
    params: { title },
  } = context
  const highlights = await fetchHighlights()
  const grouped = groupHighlights(highlights)
  const book = grouped.find((book) => linkify(book.title) == linkify(title))

  return {
    props: {
      book,
      unstable_revalidate: 1,
    },
  }
}

export async function getStaticPaths() {
  const highlights = await fetchHighlights()
  const titles = groupHighlights(highlights).map((book) => linkify(book.title))
  return {
    paths: titles.map((title) => {
      return {
        params: { title },
      }
    }),
    fallback: false,
  }
}
