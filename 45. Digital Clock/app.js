const clock = document.querySelector(".clock")


clock.addEventListener("load",  tick)

function tick() {
  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()

  const html = `
            <span>${h} :</Span>
            <span>${m} :</Span>
            <span>${s} </Span>
  `

  clock.innerHTML = html
}

setInterval(tick, 1000);