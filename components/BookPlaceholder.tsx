export default function BookPlaceholder() {
  return (
    <>
      <style jsx>{`
        * {
          user-select: none;
        }

        .placeholder {
          background-color: rgba(128, 128, 128, 0.2);
          color: transparent;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        section {
          display: grid;
          grid-template-columns: minmax(10rem, 1.5fr) 3fr;
          padding-top: var(--sp);
          animation: loading 1s infinite alternate;
        }

        @keyframes loading {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 800px) {
          section {
            grid-template-columns: 1fr;
          }
        }

        header {
          position: sticky;
          top: 1rem;
          background-color: var(--wash-color);
          padding: var(--sp);
          margin: calc(-1 * var(--sp));
          margin-bottom: var(--sp);
        }

        li {
          margin-bottom: 2rem;
        }

        blockquote {
          margin: 0;
          font-size: 1.25em;
        }

        mark {
          background-color: rgba(255, 200, 0, 0.2);
          color: transparent;
        }
      `}</style>
      <section role="presentation">
        <div>
          <header className="book-header">
            <h2>
              <span className="placeholder">Lorem Ipsum Dolor Sit</span>
            </h2>
            <p>
              <span className="placeholder">Sit Amet</span>
              <br />
              <span className="sans placeholder">2 highlights</span>
            </p>
          </header>
        </div>

        <ul className="highlights-list">
          <li>
            <blockquote>
              <mark>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </mark>
            </blockquote>
            <p>
              <span className="placeholder">Loc 100&ndash;120</span>
            </p>
          </li>
          <li>
            <blockquote>
              <mark>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </mark>
            </blockquote>
            <p>
              <span className="placeholder">Loc 1000&ndash;1020</span>
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
