// soal 1
console.log("Soal No.1");
let p = 20.5;
let l = 30;
let harga = 1500000;

const tanah = p * l;
console.log("Luas tanah : " + tanah.toLocaleString());

const hargaTanah = tanah * harga;
console.log("Harga Tanah : " + hargaTanah.toLocaleString());

const pajak = hargaTanah * (15 / 100);
console.log("Pajak : " + pajak.toLocaleString());

const total = pajak + hargaTanah;
console.log("Pak Arman Harus Membayar Sebesar : Rp. " + total.toLocaleString());
