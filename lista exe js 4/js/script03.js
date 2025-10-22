let contadora = 1

let numero = Number(prompt("digite um número"))


do {
   console.log(`${numero} X ${contadora} = ${numero * contadora}`)
   contadora ++
} while (contadora < 11);