const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7,10,8,5,7,9],
}


const media = aluno.notas.reduce((acc,nota) => acc + nota, 0) / aluno.notas.length

console.log(`A media da ${aluno.nome} ${aluno.sobrenome} é ${media}`)