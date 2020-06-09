export default function linkify(s: string): string {
  return encodeURI(
    s
      .replace(/ /g, "-")
      .replace(/[:&;—?!]/, "")
      .toLowerCase()
  )
}
