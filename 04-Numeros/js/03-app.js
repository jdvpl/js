let resultado;

resultado = Math.PI;
console.log("🚀 ~ file: 03-app.js ~ line 3 ~ resultado", resultado);

resultado = Math.round(2.8);
console.log("🚀 ~ file: 03-app.js ~ line 6 ~ resultado", resultado);
resultado = Math.round(2.2);
console.log("🚀 ~ file: 03-app.js ~ line 8 ~ resultado", resultado);
resultado = Math.round(2.5);
console.log("🚀 ~ file: 03-app.js ~ line 8 ~ resultado", resultado);

// redonder hacer arriba
resultado = Math.ceil(2.01);
console.log("🚀 ~ file: 03-app.js ~ line 15 ~ resultado", resultado);
resultado = Math.floor(2.9);
console.log("🚀 ~ file: 03-app.js ~ line 15 ~ resultado", resultado);

resultado = Math.sqrt(144);
console.log("🚀 ~ file: 03-app.js ~ line 20 ~ resultado", resultado);

// valor absoluto

resultado = Math.abs(-500);
console.log("🚀 ~ file: 03-app.js ~ line 25 ~ resultado", resultado);
resultado = Math.abs(700.56);
console.log("🚀 ~ file: 03-app.js ~ line 25 ~ resultado", resultado);

// petencias

resultado = Math.pow(2, 8);
console.log("🚀 ~ file: 03-app.js ~ line 32 ~ resultado", resultado);

// minimo y maximo

resultado = Math.min(4, 5, -1, 8, 2);
console.log("🚀 ~ file: 03-app.js ~ line 36 ~ resultado", resultado);
resultado = Math.max(4, 5, -1, 8, 2);
console.log("🚀 ~ file: 03-app.js ~ line 36 ~ resultado", resultado);

// random
resultado = Math.random();
console.log("🚀 ~ file: 03-app.js ~ line 43 ~ resultado", resultado);

// aleatorio en un rango
resultado = Math.floor(Math.random() * 30);
console.log("🚀 ~ file: 03-app.js ~ line 46 ~ resultado", resultado);
