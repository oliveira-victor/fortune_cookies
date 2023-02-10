let paperMsg = [
    "If you're waiting for a sign, this is it.",
    "It's a good day to make that decision.",
    "You shall receive back all the love you give away.",
    "You will reach your goals with a little more patience.",
    "You carry a unique beauty not ever seen in the universe.",
    "Do you compliment yourself as much as you criticize?",
    "The answer is love.",
    "Don't ever regret the love you gave to someone who didn't know what to do with it.",
    "You will meet great people as long as you have your eyes and heart open.",
    "Life will change for better if you remember to smile every day.",
    "It's time to take the first step for that big goal you have.",
    "Courage isn't the absence of fear, but the capacity to keep going despite of it.",
    "Don't do to the others what you wouldn't like that people did to you.",
    "Stop complaining often and your life shall change for better.",
    "It's a good time to send a nice message to that special person.",
    "Have you said 'I love you' to someone recently?",
    "Try to find the bright side of the things that happen to you.",
    "Care for your peace of mind, it's the basis for a good life.",
    "Life is for those who can adapt better. Improve that in yourself.",
    "Be aware of the present moment you're in."
]
let newMsg = ''
let list = document.querySelector('.list')
let cookie = document.querySelector('.cookie')

function crack() {
    document.querySelector('.cookie').innerHTML = '<img src="./images/crack-open.gif" class="crack-cookie">'
    let length = paperMsg.length
    let result = Math.floor(Math.random() * length)
    newMsg = paperMsg[result]
    const newPaper = `<div class="list-item bounce">${newMsg}</div>`
    list.insertAdjacentHTML('afterend', newPaper)
    cookie.scrollIntoView()

    const myTimeout = setTimeout(reset, 2000)

    function reset() {
    newMsg = ''
    document.querySelector('.cookie').innerHTML = '<img src="./images/cookie.gif" class="appear" onclick="crack()" alt="Cookie illsutration">'
    }
}