function handleFormSubmit(event) {
    event.preventDefault()
    const name = event.target.name.value
    const description = event.target.description.value
    const price = event.target.price.value
    const quantity = event.target.quantity.value
    const obj = {
        name,
        description,
        price,
        quantity
    }

    // create
    axios
        .post("https://crudcrud.com/api/c526ea1815834095b4be6c684cb48cce/details", obj)
        .then((response) => {
            console.log(response)
            onscreen(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}
// read
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get("https://crudcrud.com/api/c526ea1815834095b4be6c684cb48cce/details")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                onscreen(response.data[i])
            }
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
})
// screen
function onscreen(obj) {
    // input removing
    document.getElementById("name").value = ""
    document.getElementById("description").value = ""
    document.getElementById("price").value = ""
    document.getElementById("quantity").value = ""
    const form = document.querySelector("form")
    const newItem = document.createElement("p")
    newItem.setAttribute("id", obj._id)
    newItem.innerHTML = `${obj.name} - ${obj.description} - ${obj.price}rs - ${obj.quantity}
        <button onclick=buy1("${obj._id}","${obj.name}","${obj.description}","${obj.price}","${obj.quantity}")>Buy 1</button>
        <button onclick=buy2("${obj._id}","${obj.name}","${obj.description}","${obj.price}","${obj.quantity}")>Buy 2</button>
        <button onclick=buy3("${obj._id}","${obj.name}","${obj.description}","${obj.price}","${obj.quantity}")>Buy 3</button>`
    form.parentElement.appendChild(newItem)
}
// update
// buy1
function buy1(objId, name, description, price, quantity) {
    const item = document.getElementById(objId)
    const updatedQuantity = parseInt(quantity) - 1
    if (quantity <= 0) {
        alert("Item is empty.")
        return
    }
    axios
        .put(`https://crudcrud.com/api/c526ea1815834095b4be6c684cb48cce/details/${objId}`, {
            name,
            description,
            price,
            quantity: updatedQuantity.toString()
        })
        .then((response) => {
            item.innerHTML = `${name} - ${description} - ${price}rs - ${updatedQuantity}
            <button onclick=buy1("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 1</button>
            <button onclick=buy2("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 2</button>
            <button onclick=buy3("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 3</button>`
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
}
// buy2
function buy2(objId, name, description, price, quantity) {
    const item = document.getElementById(objId)
    const updatedQuantity = parseInt(quantity) - 2
    if (quantity <= 0) {
        alert("Item is empty.")
        return
    }
    if(updatedQuantity<0){
        alert("Item is low.")
        return
    }
    axios
        .put(`https://crudcrud.com/api/c526ea1815834095b4be6c684cb48cce/details/${objId}`, {
            name,
            description,
            price,
            quantity: updatedQuantity.toString()
        })
        .then((response) => {
            item.innerHTML = `${name} - ${description} - ${price}rs - ${updatedQuantity}
            <button onclick=buy1("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 1</button>
            <button onclick=buy2("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 2</button>
            <button onclick=buy3("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 3</button>`
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
}
// buy3
function buy3(objId, name, description, price, quantity) {
    const item = document.getElementById(objId)
    const updatedQuantity = parseInt(quantity) - 3
    if (quantity <= 0) {
        alert("Item is empty.")
        return
    }
    if(updatedQuantity<0){
        alert("Item is low.")
        return
    }
    axios
        .put(`https://crudcrud.com/api/c526ea1815834095b4be6c684cb48cce/details/${objId}`, {
            name,
            description,
            price,
            quantity: updatedQuantity.toString()
        })
        .then((response) => {
            item.innerHTML = `${name} - ${description} - ${price}rs - ${updatedQuantity}
            <button onclick=buy1("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 1</button>
            <button onclick=buy2("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 2</button>
            <button onclick=buy3("${objId}","${name}","${description}","${price}","${updatedQuantity}")>Buy 3</button>`
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
}
