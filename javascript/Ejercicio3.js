/**
 * Generar n números al azar.
 * 
 * @param {number} n - cantidad de números a generar.
 * @returns una lista con n números generados al azar.
*/
function ejerciciotres(n = 10) {
  const list = []
  for (let i = 0; i < n; i++) {
    list.push(Math.floor(Math.random() * 100))
  }
  return list
}
