const randomIntBetween = (end,start = 0) => Math.floor(Math.random() * end) + start

const shuffleArray = function (array) {
    // clone array
    const dup_array = array.slice()

    const array_len = dup_array.length

    // random swapping for all elements
    for (let i = 0; i < array_len; i++) {
        randomIndex = randomIntBetween(array_len - 1)
        // swap
        const temp = dup_array[i];
        dup_array[i] = dup_array[randomIndex]
        dup_array[randomIndex] = temp
    }
    return dup_array
}

module.exports = shuffleArray;
