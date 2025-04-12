
// STORE kecepatan WITH ANY NUMBER
// IF kecepatan GREATER THAN 120 THEN
//     DISPLAY "Bahaya! Kurangi kecepatan!"
// ELSE IF kecepatan GREATER THAN 90 THEN
//     DISPLAY "Hati-hati, kecepatan cukup tinggi"
// ELSE
//     DISPLAY "Kecepatan aman"
// END IF


// let speed = 122

// if (speed > 120) {
//     console.log("Bahaya! Kurangi kecepatan!")
// } else if (speed > 90) {
//     console.log ("Hati hati, kecepatan cukup tinggi")
// } else {
//     console.log ("Kecepatan aman")
// }


// STORE pakaian WITH ANY STRING
// IF pakaian EQUALS "jas" THEN
//     DISPLAY "Pakaian sangat formal, cocok untuk presentasi!"
// ELSE IF pakaian EQUALS "kemeja" THEN
//     DISPLAY "Pakaian sudah cocok untuk kantor."
// ELSE
//     DISPLAY "Pertimbangkan ganti pakaian agar lebih sopan."
// END IF

// let dressCode = "kemeja"

// if (dressCode === "jas") {
//     console.log("Pakaian sangat formal, cocok untuk presentasi!")
// } else if (dressCode === "kemeja") {
//     console.log("Pakaian sudah cocok untuk kantor.")
// } else {
//     console.log("Pertimbangkan ganti pakaian agar lebih sopan")
// }


// STORE makanan WITH ANY STRING
// IF makanan EQUALS "burger" THEN
//     DISPLAY "Fast food lover detected!"
// ELSE IF makanan EQUALS "sate" THEN
//     DISPLAY "Wah, pecinta kuliner Nusantara!"
// ELSE
//     DISPLAY "Pilihan yang menarik!"
// END IF

// let food = "burger"

// if (food === "burger") {
//     console.log("Fast food lover detected!")
// } else if (food === "sate") {
//     console.log("Wah, pecinta kuliner Nusantara!")
// } else {
//     console.log("Pilihan yang menarik!")
// }


// STORE mode WITH ANY STRING
// IF mode EQUALS "easy" THEN
//     DISPLAY "Cocok untuk pemula."
// ELSE IF mode EQUALS "normal" THEN
//     DISPLAY "Tingkat kesulitan seimbang."
// ELSE IF mode EQUALS "hard" THEN
//     DISPLAY "Siap-siap tantangan berat!"
// ELSE
//     DISPLAY "Mode tidak dikenal."
// END IF

// let mode = "apa"

// if (mode === "easy") {
//     console.log("Cocok untuk pemula.")
// } else if (mode === "normal") {
//     console.log("Tingkat kesulitan seimbang.")
// } else if (mode === "hard") {
//     console.log("Siap-siap tantangan berat!.")
// } else {
//     console.log("Mode tidak dikenal.")
// }


// STORE totalBelanja WITH ANY NUMBER
// STORE isMember WITH BOOLEAN

// IF totalBelanja MORE THAN 500000 AND isMember IS TRUE THEN
//     DISPLAY "Diskon 20% untuk member!"
// ELSE IF totalBelanja MORE THAN 500000 THEN
//     DISPLAY "Diskon 10% untuk non-member"
// ELSE IF totalBelanja MORE THAN 200000 AND isMember IS TRUE THEN
//     DISPLAY "Diskon 5% untuk member"
// ELSE
//     DISPLAY "Belanja lebih banyak untuk dapat diskon!"
// END IF

let totalGroceries = 50000000
let isMember = true

if (totalGroceries > 500000 && isMember === true) {
    console.log("Diskon 20% untuk member!")
} else if (totalGroceries > 500000) {
    console.log("Diskon 10% untuk non member")
} else if (totalGroceries > 200000 && isMember === true) {
    console.log("Diskon 5% untuk member")
} else {
    console.log("Belanja lebih banyak untuk dapat diskon!")
}