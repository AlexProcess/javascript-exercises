const goodProducts = []
const badProducts = []
const sellCount = []

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (sellCount >= 20) {
        goodProducts.push(product)
    }

    if (sellCount < 20) {
        badProducts.push(product)
    }
    console.log(goodProducts, badProducts);
}