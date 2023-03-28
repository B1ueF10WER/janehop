const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");

openModalButton.addEventListener("click", function() {
  modal.classList.add("active");
});

closeButton.addEventListener("click", function() {
  modal.classList.remove("active");
});


let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}
// add hovered class in selected list item
let list = document.querySelectorAll('.navigation li');
function activeLink(){
  list.forEach((item) =>
      item.classList.remove('hovered'));
      this.classList.add('hovered');
}
list.forEach((item) => 
  item.addEventListener('mouseover',activeLink));

// -- Assign using the pending button

var button = document.getElementById("pending-button");
var assignList = document.getElementById("myList");
var options = assignList.getElementsByTagName("li");

button.onclick = function() {
  if (assignList.style.display === "none") {
    assignList.style.display = "block";
  } else {
    assignList.style.display = "none";
  }
}
  
for (var i = 0; i < options.length; i++) {
  options[i].onclick = function() {
    button.innerHTML = this.innerHTML;
    assignList.style.display = "none";
  }
}

// Enter new patient info


const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const appointment = document.querySelector('#Appointment').value;
    const assigned = document.querySelector('#myList li.selected').textContent;
    const type = document.querySelector('#type').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${email}</td>
        <td>${appointment}</td>
        <td>${assigned}</td>
        <td>${type}</td>
    `;
    tbody.appendChild(newRow);
    //form.reset();
});

// Add event listener to list items in the modal
const listItems = document.querySelectorAll('#myList li');
listItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Remove the "selected" class from all items
        listItems.forEach((li) => {
            li.classList.remove('selected');
        });
        // Add the "selected" class to the clicked item
        item.classList.add('selected');
    });
});

