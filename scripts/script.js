let paperMsg = [
    "You are incredible.",
    "Today, try to take care of yourself, so you'll be able to take care of the others.",
    "Have a nice day!",
    "Keep calm.",
    "Tomorrow is another day.",
    "Better late than never.",
    "Love is on the way.",
    "Love is the answer.",
    "You are beautiful."
]
let tempMsg = ''
let list = document.querySelector('.list')

function crack() {
    let length = paperMsg.length
    let result = Math.floor(Math.random() * length)
    tempMsg = paperMsg[result]
    const newPaper = `<div class="list-item">${tempMsg}</div>`
    list.insertAdjacentHTML('afterend', newPaper)
    tempMsg = ''
}