import Airtable, { FieldSet, Table } from "airtable"

interface Row extends FieldSet {
  title: string
  author: string
  date: string
  pageNumber?: number
  locStart: number
  locEnd: number
}

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)
const table = base(AIRTABLE_TABLE_NAME) as Table<Row>
export default async () => {
  const query = table.select({
    maxRecords: 1000,
  })
  const rows = await query.all()
  const rowsSet = new Set(rows.map((row) => row.fields))

  return Array.from(rowsSet)
}
