// Related to backend developer

// Convert data json ke data json lagi

/* 

Read JSON file and change the format

Most data were in nested objects but the output will be in array object nested

Continue Learning
*/

// Need to read json data first
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./company.json", "utf-8"))

// Tes data kebaca atau tidak
// console.log(data)

// Make functions to read the data
async function CompaniesData() {
    const result = []

    for (let companyName in data) {
        const company = data[companyName]

        console.log(company)
    }
}

CompaniesData()