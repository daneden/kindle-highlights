import fetchHighlights from "../lib/fetchHighlights"

export default function HomePage({ highlights }) {
  return (
    <ul>
      {highlights.map((highlight) => (
        <li key={highlight.date}>
          {highlight.note} ({highlight.title}, {highlight.author})
        </li>
      ))}
    </ul>
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
