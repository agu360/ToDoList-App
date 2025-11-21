
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(t => renderTask(t.text, t.completed));
updateTaskCount();


// FUNCION PARA AGREGAR TAREAS.
const button = document.getElementById("button-addon2");

const ulS = document.getElementById("listItems");

button.addEventListener("click", function () {
  console.log("click en el boton");
  const input = document.getElementById("form");
  const task = input.value;

  if (task === "") {
    alert("Agregar una tarea");
    return
  } 
     // 1. Agregar al array
  tasks.push({ text: task, completed: false });

  // 2. Guardar en localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // 3. Mostrar en pantalla
  renderTask(task, false);
    input.value = '';
    updateTaskCount()

});

// RENDERIZADO DE TAREAS 

function renderTask(text, completed) {
  const listaDeItems = document.getElementById("listItems");

  const li = document.createElement("li");
  li.className = "list-group-item";
  
  if (completed) li.classList.add("completed");

  li.innerHTML = `
    <div>
      <input class="form-check-input me-1" type="checkbox" ${completed ? "checked" : ""}>
      <label>${text}</label>
    </div>
    <button class="btn btn-outline remove">
      <img src="img/trash.png" width="15px" alt="">
      Remove
    </button>
  `;

  listaDeItems.appendChild(li);
}

// FUNCION PARA REMOVER TAREAS

const listaDeItems = document.getElementById("listItems");

listaDeItems.addEventListener("click", function (event) {
 if (event.target.closest("button")) {
    const li = event.target.closest("li");
    const text = li.querySelector("label").textContent;

    // eliminar del array
    tasks = tasks.filter(t => t.text !== text);

    // guardar
    localStorage.setItem("tasks", JSON.stringify(tasks))

    li.remove();
    updateTaskCount()
  }
});



// Cuando cambiás un checkbox


listaDeItems.addEventListener("change", function(event) {
  if (event.target.type === "checkbox") {
    const li = event.target.closest("li");
    const text = li.querySelector("label").textContent;

    // buscar en array y actualizar
    tasks = tasks.map(t =>
      t.text === text ? { ...t, completed: event.target.checked } : t
    );

    localStorage.setItem("tasks", JSON.stringify(tasks));

    updateTaskCount();
  }
});




// FUNCION PARA FILTRAR TAREAS
const filters = document.getElementById("filters");

function filtered (){
  if (!event.target.matches("button")) return; // Ignora clicks fuera de botones

  const filtro = event.target.dataset.filter;
  const items = document.querySelectorAll(".list-group-item");

 
  // ---- MANEJO DE BOTONES ACTIVOS ----
  document.querySelectorAll("#filters button").forEach(btn => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");


  items.forEach(li => {
    const checkbox = li.querySelector("input[type='checkbox']");
    const checked = checkbox.checked;

    // Lógica de filtrado
    if (filtro === "all") {
      li.classList.remove("hidden");
    } else if (filtro === "active") {
      checked ? li.classList.add("hidden")  : li.classList.remove("hidden");
    } else if (filtro === "completed") {
      checked ? li.classList.remove("hidden") : li.classList.add("hidden");
    }
  });
}

filters.addEventListener("click", filtered);



// FUNCIO PARA CONTAR TAREAS RESTANTES
function updateTaskCount() {
  const items = document.querySelectorAll(".list-group-item");
  let pending = 0;

  items.forEach(li => {
    const checkbox = li.querySelector("input[type='checkbox']");
    if (!checkbox.checked) {
      pending++;
    }
  });

  document.getElementById("taskQuantity").textContent = `${pending} Task Left`;
}

listaDeItems.addEventListener("change", function(event) {
  if (event.target.matches("input[type='checkbox']")) {
    updateTaskCount();
  }
});

//DARK MODE FUNCTION

const darkModeButton = document.getElementById("darkMode")
darkModeButton.addEventListener("click", darkMode)

function darkMode () {
    let element = document.body;
  element.classList.toggle("darkMode");
}