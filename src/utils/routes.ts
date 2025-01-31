export const routes = [
  { path: '/', label: '_hello' },
  { path: '/about-me', label: '_about-me' },
  { path: '/projects', label: '_projects' },
  { path: '/contact-me', label: '_contact-me' },
] as const

export type Route = (typeof routes)[number]
