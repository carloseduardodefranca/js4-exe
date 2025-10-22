let contadora = 1

let somatorio = 0

do {
  if(contadora %2 == 0){

     somatorio =somatorio + contadora
   }
   contadora++
} while (contadora < 201)
   console.log(somatorio)