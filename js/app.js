//                                      COUNT
const numCount = document.querySelector('#numcount')
const countTangNum = document.querySelector('#countTangNum')
const countGiamNum = document.querySelector('#countGiamNum')
const resetNumber = document.querySelector('#countResetNum')
let number = 0


countTangNum.onclick = function () {
    number++
    numCount.textContent = number
}
countGiamNum.onclick = function () {
    number--
    numCount.textContent = number
}
resetNumber.onclick = function () {
    number = 0
    numCount.textContent = number
}


//                                      ĐÁNH ĐỀ


const soDe = document.querySelector('#soDe')
const btnDanhDe = document.querySelector('#btnDanhDe')
const btnResetDanhDe = document.querySelector('#btnResetDanhDe')


btnDanhDe.onclick = function () {
    let randomNum = Math.floor(Math.random() * 100) + 1
    soDe.innerHTML = `Đánh con: ${randomNum} `
}
btnResetDanhDe.onclick = function () {
    soDe.innerHTML = 'Đánh Đề Con Gì Đây'
}

//                                     NAVBAR
let daddy = document.querySelectorAll('.daddy')
daddy.forEach(e => {
    e.addEventListener('click', () => {
        let child = e.querySelector('.child')
        child.classList.toggle('active')
    })
})