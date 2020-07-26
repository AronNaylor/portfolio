export function getImage(imgArr, name) {
  const re = new RegExp(name)
  return imgArr.filter(img => (img.src.search(re) !== -1 ? img : null))
}
