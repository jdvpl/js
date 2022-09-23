const pro = "TV de 50 pulgadas";
// reemplazar
console.log(pro.replace("pulgadas", "'"));
console.log(pro.replace("TV", "TV curvo"));

// para cortar .slice
console.log(pro.slice(0, 10));
console.log(pro.slice(10));
console.log(pro.slice(10, 2));
// alternativa
console.log(pro.substring(0, 10));
console.log(pro.substring(10, 1));

// deiferencia entre substring y slice es que si le pasas el primer numero mayor que el segundo con substring lo intercambia en cambio con slice no hace nada no trae nada

// chartAt
console.log(pro.charAt(0));
