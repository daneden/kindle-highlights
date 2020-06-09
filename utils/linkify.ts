export default function linkify(s: string): string {
  return s.replace(/ /g, "-").toLowerCase()
}
