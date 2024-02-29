const ratings = document.querySelectorAll(".ratings")
const ratingsContainer = document.querySelector(".ratings-container")
const sendBtn = document.querySelector("#send")
const panel = document.querySelector("#panel")


let selectedRatings = "Satisfied"

ratingsContainer.addEventListener("click", e => {
    if (e.target.parentNode.classList.contains("ratings")) {
        removeActives()
        e.target.parentNode.classList.add("active")
        selectedRatings = e.target.nextElementSibling.innerHTML
    }
})


sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You</strong>
        <br>
        <strong>Feedback: ${selectedRatings} </strong>
    `;
})

function removeActives() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active")
    }
}