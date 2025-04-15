// STORE randomNumber WITH RANDOM NUMBER BETWEEN 1 to 100

// IF randomNumber BETWEEN 1 - 50 THEN
//     DISPLAY "Kamu mendapatkan karakter COMMON"
// ELSE IF randomNumber BETWEEN 51 - 80 THEN
//     DISPLAY "Kamu mendapatkan karakter RARE"
// ELSE IF randomNumber BETWEEN 81 - 95 THEN
//     DISPLAY "Kamu mendapatkan karakter EPIC"
// ELSE IF randomNumber BETWEEN 96 - 100 THEN
//     DISPLAY "Kamu mendapatkan karakter LEGENDARY!!"
// END IF


let randomNumber = Math.floor(Math.random() * 100) + 1

console.log(randomNumber)

if (randomNumber >= 1 && randomNumber <= 50) {
    console.log("Kamu mendapatkan karakter COMMON")
} else if (randomNumber > 50 && randomNumber <= 80) {
    console.log("Kamu mendapatkan karakter RARE")
} else if (randomNumber > 80 && randomNumber <= 95) {
    console.log("Kamu mendapatkan karakter EPIC")
} else if (randomNumber > 95 && randomNumber <= 100) {
    console.log("Kamu mendapatkan karakter LEGENDARY!!")
}