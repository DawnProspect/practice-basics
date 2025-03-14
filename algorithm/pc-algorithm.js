

// ? Ingat ini pertanyaan yang dibuat algorithma nya dulu bukan kode ya

// ! NOMOR 1
// ! Soalnya
// Input: 7 → Output: "Ganjil"
// Input: 10 → Output: "Genap"

/*
Jawabanku

1. Pertama kita cek dulu input yang masuk itu angka berapa
2. Terus kita ambil angka itu dan kita taro di variable
3. Terus kita cek apakah angka itu genap atau ganjil
4. Buat perkondisian kalau angka itu tidak habis dibagi 2 maka console.log ganjil
5. Buat perkondisian lagi kalau angka itu habis dibagi 2 maka console.log genap

*/

// ? Jawabannnya

/*

1. Terima input: Ambil angka yang ingin dicek
2. Simpan angka di dalam variable: Simpan angka tersebut di dalam sebuah variable
3. Buat perkondisian, cek angka genap atau ganjil.
    Jika angka habis dibagi 2 (input % 2 === 0) berarti genap
    Jika tidak habis dibagi 2 berarti ganjil
4. Tampilkan hasilnya dengan cetak console.log "Genap" atau "Ganjil" sesuai dengan hasil pengecekan
*/

// ! NOMOR DUA
// Input: "katak" → Output: "Palindrom"
// Input: "mobil" → Output: "Bukan Palindrom"
// Input: "radar" → Output: "Palindrom"

/*
Jawabanku

1. Pertama kita terima input dan ambil kata berupa string
2. Kedua simpan kata tersebut di suatu variable
3. Ketiga buat perkondisian, dengan loop kata yang disimpan
    Jika kata dicek dan dibalik meenghasilkan kata yang sama dengan inputnya, kita cetak console.log Palindrom
    Jika kata dicek dan dibalik menghasilkan kata yang berbeda dengan inputnya, kita cetak console.log Bukan Palindrom

*/

// ? Jawabannnya

/*

1. Terima input: Ambil kata yang ingin dicek sebagai string
2. Simpan kata tersebut dalam suatu variable
3. Buat variable untuk buat versi terbalik dari kata tersebut
4. Bandingkan variable yang dibalik dengan kata aslinya, jika sama cetak console.log "Palindrom"
5. Bandingkan variable yang dibalik dengan kata aslinya, jika berbeda cetak console.log "Bukan palindrome"

*/

// ! NOMOR TIGA

// SOALNYA

// Buat algoritma dalam bentuk kata kata untuk menghitung jumlah huruf vokal dalam sebuah kata atau kalimat

// Huruf Vokal yang dihitung a, e, i, o, u (baik huruf besar maupun kecil)

// Input: "Halo Dunia" → Output: 5
// Input: "Coding itu seru" → Output: 7
// Input: "Buku" → Output: 2


/*

1. Pertama kita buat variable vokal dulu isinya array string a, e, i, o, u, A, I, E, O, U
2. Kedua kita terima input string kata yang di input
3. Ketiga loop dulu array yang string variable vokal untuk akses isi dalamnya
4. buat variable untuk menghitung angka (defaultnya 0)
5. buat perkondisian jika di dalam input ada variable vokal maka variable menghitung menambah 1 (jadinya kalau ada 2 vokal berarti total ada 2)
6. nanti return variable hitung angka

*/

// ? JAWABANNYA
/*

Yang lebih efesien dan mudah dimengerti

1. Buat variable berisi daftar huruf vokal dalam array berisi a, e, i, o, u, A, E, I, O, U

2. Terima input berupa string yang akan dicek

3. Buat variable penghitung untuk menghitung huruf vokal yang ada di input (diatur dari 0 dari awal)

4. Loop variable array huruf vokal dan setiap huruf input

    Cek apakah huruf tersebut ada di dalam daftar vokal
    Jika ada tambahkan 1 ke penghitung

5. return hasil total huruf vokal yang ditemukan

*/

// ! NOMOR EMPAT

// Buat algoritma dalam bentuk kata-kata untuk menghitung jumlah kata unik dalam sebuah kalimat
// Abaikan huruf besar/kecil, abakan tanda baca (anggap hanya ada huruf dan spasi, setiap kata muncul lebih dari satu kali tetap dihitung sebagai satu kata unik)

// Input: "Halo dunia, halo semua!" → Output: 3  (kata unik: "halo", "dunia", "semua")  
// Input: "Belajar coding itu seru, belajar terus!" → Output: 5  (kata unik: "belajar", "coding", "itu", "seru", "terus")  


/*

JAWABAN

1. Pertama kita terima input dalam bentuk string
2. kita buat variable array untuk menyimpan kata unik dan kita juga buat variable penghitung untuk menghitung jumlah kata unik
3. kita loop terlebih dahulu input stringnya, setiap kata yang ditemukan di push ke variable kata unik dipisah dengan spasi atau koma
4. setelah itu tambah angka 1 setiap kata unik ditemukan
5. return dan cetak console.log output: variable penghitung (kata unik: string dari variable penyimpan kata unik)

*/

// ? JAWABANNYA

/*

Revisi Algoritma (lebih jelas & tepat)

    1. Terima input dalam bentuk string.
    2. Bersihkan tanda baca (hapus koma, titik, dll.) dan ubah ke huruf kecil agar konsisten.
    3. Pisahkan kata-kata berdasarkan spasi menjadi sebuah array.
    4. Buat sebuah set atau array penyimpanan untuk menyimpan kata unik.
    5. Loop setiap kata dalam array hasil pemisahan:
        Jika kata belum ada dalam penyimpanan, tambahkan ke sana.
    6. Hitung jumlah kata unik dari penyimpanan tadi.
    7. Cetak hasilnya (jumlah kata unik & daftar kata unik).

Masukan Analisis Jawabanmu

    Kamu udah punya ide bagus tentang pemisahan kata!
    Yang perlu diperbaiki:
        Kata unik tidak dihitung setiap kali ditemukan, cukup disimpan sekali.
        Gunakan struktur data seperti Set atau cek manual apakah kata sudah ada sebelum ditambahkan.

*/