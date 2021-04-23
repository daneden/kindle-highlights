import Airtable, { FieldSet, Table } from "airtable"

export interface Highlight extends FieldSet {
  title: string
  author: string
  date: string
  pageNumber?: number
  locStart: number
  locEnd: number
}

export interface Book {
  title: string
  author: string
  highlights: [Highlight]
}

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)
const table = base(AIRTABLE_TABLE_NAME) as Table<Highlight>
export default async function fetchHighlights(): Promise<Highlight[]> {
  const query = table.select({
    maxRecords: 1000,
  })
  const rows = await query.all()
  const rowsSet = new Set(rows.map((row) => row.fields))

  return Array.from(rowsSet)
}

export function groupHighlights(highlights: Highlight[]) {
  const groupedHighlights = highlights
    .reduce<Book[]>((books, highlight) => {
      const titleIndex = books.findIndex(
        ({ title }) => title == highlight.title
      )
      if (titleIndex === -1) {
        books.push({
          title: highlight.title,
          author: highlight.author,
          highlights: [highlight],
        })
      } else {
        books[titleIndex].highlights.push(highlight)
      }

      return books
    }, [])
    .map((title) => {
      const sortedHighlights = title.highlights.sort(
        (a, b) => a.locStart - b.locStart
      )
      title.highlights = sortedHighlights

      return title
    })

  return groupedHighlights
}
