let listaAlunos = ["leonardo","robson","rafael","raiane"]

let quantidadealunos = 5;

for(let contador = 3; contador >= 0; contador-- ) {
  

if (contador == 0) {
    console.log(`o aluno ${listaAlunos[contador]} é o numero zero`)
} else if (contador % 2 == 0) {
     console.log("o aluno " + listaAlunos[contador]+" é numero " + [contador] +": par")
} else if (contador % 2 == 1 ) {
    console.log(`o aluno ${listaAlunos [contador]} é numero ${contador}: impar`)
}
}


