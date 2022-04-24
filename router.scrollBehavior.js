export default function (to, from, savedPosition) {
  if (to.hash) {
    return window.scrollTo({
      top: document.querySelector(to.hash).offsetTop + window.innerHeight,
      behavior: 'smooth'
    })
  }
  return window.scrollTo({ top: 0, behavior: 'smooth' })
}
