// Array
const animaliIntermedi = [
  { nome: "cane", zampe: 4, isDangerous: false, dieta: "onnivora" },
  { nome: "tigre", zampe: 4, isDangerous: true, dieta: "carnivora" },
  { nome: "cavallo", zampe: 4, isDangerous: false, dieta: "erbivora" },
  { nome: "pappagallo", zampe: 2, isDangerous: false },
];

// 1. Separare gli animali in due array: pericolosi e non.
const pericolosi = animaliIntermedi.filter((e) => e.isDangerous);
const noPericolosi = animaliIntermedi.filter((e) => !e.isDangerous);
console.log(pericolosi);
console.log(noPericolosi);
console.log("----");
// 2. Filtrare solo gli animali carnivori.
const carnivori = animaliIntermedi.filter((e) => e.dieta === "carnivora");
console.log(carnivori);
console.log("----");
// 3. Calcolare la percentuale di animali pericolosi.
const totali = animaliIntermedi.length;
const numPericolosi = animaliIntermedi.filter((e) => e.isDangerous).length;
const percentuale = (numPericolosi / totali) * 100;
console.log(percentuale);
console.log("----");

// 4. Scrivere una funzione `trovaAnimaliPerDieta`.
function trovaAnimaliPerDieta(array, dieta) {
  return array.filter((e) => e.dieta === dieta);
}
console.log(trovaAnimaliPerDieta(animaliIntermedi, "carnivora"));
console.log("----");
// 5. Creare `filtraAnimaliPericolosi`.
function filtraAnimaliPericolosi(array) {
  return array.filter((e) => e.isDangerous);
}
console.log(filtraAnimaliPericolosi(animaliIntermedi));
console.log("----");
// 6. Clonare l’array e impostare `isDangerous: false` solo nel clone.
const clone = animaliIntermedi.map((e) => ({
  ...e,
  isDangerous: false,
}));
console.log("Originale:", animaliIntermedi);
console.log("Clone:", clone);
console.log("----");
// 7. Verificare che tutti abbiano la proprietà `dieta`.
const hannoDieta = animaliIntermedi.every((e) => "dieta" in e);
console.log(hannoDieta);
console.log("----");
// 8. Aggiungere la dieta `"insettivora"` al `"pappagallo"`.
const pappagallo = animaliIntermedi.find((e) => e.nome === "pappagallo");
if (pappagallo) {
  pappagallo.dieta = "insettivora";
}
console.log(animaliIntermedi);
