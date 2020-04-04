"use strict";
const precos = ['10', '20', '50', '100'];
// const precosEmreais : string [] = precos.map(function(preco){
//     return `R$ ${preco},00`
// });
const precosEmreais = precos.map(preco => `R$ ${preco},00`);
console.log(precosEmreais);
const acimaDeVinte = precos
    .filter(preco => +preco > 20)
    .map(preco => `R$ ${preco},00`);
console.log(acimaDeVinte);
//# sourceMappingURL=arrow-function.js.map