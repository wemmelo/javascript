console.log(dizerOla);

//maneira tradicional de se declarar uma função
function dizerOi(nome) {
  console.log("Olá " + nome);
}

//outra forma de criar uma função anonima e atribuir ela a uma variavel
var dizerOla = function (nome) {
  console.log("Olá " + nome);
};

console.log(dizerOla);

//outra forma utilizando um construtor (muito pouco utilizada)
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");