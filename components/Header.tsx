import { useContext } from "react"
import linkify from "../utils/linkify"
import AllBooksContext from "./AllBooksContext"

export default function Header() {
  const tableOfContents = useContext(AllBooksContext)
  return (
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
      {tableOfContents?.length && (
        <>
          <h2>Table of Contents</h2>
          <ul>
            {tableOfContents.map(({ title, author }) => (
              <li key={title}>
                <a href={`#${linkify(title)}`}>{title}</a> by {author}
              </li>
            ))}
          </ul>
        </>
      )}
    </header>
  )
}
