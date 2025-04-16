function removeDuplicates(arr) {
    let number = []
    let temp = []

    for(let i = 0; i < arr.length; i++) {
        if(i === i) {
            i += temp
        } else {
            i += number
        }
    }
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]

