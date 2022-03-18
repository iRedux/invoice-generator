const washBtn = document.getElementById("wash-car")
const mowBtn = document.getElementById("mow-lawn")
const pullBtn = document.getElementById("pull-weeds")
const totalPriceEl = document.getElementById("total-price")
const invoiceTasks = document.getElementById("invoice-tasks")
const invoicePrices = document.getElementById("invoice-prices")
// Putting all buttons in array, so I can loop through and add event listener to each button!
const mainBtns = [washBtn, mowBtn, pullBtn]
const invObj = { // key = price, value = what to Do
    10: "Wash Car",
    20: "Mow Lawn",
    30: "Pull Weeds"
}

let removeBtns = document.querySelectorAll(".remove")
let tasksArr = []
let tasksPrices = []
let totalPrice = 0
let x = 0

mainBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        x++
        // I've already added an attribute called value for each button, so I can get the price
        // check if value > 0 (so it's a number, and it's already bigger than 0) to stop any bugs
        if(btn.value > 0){
            // invObj[btn.value]
            // id = invoice-tasks, id = invoice-prices
            tasksArr.push(invObj[btn.value])
            tasksPrices.push(btn.value)

            // Update total Price
            totalPrice += btn.value
            totalPriceEl.textContent = `$${totalPrice}` // update Total Price

            // Update the UI
            invoiceTasks.innerHTML += `<li id="task-${x}">${invObj[btn.value]} <span id="${x}" price="${btn.value}" class="remove">Remove</span></li>`
            invoicePrices.innerHTML += `<li id="price-${x}"><span class="dollar">$</span><span class="price">${btn.value}</span></li>`

            // 
            removeBtns = document.querySelectorAll(".remove")
            updateRemove(removeBtns)
        }
    })
})

const updateRemove = (rmBtns) => {
    rmBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let deletedId = btn.attributes.id.value
            let deletedPrice = btn.attributes.price.value

            // DOM things!
            document.getElementById(`task-${deletedId}`).remove()
            document.getElementById(`price-${deletedId}`).remove()

            // Price!
            totalPrice -= deletedPrice
            totalPriceEl.textContent = `$${totalPrice}`
        })
    })
}


//document.getElementById("task-1").remove()
//document.getElementById("price-1").remove()