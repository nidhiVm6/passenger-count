
let countEl = document.getElementById("count-el")
let count = 0
let temp = 0

let prevEnt = document.getElementById("prev-ent")
prevEnt.textContent = "Previous Entries: "
let curr = ""

function increment() {
    count += 1
    temp += 1
    countEl.textContent = count
}

function save() {
    curr = " " + temp + " -"
    temp = 0
    prevEnt.textContent += curr
}

save()