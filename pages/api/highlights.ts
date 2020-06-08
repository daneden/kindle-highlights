import Airtable, { FieldSet, Table } from "airtable"
import { NextApiRequest, NextApiResponse } from "next"

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
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = table.select({
    maxRecords: 1000,
  })
  const rows = await query.all()
  const rowsSet = new Set(rows.map((row) => row.fields))

  res.status(200).json(Array.from(rowsSet))
}
