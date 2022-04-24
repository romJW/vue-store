export default function getLink (id) {
  return `${process.env.DIRECTUS_URL}/assets/${id}`
}
