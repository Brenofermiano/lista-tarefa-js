// Inicializa a lista de tarefas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Atualiza a interface com as tarefas
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpa a lista

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove';
        removeButton.onclick = () => removeTask(index);

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Adiciona uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (newTask) {
        tasks.push(newTask);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

// Remove uma tarefa
function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Salva as tarefas no localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Adiciona o evento de clique ao botão
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Renderiza as tarefas ao carregar a página
renderTasks();
