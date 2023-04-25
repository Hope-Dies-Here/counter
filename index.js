const $ = (id) => document.querySelector(id)
let number = 0
$(".number").innerText = number

$("#dec").addEventListener("click", () => {
  number--
  $(".number").innerText = number
})

$("#inc").addEventListener("click", () => {
    number++
  $(".number").innerText = number
})

$("#reset").addEventListener("click", () => {
  number = 0
  $(".number").innerText = number
})

console.log('counter will return!')