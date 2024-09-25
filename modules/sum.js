function sum(obj) {
    let somme = 0;
    for (let elem of obj.cart) {
        somme += elem.price
        console.log(somme)
    }
    return somme;
}

let obj1 = {
    name: "tada",
    cart: [
        {
            departure: 'Paris',
            arrival: 'Lyon',
            price: 117
        },
        {
            departure: 'Paris',
            arrival: 'Lyon',
            price: 65
        },
        {
            departure: 'Paris',
            arrival: 'Lyon',
            price: 148
        }
    ]
}
console.log(sum(obj1))

module.exports = { sum };