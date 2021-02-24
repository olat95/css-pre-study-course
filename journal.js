// let demo = []
// function myFunction(){
//     var txt;
//     var message = prompt("Write your note", "Enter here");
//     if (message == null || message == "") {
//       txt = "User cancelled the prompt.";
//     } else {
//       txt =  message;
//     }
//     demo.push(message);
//     document.getElementById("notes").innerHTML = txt;
//     document.getElementById("demo").innerHTML = " have " + demo.length + " notes.";


const addButton = document.getElementById("addnote");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modalForm = document.querySelector("#modal-form");
const modalTitle = document.getElementById("modaltitle");
const modalBody = document.getElementById("modalbody");



const note = [];

function noteCount(){
  const counter = document.querySelector(".note-count");
  counter.innerHTML = "";
  const noteHeader = document.createElement("h3");  
  noteHeader.textContent = `You have ${note.length + 2} notes.`;
  counter.appendChild(noteHeader);
}
noteCount();


modalForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  note.push({
    title: modalTitle.value,
    body: modalBody.value
  });
  const modalMain = document.getElementById("modalmain");
  const modalarticle = document.createElement("article");
  noteCount();
})


addButton.addEventListener("click", () => {
  modal.style.display = "block";
})

close.addEventListener("click", () =>{
  modal.style.display = "none";
})
