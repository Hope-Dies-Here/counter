const submitBtn = document.getElementById("submit")
const showBtn = document.getElementById("show")
const input = document.getElementById("link")
const ul = document.getElementById("display")

const links = []

submitBtn.addEventListener("click", function() {
  links.push(input.value)
  alert("link submited")
  input.value = ""
})

showBtn.addEventListener("click", function() {
  ul.innerHTML = ''
  links.forEach(function(link, index) {
    const li = document.createElement("li")
     li.innerText = link
    ul.appendChild(li)
  })
})