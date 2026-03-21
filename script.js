let buttons = document.querySelectorAll(".mango")
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Added to order")
     });
});
document.querySelector(`.apple`).addEventListener(`click`, function(){
    alert(`Looking for a calm and peaceful place to spend your leisure time? You're in the right place.`);
     });
     document.querySelector(`.pine`).addEventListener(`click`, function(){
    if (document.querySelector(`.pine`).textContent === `OUR MENU`) {
        document.querySelector(`.pine`).textContent = `Your choice`;
    } else {
        document.querySelector(`.pine`).textContent = `OUR MENU`;
    }
})
     document.querySelector(`#pumpkin`).addEventListener(`click`, function(){
    if (document.querySelector(`#pumpkin`).textContent === `THE QUIET CUP`) {
        document.querySelector(`#pumpkin`).textContent = `Introverts' best pick`;
    } else {
        document.querySelector(`#pumpkin`).textContent = `THE QUIET CUP`;
    }
})

