/**
 * Unir dos vectores sin repetir.
 * 
 * @param {array} v1 - vector 1.
 * @param {array} v2 - vector 2.
 * @returns un nuevo vector con la unión de v1 y v2.
*/
function ejerciciocinco(v1 = [1,2,4,6,7,8], v2 = [1,2,4,5,6,7,8]) {
  let u = []
  const merge = v1.concat(v2)
  const union = merge.sort((a, b) => a - b)
  let i = merge.length
  let j = 0
  while (i > 0) {
    if (union[j] === union[j + 1]) {
      u.push(union[j])
    } else {
      if ((union[j] !== union[j - 1]) && (union[j] !== union[j + 1])) {
        u.push(union[j])
      }
    }
    j++
    i--
  }
  return u
}
