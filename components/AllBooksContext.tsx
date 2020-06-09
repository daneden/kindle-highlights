import { createContext } from "react"
import { Highlight } from "../lib/fetchHighlights"

const AllBooksContext = createContext<Highlight[]>(null)

export default AllBooksContext
