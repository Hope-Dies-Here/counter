const refresh = document.getElementById("btn")
const displayQuote = document.getElementById("theBS")
const displayAuthor = document.getElementById("smartAss")

const quotes = [
    {
     quote: "But when all hope seemed lost, I had an epiphany!",
     author: "Donald Trump"
    },
    {
     quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
     author: "Marcus Rashford"
    },
    {
     quote: "*slowly pushes a cannon into a 17th century bank* Okay everyone, be cool. This is a robbery.",
     author: "Random Pirate"
    },
    {
     quote: "The best person I know is myself.",
     author: "Adolf Hitler"
    },
    {
     quote: "Drink your school, stay in drugs, and get 8 hours of drugs.",
     author: "Wiz Khalifa"
    },
    {
     quote: "Like, no offense to myself and all, but what the fuck am I actually doing?",
     author: "Nuclear Scientist"
    },
    {
     quote: "Well well well if it isnt the consequences of my actions.",
     author: "Me"
    }
    
  ]
  
refresh.addEventListener("click", () => {
  let n = Math.floor(Math.random() * quotes.length)
  displayQuote.innerText = quotes[n].quote
  displayAuthor.innerText = quotes[n].author
})
// ------- Main code ends here ---------




//junk 
const mode = document.getElementById("mode")
const html = document.getElementById("html")
let theMode = "light"

mode.addEventListener("click", () => {
  if(theMode == "light"){
    html.style = "color-scheme: dark;"
    theMode = "dark"
    mode.innerText = "Light Mode"
  }
  else {
    html.style = "color-scheme: light;"
    theMode = "light"
    mode.innerText = "Dark Mode"
  }
    
})

// Phone Book
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const saveBtn = document.querySelector("#save");
const display = document.querySelector("#ul");

let contacts = [];
/* contacts = localStorage.getItem("contacts")
 */
saveBtn.addEventListener("click", () => {
  if (name.value.trim() != "" && phone.value.trim() != "") {
    contacts.push({
      name: name.value,
      phone: phone.value,
    });
    alert("contact saved");
    contacts.forEach((contact) => {
      name.value = "";
      phone.value = "";
      let data = `${contact.name} <br> <sub> ${contact.phone}`;
      let li = document.createElement("li");
      li.innerHTML = data;
      display.append(li);
    });
  } else {
    alert("save what...??");
  }
});
