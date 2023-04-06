let taskManager = (function() {
  let tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function displayTasks() {
    console.log("Your Tasks:");
    for(let i = 0; i < tasks.length; i++){
      console.log(tasks[i]);
    }
  }

  return {
    addTask: addTask,
    displayTasks: displayTasks
  };
})();

taskManager.addTask("Scream cathartically into the void");
taskManager.addTask("Sweep the panic chamber");
taskManager.addTask("Wipe doorknobs");

taskManager.displayTasks();