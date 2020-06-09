import Link from "next/link"
import linkify from "../utils/linkify"
import Highlight from "./Highlight"
export default function Book({ title, author, highlights }) {
  return (
    <>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }

        section {
          display: grid;
          grid-template-columns: minmax(10rem, 1.5fr) 3fr;
          padding-top: var(--sp);
        }

        header {
          position: sticky;
          top: 1rem;
          background-color: var(--wash-color);
          padding: var(--sp);
          margin: calc(-1 * var(--sp));
          margin-bottom: calc(var(--sp) * 2);
        }

        p {
          margin: 0;
        }

        @media (max-width: 800px) {
          section {
            grid-template-columns: 1fr;
          }

          header {
            margin-bottom: 0;
          }
        }
      `}</style>
      <section id={linkify(title)}>
        <div>
          <header>
            <h2>
              <Link href={`/book/${linkify(title)}`}>
                <a>{title}</a>
              </Link>
            </h2>
            <p>
              {author}
              <br />
              <span className="sans">{highlights.length} highlights</span>
            </p>
          </header>
        </div>

        <ul className="highlights-list">
          {highlights.map(({ date, note, locStart, locEnd, pageNumber }) => (
            <Highlight
              key={date}
              date={date}
              note={note}
              locStart={locStart}
              locEnd={locEnd}
              pageNumber={pageNumber}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
