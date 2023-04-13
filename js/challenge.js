let counter = 0
const button1 = document.getElementById('minus')
const button2 = document.getElementById('plus')
const textHolder = document.getElementById('counter')
textHolder.innerHTML = counter

button1.addEventListener("click", function(){
    textHolder.innerHTML = --counter
})

button2.addEventListener("click", function(){
    textHolder.innerHTML = ++counter
})

document.getElementById("heart").addEventListener('click', function() {
    alert(`"You've liked the number ${counter}"`)
})

document.getElementById("pause").addEventListener('click', function() {
    alert("You've paused!")
})

document.getElementById("submit").addEventListener("click", function(){
    alert("thanks for the comment!")
})