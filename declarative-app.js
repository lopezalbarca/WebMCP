const addForm = document.querySelector("#add-form");
const listForm = document.querySelector("#list-form");
const completeForm = document.querySelector("#complete-form");
const resultEl = document.querySelector("#tool-result");

let nextId = 1;
const tasks = [];

function printResult(tool, payload) {
  if (!resultEl) {
    return;
  }
  resultEl.textContent = JSON.stringify({ tool, payload }, null, 2);
}

function addTask(title) {
  const value = String(title || "").trim();
  if (!value) {
    throw new Error("title es obligatorio");
  }
  const created = { id: nextId++, title: value, done: false };
  tasks.push(created);
  return created;
}

function listTasks() {
  return tasks.map((t) => ({ ...t }));
}

function completeTask(id) {
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) {
    throw new Error(`No existe la tarea ${id}`);
  }
  task.done = true;
  return task;
}

if (addForm && listForm && completeForm && resultEl) {
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const title = new FormData(addForm).get("title");
      const created = addTask(title);
      printResult("add_task", created);
      addForm.reset();
    } catch (error) {
      printResult("add_task", { error: error.message });
    }
  });

  listForm.addEventListener("submit", (event) => {
    event.preventDefault();
    printResult("list_tasks", listTasks());
  });

  completeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const id = new FormData(completeForm).get("id");
      const done = completeTask(id);
      printResult("complete_task", done);
      completeForm.reset();
    } catch (error) {
      printResult("complete_task", { error: error.message });
    }
  });

  printResult("init", { message: "Demo declarativa lista para usar en GitHub Pages." });
}
