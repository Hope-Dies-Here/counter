const submitBtn = document.getElementById("submit")
const showBtn = document.getElementById("show")
const input = document.getElementById("link")
const ul = document.getElementById("display")

const links = []
const obj = [{
  "name": "hoho",
  "link": "hoho.com"
},
{
  "name": "opeo",
  "link": "opeo.com"
}
]

submitBtn.addEventListener("click", function() {
  links.push(input.value)
  alert("link submited")
  input.value = ""
  obj.forEach((o) => {
    console.log(o.name)
    
  })
})

showBtn.addEventListener("click", function() {
  ul.innerHTML = ''
  links.forEach(function(link, index) {
    const li = document.createElement("li")
     li.innerText = link
    // li.innerText = `${link} is in line ${index + 1}`
    //li.innerHTML = `<a href =${link}> ${link}</a>`
    ul.appendChild(li)
  })
})