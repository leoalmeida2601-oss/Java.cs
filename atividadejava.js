const nomedoaluno = "leonardo";
console.log("Nome: ",nomedoaluno);
let idadedoaluno = 24
console.log("idade: ",idadedoaluno);
const curso = ("Curso: ", curso)
let desconto = true
let mensalidade = 200
let vagas = 30;

if (idadedoaluno >= 18){
    console.log("Aluno maior de idade");
}else if (idadedoaluno < 17){
    console.log("Aluno menor de idade");
}else{
    console.log("insgrição não permitida");
}

if(vagas > 0){
    console.log("Vagas disponíveis");
}else{
    console.log("Não há vagas disponíveis")
}


if (desconto == true){
    console.log("Mensalidade principal: R$ ", mensalidade);
    console.log("Desconto aplicado: 15%")
    console.log("Mensalidade Final: R$ ", mensalidade)
}else{
    console.log("Mensalidade Final: R$ ", mensalidade)
}

if(mensalidade > 600){
    console.log("Classificação: Curso premium");
}else if(mensalidade>=300){
    console.log("Classificação: Curso intermediário");
}else{
    console.log("Classificação: Curso básico");
}