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
let newMsg = ''
let list = document.querySelector('.list')

function crack() {
    document.querySelector('.cookie').innerHTML = '<img src="./images/crack-open.gif" class="crack-cookie">'
    let length = paperMsg.length
    let result = Math.floor(Math.random() * length)
    newMsg = paperMsg[result]
    const newPaper = `<div class="list-item bounce">${newMsg}</div>`
    list.insertAdjacentHTML('afterend', newPaper)

    const myTimeout = setTimeout(reset, 2000)

    function reset() {
    newMsg = ''
    document.querySelector('.cookie').innerHTML = '<img src="./images/cookie.gif" class="appear" onclick="crack()" alt="Cookie illsutration">'
    }
}