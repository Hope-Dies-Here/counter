const $ = (id) => document.querySelector(id)
let number = 0
$(".number").innerText = number
let payment = 0
/*
$("#dec").addEventListener("click", () => {
  if(number > -5) number--
  else alert("buy pro for more clicks") 
  $(".number").innerText = number
})
*/

$("#inc").addEventListener("click", () => {
  if(number == 5) {
    payment = payment + 10
    number = 0
    alert("rip that wallet man -$10 ")
    $("#pay").innerText = `your bill is $${payment}`
  }  
  else number++
  $(".number").innerText = number
})

$("#reset").addEventListener("click", () => {
  number = 0
  $(".number").innerText = number
})

console.log('counter will return!')
