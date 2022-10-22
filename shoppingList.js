let pArray = [];
let prArray = [];

function addToCartA(){
    pArray.push("Loaf of Wheat Bread")
    prArray.push(5.00)
    console.log(pArray)
    console.log(prArray)
}

function addToCartB(){
    pArray.push("Loaf of White Bread")
    prArray.push(4.00)
    console.log(pArray)
    console.log(prArray)
}

function addToCartC(){
    pArray.push("Jar of Peanut Butter: 40 oz.")
    prArray.push(3.50)
    console.log(prArray)
}

function addToCartD(){
    pArray.push("Jar of Jelly: 24 oz.")
    prArray.push(4.50)
}

function addToCartE(){
    pArray.push("Pack of Sliced Turkey: 30 oz.")
    prArray.push(5.50)
}

function addToCartF(){
    pArray.push("Pack of Sliced Ham: 30 oz.")
    prArray.push(5.25)
}

function addToCartG(){
    pArray.push("Head of Lettuce")
    prArray.push(2.00)
}

function addToCartH(){
    pArray.push("Tomato")
    prArray.push(1.25)
}

function addToCartI(){
    pArray.push("Pack of Cheese Slices")
    prArray.push(4.25)
}

function addToCartJ(){
    pArray.push("Squeeze Container of Mustard: 32 oz.")
    prArray.push(4.25)
}

function getReceipt(){
    
    pArray.forEach(item => {
        let index = pArray.indexOf(item)
        let itemPr = prArray[index]
        let itemPrS = `$${itemPr}`
        let p = document.createElement("li")
        let pr = document.createElement("li")
        let lineBreak = document.createElement("br")
        pr = itemPrS
        p = `${item}`
        pr = `${itemPrS}`
        document.body.append(`${p}----------${pr}`)
        document.body.appendChild(lineBreak)
    })

    let total = 0
    prArray.forEach(item => {
        total += item
    })
    let totalE = document.createElement("h2")
    totalE = `Your total is $${Number(total).toFixed(2)}!`
    document.body.append(totalE);
}