// Turns one of the editable .html files (src/projects, src/pages) into data.
// <title> is the page title, <meta name="subtitle"> the optional subtitle and
// <meta name="layout" content="bare"> skips the standard title block.
export function parseHtmlPage(raw) {
  if (!raw) return null
  const doc = new DOMParser().parseFromString(raw, 'text/html')
  const meta = (name) => doc.querySelector(`meta[name="${name}"]`)?.content ?? ''
  return {
    title: doc.title,
    subtitle: meta('subtitle'),
    layout: meta('layout'),
    body: doc.body.innerHTML,
  }
}
