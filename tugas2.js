console.log("Soal No.2")
let barang = [
  { nama: "Beras", harga: 10000, jumlah: 5 },
  { nama: "Gula", harga: 14000, jumlah: 5 },
  { nama: "Telur", harga: 20000, jumlah: 2 },
  { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },
]
let totall = 0
for (let item of barang) {
  totall += item.harga * item.jumlah
}
console.log("Total Belanja Bu Astuti : Rp. " + totall);