/**
 * Contar la cantidad de mayúsculas que contiene una cadena.
 * 
 * @param {string} cadena - cadena donde contar las mayúsculas.
 * @returns el número de mayúsculas en la cadena.
*/
function CantidadMayusculas(cadena = 'Challenge JavaScript ECMA2016.') {
	let str = cadena.split('')
	let uppers = 0
	for (let i = 0; i < str.length; i++) {
		let charcode = cadena.charCodeAt(i)
		let up_con_acento = charcode >= 193 && charcode <= 218
		let up_sin_acento = charcode >= 65 && charcode <= 90
		if (up_con_acento || up_sin_acento) {
			uppers += 1
		}
	}
	return uppers
}
