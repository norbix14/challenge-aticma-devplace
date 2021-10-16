document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.ej')
  Array.from(btns).forEach(btn => {
    btn.title = 'Pulsar y seguir las instrucciones'
    btn.addEventListener('click', e => {
      const { target: { id } } = e
      if (id === 'ejuno') {
        const msg = prompt('Ingresar una cadena para luego contar sus mayúsculas: ')
        if (msg) {
          alert(`Cantidad de mayúsculas: ${CantidadMayusculas(msg)}`)
        }
      }
      if (id === 'ejdos') {
        alert(`Copia de [1, 2, 3, 4, 5, 7]  + 1: \n${ejerciciodos()}`)
      }
      if (id === 'ejtres') {
        let num = prompt('¿Cuántos números al azar generar?: ')
        if (num) {
          alert(`${num} números generados: \n${ejerciciotres(num)}`)
        }
      }
      if (id == 'ejcuatro') {
        let lista = prompt('Ingresar valores separados por coma: ')
        if (lista) {
          let l = lista.split(',')
          alert(`Lista ordenada: \n${ejerciciocuatro(l)}`)
        }
      }
      if (id == 'ejcinco') {
        alert(`Lista unida y ordenada: \n${ejerciciocinco()}`)
      }
    })
  })
})
