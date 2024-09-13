const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100))
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    if (numbers[i] >= 50) {
        console.log("il a économisé "+(9-i)+" essais")
        break
    }
}
