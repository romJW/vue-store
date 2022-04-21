export default function getLink (id) {
  return `${process.env.VITE_DIRECTUS_URL}/assets/${id}`
}
