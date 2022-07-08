var agora = new Date() // Pega a data atual
var hora = agora.getHours() // Extrai o valor da hora atual

console.log(`Now it's exacly ${hora} hours`)

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if ( hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else  {
    console.log('Boa madrugada!')
}