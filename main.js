console.log("funciona JS");

// FUNCION PARA AGREGAR TAREAS.
const button = document.getElementById("button-addon2");
console.log(button);

const ulS = document.getElementById("listItems");
console.log(ulS.value)

button.addEventListener("click", function () {
  console.log("click en el boton");
  const input = document.getElementById("form");
  const task = input.value;

  if (task === "") {
    alert("Agregar una tarea");
  } else {
    const listaDeItems = document.getElementById("listItems");

    const tarea = document.createElement("li");
    tarea.className = "list-group-item";

    tarea.innerHTML = `
        <div>
          <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
          <label class="form-check-label" for="secondCheckbox">${task}</label>
        </div>
          <button class="btn btn-outline" type="button" id="button-addon2-remove">
            <img src="img/trash.png" width="15px" alt="">
             Remove
            </button>
        `;

    console.log(task);

    listaDeItems.appendChild(tarea);
    input.value = '';
    updateTaskCount()

    

  }
});

// FUNCION PARA REMOVER TAREAS

const listaDeItems = document.getElementById("listItems");

listaDeItems.addEventListener("click", function (event) {
  const boton = event.target.closest("button");
  if (!boton) return;

  if (boton.id === "button-addon2-remove") {
    // 4. Buscar el <li> al que pertenece
    const li = boton.closest("li");

    // 5. Eliminar o esconder ese li
    // li.classList.add("hidden")
    // O directamente:
    li.remove();
    updateTaskCount()
  }
});




// FUNCION PARA FILTRAR TAREAS
const filters = document.getElementById("filters");

filters.addEventListener("click", function(event) {
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
});



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
darkModeButton.addEventListener("click", function() {
  let element = document.body;
  element.classList.toggle("darkMode");
})