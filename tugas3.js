function calculateBMI() {
  const button = document.getElementById("btn")
  const tb = Number(document.getElementById("tb").value)
  const bb = Number(document.getElementById("bb").value)

  const tbafter = tb / 100

  const bmi = bb / (tbafter * tbafter)

  document.getElementById("hasil").innerHTML = "Hasil BMI : " + bmi.toFixed(2)

  if (bmi <= 18.5) {
    document.getElementById("keterangan").innerHTML = "Keterangan : Stunting"
  } else if (bmi <= 24.9) {
    document.getElementById("keterangan").innerHTML = "Keterangan : Normal"
  } else if (bmi <= 29.9) {
    document.getElementById("keterangan").innerHTML = "Keterangan : Kelebihan Berat Badan"
  } else {
    document.getElementById("keterangan").innerHTML = "Keterangan : Obesitas"
  }
}