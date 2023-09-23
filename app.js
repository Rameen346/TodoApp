function addtodo() {
  var input = document.getElementById("todo-input");

  var list = document.getElementById("listItem");

  var listElement = document.createElement("li");

  var listText = document.createTextNode(input.value);

  listElement.appendChild(listText);

  ///////////////////////edit button//////////////////////

  var editbtn = document.createElement("button");

  var editbtnText = document.createTextNode("Edit");

  editbtn.appendChild(editbtnText);

  listElement.appendChild(editbtn);

  list.appendChild(listElement);

  editbtn.setAttribute("onclick", "edittodo(this)");

  console.log(listElement);

  input.value = "";

  //////////////////////delete button//////////////////////

  var delbtn = document.createElement("button");

  var delbtnText = document.createTextNode("Delete");

  delbtn.appendChild(delbtnText);

  listElement.appendChild(delbtn);

  delbtn.setAttribute("onclick", "deletetodo(this)");

  list.appendChild(listElement);

  console.log(listElement);

  input.value = "";
}

function deletetodo() {
  var list = document.getElementById("listItem");

  // list.innerHTML = "";

  list.remove();
}

function deletetodo(e) {
  console.log(e.parentNode.remove());
}

function edittodo(e) {
  var currentli = e.parentNode.firstChild.nodeValue;

  var inputField = prompt("Enter updated value", currentli);

  e.parentNode.firstChild.nodeValue = inputField;
}
