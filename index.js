const input = document.getElementById("input");

const span = document.getElementById("btn");
const uel = document.getElementById("uel");
 

span.onclick = function () {
  if (input.value === "") {
    alert("EMPTY INPUT⛔⛔");
    uel.removeChild(add);
  }

  const add = document.createElement("tr");

  const li = document.createElement("th");
  li.innerHTML = input.value;
  add.appendChild(li);

  const xxx = document.createElement("span");
  xxx.innerHTML = "X";
  add.appendChild(xxx);

  uel.appendChild(add);

  const line = document.getElementsByTagName("th");
  for (i = 0; i < line.length; i++) {
    line[i].addEventListener("click", function () {
      li.style.textDecoration = "line-through";
    });
  }

  const remove = document.getElementsByTagName("span");
  for (a = 0; a < remove.length; a++) {
    remove[a].addEventListener("click", function () {
      uel.removeChild(add);
    });
  }

  input.value = "";
};
