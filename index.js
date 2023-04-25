const $ = (id) => document.querySelector(id)
let number = 0
$(".number").innerText = number

$("#dec").addEventListener("click", () => {
  if(number > -5) number--
  else alert("but pro for more clicks") 
  $(".number").innerText = number
})

$("#inc").addEventListener("click", () => {
  if(number < 5) number++
  else alert("but pro for more clicks") 
  $(".number").innerText = number
})

$("#reset").addEventListener("click", () => {
  number = 0
  $(".number").innerText = number
})

console.log('counter will return!')
