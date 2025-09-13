# 🐾 Esercizi sugli Array di Oggetti (Animali)

Questo progetto raccoglie una serie di esercizi in JavaScript organizzati per **livelli di difficoltà** (semplici, intermedi, difficili) ed esercizi extra.  
Gli esercizi si basano su array di oggetti contenenti informazioni sugli animali e permettono di allenarsi con metodi sugli array, cicli, funzioni e logica di programmazione.

---

## 📂 Struttura degli esercizi

### ✅ Esercizi Semplici

Array di base con animali caratterizzati da: `nome`, `zampe`, `habitat`.  
Obiettivi:

1. Stampare tutti i nomi con un ciclo `for`.
2. Contare gli animali con 4 zampe.
3. Aggiungere un nuovo animale all’array.
4. Verificare se esiste un animale chiamato "gatto".
5. Calcolare il numero totale di zampe.
6. Stampare animali che vivono in `"casa"`.
7. Verificare che tutti abbiano almeno 2 zampe (`every()`).
8. Modificare l’habitat del `"cane"` in `"giardino"`.
9. Contare quanti animali hanno un numero pari di zampe.

---

### ⚡ Esercizi Intermedi

Array più dettagliato con proprietà aggiuntive: `isDangerous`, `dieta`.  
Obiettivi:

1. Separare gli animali in due array: pericolosi e non.
2. Filtrare solo gli animali carnivori.
3. Calcolare la percentuale di animali pericolosi.
4. Scrivere una funzione `trovaAnimaliPerDieta`.
5. Creare `filtraAnimaliPericolosi`.
6. Clonare l’array e impostare `isDangerous: false` solo nel clone.
7. Verificare che tutti abbiano la proprietà `dieta`.
8. Aggiungere la dieta `"insettivora"` al `"pappagallo"`.

---

### 🔥 Esercizi Difficili

Array con collegamenti tramite `habitatId`.  
Obiettivi:

1. Unire animali e habitat in un nuovo array con tutte le info.
2. Contare quanti animali vivono in habitat pericolosi.
3. Funzione `trovaAnimaliPerHabitat`.
4. Trovare coppie di animali con lo stesso numero di zampe.
5. Funzione `trovaAnimaliConZampe`.
6. Calcolare la media delle zampe per ogni habitat.
7. Clonare l’array e impostare `zampe = 3`.
8. Funzione `sommaZampePerHabitat`.
9. Funzione `trovaAnimaliConHabitatMancante`.

---

### ➕ Esercizi Extra: Array

1. Creare un array `diete` (simile a `habitat`) e integrarlo con `animaliDifficili`.
2. Creare `nomiLunghi`: animali con nome > 5 caratteri.
3. Creare `erbivoriConQuattroZampe` (usando `animaliIntermedi`).

---

### 🔁 Esercizi Extra: For Loop

1. Verificare habitat validi con cicli annidati.
2. Calcolare zampe totali per habitat con cicli annidati.
