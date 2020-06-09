export default function ellipsify(s: string): string {
  return /^[a-z]/.test(s) ? "[\u2026] " : null
}
