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