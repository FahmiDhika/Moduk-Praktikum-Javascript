console.log("Soal No.3")
let tb = 170
const tbafter = tb / 100
let bb = 90
const bmi = bb / (tbafter * tbafter)
console.log("Hasil BMI : " + bmi.toLocaleString())

if (bmi <= 18.5) {
  console.log("Keterangan : Stunting")
} else if (bmi <= 24.9) {
  console.log("Keterangan : Normal")
} else if (bmi <= 29.9) {
  console.log("Keterangan : Kelebihan Berat Badan")
} else {
  console.log("Keterangan : Obesitas")
}