const precos : string[] = ['10', '20' , '50' , '100'] ;

// const precosEmreais : string [] = precos.map(function(preco){
//     return `R$ ${preco},00`
// });

const precosEmreais : string [] = precos.map(preco => `R$ ${preco},00`);

console.log(precosEmreais);

const acimaDeVinte = precos
    .filter(preco => + preco  > 20)
    .map(preco => `R$ ${preco},00`);

    console.log(acimaDeVinte);
    