document.addEventListener('DOMContentLoaded', () => {
  /**
   * Mostrar una ventana modal para informar algo.
   * 
   * @param {string} icon - ícono de la ventana modal.
   * @param {string} title - título de la ventana modal.
   * @param {number} timer - tiempo que la ventana modal será mostrada.
   * @param {string} position - posición de la ventana modal.
  */
  const Toast = ({icon = 'success', title = 'Correcto', timer = 3000, position = 'top-end'}) => {
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
   * @param {string} title - título de la ventana modal.
   * @param {number} timer - tiempo que la ventana modal será mostrada.
  */
  const sendingForm = ({title = 'Enviando...', timer = 3000}) => {
    Swal.fire({
      title,
      timer,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

  /**
   * Verificar que el email sea válido.
   * 
   * @param {string} email - información del email a validar.
   * @returns un objeto con el resultado de la validacion
  */
  const validateEmail = email => {
    const emailValue = email.trim()
    const valid = true
    const msg = 'Email válido'
    if (emailValue === '') {
      return { valid: false, msg: 'El email no debe estar vacío' }
    }
    if (!emailValue.includes('@')) {
      return { valid: false, msg: 'Email inválido' }
    }
    return { valid, msg }
  }

  const form = document.querySelector('#queryform')

  if (form) {
    const userfullname = document.querySelector('#userfullname')
    const userstate = document.querySelector('#userstate')
    const userquery = document.querySelector('#userquery')
    const usermail = document.querySelector('#usermail')
    form.addEventListener('submit', e => {
      e.preventDefault()
      if (userfullname.value.trim() === '' ||
          userstate.value.trim() === '' ||
          userquery.value.trim() === '') {
        return Toast({icon: 'warning', title: 'Ningún campo debe quedar vacío'})
      }
      const { valid, msg } = validateEmail(usermail.value)
      if (!valid) {
        return Toast({icon: 'warning', title: msg})
      }
      const timer = 3000
      sendingForm({title: 'Enviando consulta...', timer})
      setTimeout(() => {
        Toast({title: 'Consulta enviada. ¡Muchas gracias!', timer})
        form.reset()
      }, timer)
    })
  }

})
