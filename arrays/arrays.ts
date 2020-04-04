let notasAlunos: number[] = [10,8,8.5,7];
let notasAlunos2: number[] = [5,9,7,9.5];
let names:string[] = new Array("Mary","Tom","Jack","Jill") 

// índice - in
for(let i in notasAlunos){
console.log(i);

}

//valores - of
for(let notaAluno of notasAlunos){
    console.log(notaAluno);
    
}

//Acessar elementos array

let notaDoAluno: number = notasAlunos[0];

console.log(notaDoAluno);

let notasAlunosCopia: number [] = notasAlunos;

console.log("copia - " + notasAlunosCopia);

notasAlunosCopia = notasAlunos2;

console.log("copia 2- " + notasAlunosCopia);



for(let i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

//Proriedade e Métodos do Array

let numeroTotal = notasAlunos.length;
console.log("Total de notas: " + numeroTotal);

let classifica = notasAlunos.sort();
console.log("sort: " + classifica);

notasAlunos.push(0);


console.log("Adicionando nova nota " + notasAlunos);


//concat ()
//Retorna uma nova matriz composta por essa matriz unida a outras matriz e / ou valor (es).
let nomesConcat: string  []   =  ['João','Paulo'];

nomesConcat = nomesConcat.concat(names);

console.log(nomesConcat);

//every()
//Retorna true se todos os elementos nessa array satisfizerem a função de teste fornecida.

let idades:  number []   =  [32, 33, 16, 40];
function checaAdulto(idade :number) { 
    return idade >= 18; 


 }
let val: boolean =  idades.every(checaAdulto);
console.log("Tem algum Adulto ?  : " + val );

//	filter()
//Cria uma nova array com todos os elementos dessa array para os quais a função de filtragem fornecida retorna verdadeira.

let idadesFilter: number [] =  idades.filter(checaAdulto);

console.log("filtro  : " + idadesFilter );

//forEach()
//Chama uma função para cada elemento na array.

let frutas: string[] = ["maça", "laranja", "morango"];
frutas.forEach(minhaFuncao);

function minhaFuncao(item : string , index : number) {
    console.log(`index ${index} e item ${item}`);
    
  }

  //indexOf()
  //Retorna o primeiro (mínimo) índice de um elemento dentro da array igual ao valor especificado ou -1 se nenhum for encontrado.

  var index = [12, 5, 8, 130, 44].indexOf(8); 
  console.log("O index é : " + index );

  //join()
  // Une todos os elementos de uma array em uma string.
  var arr = new Array("First","Second","Third"); 
  var str = arr.join(); 
console.log("str : " + str );
var str = arr.join(", "); 
console.log("str : " + str );
var str = arr.join(" + "); 
console.log("str : " + str );

//lastIndexOf()
//Retorna o último (maior) índice de um elemento dentro da array igual ao valor especificado ou -1 se nenhum for encontrado.
var index = [12, 5, 8, 130, 44].lastIndexOf(44); 
console.log("O index maior  : " + index );

//map()
//Cria uma nova array com os resultados da chamada de uma função fornecida em todos os elementos dessa array.

let numbers2 :number[] = [4, 9, 16, 25];
var numbersMAP :number []= numbers2.map(myFunction)

function myFunction(num:number) {
    return num * 10;
  }

  console.log("Teste  Map - " + numbersMAP);

  //pop()
  // Remove o último elemento de uma array e retorna esse elemento.
          
let element = numbers2.pop(); 
console.log("O número removido foi : " + element );

//push()
// Adiciona um ou mais elementos ao final de uma array e retorna o novo comprimento da array.

let novoTamanho: number = notasAlunos.push(10);
console.log("O novo tamanho é - " + novoTamanho);
console.log(notasAlunos);

//reduceRight()
//Aplique uma função simultaneamente contra dois valores da array (da direita para a esquerda) para reduzi-la a um único valor.

let numbers3 :number[] = [1, 2, 3, 4];
function getSubtracao(total: number, num : number) {
    return total - num;
  }
 let resultado: number = numbers3.reduceRight(getSubtracao);

 console.log("Resultado reduceRight - " + resultado );

 //reverse()
 //Inverte a ordem dos elementos de uma array - o primeiro se torna o último e o último se torna o primeiro.

 var arr1 = numbers3.reverse(); 
console.log("Reversed array e : " + arr1 );

//shift()
//Remove o primeiro elemento de uma array e retorna esse elemento.

let shift = numbers3.shift();

console.log("teste shift - " + shift);

//some()
//Retorna true se pelo menos um elemento dessa array satisfizer a função de teste fornecida.

let val2: boolean =  idades.some(checaAdulto);
console.log("Tem algum Adulto (some)?  : " + val2 );

//slice()
//Extrai uma parte de uma array e retorna uma nova array.

var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  
console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );

//sort()
//Sorteia os elementos de uma array.

var sorted = arr.sort(); 
console.log("sort testes: " + sorted );

//	splice()
//Adiciona e / ou remove elementos de uma array.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
var removed = fruits.splice(2, 0, "water"); 

console.log("After adding 1: " + fruits );  
console.log("removed is: " + removed); 

removed = fruits.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);

//	toString()
//Retorna uma string representando a array e seus elementos.

let representacaoFrutas : string = fruits.toString();

console.log("ToString-"+representacaoFrutas);

//unshift()
//Adiciona um ou mais elementos à frente de uma matriz e retorna o novo comprimento da matriz.
var arr = new Array("orange", "mango", "banana", "sugar"); 
var length = arr.unshift("water"); 
console.log("Returned array is : " + arr );
console.log("Length of the array is : " + length );











//https://www.tutorialspoint.com/typescript/typescript_arrays.htm
