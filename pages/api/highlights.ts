import { NextApiRequest, NextApiResponse } from "next"
import fetchHighlights from "../../lib/fetchHighlights"
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const highlights = await fetchHighlights()

  res.status(200).json(highlights)
}
