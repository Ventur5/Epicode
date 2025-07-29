const normalUser = [
    {
        name: "Valerio",
        surname: "Vela",
        isAmbassador: false,
    },
    {
        name: "Matteo",
        surname: "Tulli",
        isAmbassador: false,
    },
];

const ambassador = [
    {
        name: "Luca",
        surname: "Boldi",
        isAmbassador: true,
    },
    {
        name: "Lorenzo",
        surname: "Seppi",
        isAmbassador: true,
    },
];

const products = [
    {
        name: "glasses",
        price: 25,
    },
    {
        name: "car",
        price: 1000,
    },
];

const shippingCost = 50; // costi di spedizione
const ambassadorPriv = 30; // percentuale di sconto riservato agli ambassador

for (let j = 0; j < normalUser.length; j++) {
    if (products[j].price >= 100) {
        console.log(`${normalUser[j].name} ha speso ${products[j].price} non pagando costi di spedizione perche l'importo del carrello e' maggiore di 100`)
    } else if (products[j].price <= 100) {
        console.log(`${normalUser[j].name} ha speso ${products[j].price + shippingCost} pagando i costi di spedizione perche l'importo del carrello e' inferiore a 100`)
    }
};

for (let j = 0; j < ambassador.length; j++) {
    if (ambassador[j].isAmbassador && products[j].price <= 100) {
        console.log(`${ambassador[j].name} spende invece ${products[j].price - (products[j].price * ambassadorPriv) / 100 + shippingCost} pagando costi di spedizione perche l'importo del carrello e' inferiore a 100`)
    } if (products[j].price >= 100) {
        console.log(`${ambassador[j].name} spende invece ${products[j].price - (products[j].price * ambassadorPriv) / 100} non pagando costi di spedizione perche l'importo del carrello e' maggiore di 100`)
    }
};