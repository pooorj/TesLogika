// 1. Buat fungsi dengan menampilkan bilangan cacah kelipatan 3 atau 7 sebanyak N, serta menampilkan huruf Z saat bilangan tersebut kelipatan 3 dan 7.

function bilanganCacahKelipatan3Atau7(N) {
  let hasil = []
  for (let i = 1; i <= N; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
      hasil.push("Z")
    } else if (i % 3 == 0) {
      hasil.push(i)
    } else if (i % 7 == 0) {
      hasil.push(i)
    }
  }
  return hasil
}

// 2. Buat fungsi pencarian ‘sang gajah’, ‘serigala’, ‘harimau’.Dengan contoh masukan dan keluaran sebagai berikut : Input	: Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.Output	: sang gajah - sang gajah - serigala - serigala - harimau

function cariKata(kalimat) {
  let hasil = []
  let kata = kalimat.split(" ")
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] == "sang") {
      hasil.push(kata[i])
    } else if (kata[i] == "gajah") {
      hasil.push(kata[i])
    } else if (kata[i] == "serigala") {
      hasil.push(kata[i])
    } else if (kata[i] == "harimau") {
      hasil.push(kata[i])
    }
  }
  return hasil.join(" - ")
}

// 3. Buatlah fungsi pengecekan kata sandi, dengan ketentuan sebagai
// Kata sandi minimal 8 karakter
// Kata sandi maksimal 32 karakter
// Karakter awal tidak boleh angka
// Harus memiliki angka
// Harus memiliki huruf kapital dan huruf kecil
// Contoh
// Input : 5andiwara
// Output : Karakter awal tidak boleh angka

// Input : sandiwar4
// Output : Harus memiliki huruf kapital dan huruf kecil

// Input : Sandiwar4
// Output : Kata sandi valid

function cekKataSandi(kataSandi) {
  let angka = "0123456789"
  let hurufKapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let hurufKecil = "abcdefghijklmnopqrstuvwxyz"
  let hasil = []
  if (kataSandi.length < 8) {
    hasil.push("Kata sandi minimal 8 karakter")
  } else if (kataSandi.length > 32) {
    hasil.push("Kata sandi maksimal 32 karakter")
  } else if (angka.includes(kataSandi[0])) {
    hasil.push("Karakter awal tidak boleh angka")
  } else if (!angka.includes(kataSandi)) {
    hasil.push("Harus memiliki angka")
  } else if (!hurufKapital.includes(kataSandi)) {
    hasil.push("Harus memiliki huruf kapital")
  } else if (!hurufKecil.includes(kataSandi)) {
    hasil.push("Harus memiliki huruf kecil")
  } else {
    hasil.push("Kata sandi valid")
  }
  return hasil.join(" ")
}

// 4. Buat fungsi pengecekan bilangan cacah terkecil yang tidak ada dari data yang diinputkan. Dengan contoh input dan output sebagai berikut :
// Contoh 1
// Contoh 2
// Contoh 3
// Input : [5, 2, 8, 4, 3, 10]
// Output : 6
// Input : [2, 3, 4, 6]
// Output : 5
// Input : [8, 6, 7, 12]
// Output : 9

function bilanganCacahTerkecil(arr) {
  let hasil = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      hasil.push(arr[i] + 1)
    }
  }
  return hasil[0]
}

// 5. Buat pola berikut sesuai inputan N, dengan N adalah bilangan ganjil

// *catatan : nilai lebih jika pakai rekursif
// Input
// N = 5
// N = 3
// N = 7
// N = 2
// Output
// XXXXX
// XOOXX
// XOXOX
// XXOOX
// XXXXX
// XXX
// XXX
// XXX
// XXXXXXX
// XOOOOXX
// XOOOXOX
// XOOXOOX
// XOXOOOX
// XXOOOOX
// XXXXXXX
// Harus bilangan ganjil

function pola(N) {
  let hasil = []
  for (let i = 0; i < N; i++) {
    let temp = []
    for (let j = 0; j < N; j++) {
      if (i == 0 || j == 0 || i == N - 1 || j == N - 1) {
        temp.push("X")
      } else {
        temp.push("O")
      }
    }
    hasil.push(temp)
  }
  return hasil
}
