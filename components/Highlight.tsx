import ellipsify from "../utils/ellipsify"

export default function Highlight({
  date,
  note,
  locStart,
  locEnd,
  pageNumber,
}) {
  return (
    <>
      <style jsx>{`
        li {
          margin-bottom: 2rem;
        }

        blockquote {
          margin: 0;
          font-size: 1.25em;
        }

        mark {
          background-color: rgba(255, 200, 0, 0.2);
          color: inherit;
        }
      `}</style>
      <li key={date} className="highlights-list__item">
        <blockquote>
          <mark>
            {ellipsify(note)}
            {note}
          </mark>
        </blockquote>
        <p className="sans">
          Loc {locStart}&ndash;{locEnd}
          {pageNumber && (
            <>
              {" "}
              <span>(Page {pageNumber})</span>
            </>
          )}
        </p>
      </li>
    </>
  )
}
