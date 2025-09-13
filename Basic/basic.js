// Array
const animaliSemplici = [
  { nome: "cane", zampe: 4, habitat: "casa" },
  { nome: "tigre", zampe: 4, habitat: "foresta" },
  { nome: "gatto", zampe: 4, habitat: "casa" },
  { nome: "pappagallo", zampe: 2, habitat: "foresta" },
  { nome: "ape", zampe: 6, habitat: "prato" },
];

// 1. Stampare tutti i nomi con un ciclo `for`.
for (let i = 0; i < animaliSemplici.length; i++) {
  console.log(animaliSemplici[i].nome);
}
console.log("---");
// 2. Contare gli animali con 4 zampe.
let count = 0;
for (let i = 0; i < animaliSemplici.length; i++) {
  if (animaliSemplici[i].zampe === 4) {
    count++;
  }
}
console.log("Gli animali con 4 zampe sono:", count);
console.log("---");
// 3. Aggiungere un nuovo animale all’array.
animaliSemplici.push({ nome: "criceto", zampe: 4, habitat: "casa" });
console.log(animaliSemplici);
console.log("---");
// 4. Verificare se esiste un animale chiamato "gatto".
const esisteGatto = animaliSemplici.find((e) => e.nome === "gatto");
console.log(esisteGatto);
console.log("---");
// 5. Calcolare il numero totale di zampe.
let totaleZampe = 0;
for (let i = 0; i < animaliSemplici.length; i++) {
  totaleZampe += animaliSemplici[i].zampe;
}
console.log(totaleZampe);
console.log("---");
// 6. Stampare animali che vivono in `"casa"`.
const animaliCasa = animaliSemplici.filter((e) => e.habitat === "casa");
console.log(animaliCasa);
console.log("---");
// 7. Verificare che tutti abbiano almeno 2 zampe (`every()`).
const dueZampe = animaliSemplici.every((e) => e.zampe >= 2);
console.log(dueZampe);
console.log("---");
// 8. Modificare l’habitat del `"cane"` in `"giardino"`.
const cane = animaliSemplici.find((e) => e.nome === "cane");
if (cane) {
  cane.habitat = "giardino";
}
console.log(animaliSemplici);
console.log("---");
// 9. Contare quanti animali hanno un numero pari di zampe.
let countPari = 0;
for (let i = 0; i < animaliSemplici.length; i++) {
  if (animaliSemplici[i].zampe % 2 === 0) {
    countPari++;
  }
}
console.log("Gli animali con zampe pari sono:", countPari);
