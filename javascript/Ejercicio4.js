/**
 * Ordenar la lista de menor a mayor.
 * 
 * @param {array} lista - listado de números enteros.
 * @returns la lista ordenada.
*/
function ejerciciocuatro(lista = []) {
  if (lista.length <= 0) {
    return []
  }
  return lista.sort((a, b) => a - b)
}
