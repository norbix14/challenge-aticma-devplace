/**
 * Mostrar una ventana modal para informar algo.
 * 
 * @param {string} icon - icono de la ventana modal.
 * @param {string} title - titulo de la ventana modal.
 * @param {number} timer - tiempo que la ventana modal sera mostrada.
 * @param {string} position - posicion de la ventana modal.
*/
const Toast = (icon, title, timer, position = 'top-end') => {
  const toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  toast.fire({icon, title})
}

/**
 * Mostrar una ventana modal para informar algo.
 * 
 * @param {number} timer - tiempo que la ventana modal sera mostrada.
*/
const sendingForm = (timer = 3000) => {
  Swal.fire({
    title: 'Enviando consulta...',
    timer,
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

/**
 * Verificar que el email sea válido.
 * 
 * @param {Element} email - información del email a validar.
 * @returns un objeto con el resultado de la validacion
*/
const validateEmail = email => {
  let valid = false
  let msg = 'Email inválido'
  let mail = email.value.trim()
  if (mail === '') {
    return { valid, msg: 'El email no debe estar vacío' }
  }
  if (!mail.includes('@')) {
    return { valid, msg }
  }
  return { valid: true, msg: 'Email válido' }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#queryform')
  if (form) {
    const userfullname = document.querySelector('#userfullname')
    const userstate = document.querySelector('#userstate')
    const usermail = document.querySelector('#usermail')
    const userquery = document.querySelector('#userquery')
    form.addEventListener('submit', e => {
      e.preventDefault()
      if (userfullname.value.trim() === '' ||
          userstate.value.trim() === '' ||
          userquery.value.trim() === '') {
        return Toast('warning', 'Ningún campo debe quedar vacío')
      }
      const { valid, msg } = validateEmail(usermail)
      if (!valid) {
        return Toast('warning', msg)
      }
      const timer = 3000
      sendingForm(timer)
      setTimeout(() => {
        Toast('success', 'Consulta enviada. Muchas gracias', timer)
        form.reset()
      }, timer)
    })
  }
})
