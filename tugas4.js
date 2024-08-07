console.log("Soal No.4")
let sukuPertama = 4
let ratio = 3
let banyakSuku = 10
let totalll = 0
let suku = sukuPertama

for (let i = 1; i <= banyakSuku; i++) {
  totalll += suku
  suku *= ratio
}

console.log("Hasil Dari Deret 10 Angka : " + totalll.toLocaleString())