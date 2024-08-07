console.log("Soal No.5")

// induk class lingkaran
class lingkaran {
  constructor(jari) {
    this.jari = jari
  }

  luas() {
    return this.jari * this.jari * Math.PI
  }

  keliling() {
    return this.jari * 2 * Math.PI
  }
}

class tabung extends lingkaran {
  constructor(jari, tinggi) {
    super(jari)
    this.tinggi = tinggi
  }

  volume() {
    return this.luas() * this.tinggi;
  }

  luasPermukaan() {
    return this.keliling() + this.luas();
  }

  luasSelimut() {
    return this.keliling() * this.tinggi
  }
}

class kerucut extends lingkaran {
    constructor(jari, tinggi) {
        super(jari)
        this.tinggi = tinggi
    }

    volume() {
        return this.luas() * this.tinggi * 1/3
    }

    luasSelimut() {
        const jari = this.jari
        const tinggi = this.tinggi
        const s = Math.sqrt((jari * jari) + (tinggi * tinggi))
        return Math.PI * jari * s
    }

    luasPermukaan() {
        const jari = this.jari
        const tinggi = this.tinggi
        const s = Math.sqrt((jari * jari) + (tinggi * tinggi))
        return this.luas() + (Math.PI * jari * s)
    }
}

class bola extends lingkaran {
    constructor(jari) {
        super(jari)
    }

    volume() {
        return (this.luas() * this.jari) * (4/3)
    }

    luasPermukaan() {
        return this.luas() * 4
    }
}

// hasil tabung
const tab = new tabung(7.5 , 50)
console.log("Volume Tabung : " + tab.volume().toLocaleString() + "cm^3")
console.log("Luas Permukaan Tabung : " + tab.keliling().toLocaleString() + "cm^2")
console.log("Luas Selimut Tabung : " + tab.luasSelimut().toLocaleString() + "cm^2")
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-")

// hasil kerucut
const ker = new kerucut(10, 40)
console.log("Volume Kerucut : " + ker.volume().toLocaleString() + "cm^3")
console.log("Luas Permukaan Kerucut : " + ker.luasPermukaan().toLocaleString() + "cm^2")
console.log("Luas Selimut Kerucut : " + ker.luasSelimut().toLocaleString() + "cm^2")
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-")

// hasil Bola
const bol = new bola(15)
console.log("Volume Bola : " + bol.volume().toLocaleString() + "cm^3")
console.log("Luas Permukaan Bola : " + bol.luasPermukaan().toLocaleString() + "cm^2")
console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-")