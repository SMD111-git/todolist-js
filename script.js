function addTask() {
      const taskInput = document.getElementById('task-input');
      const taskText = taskInput.value.trim();
      
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
      
      const taskList = document.getElementById('task-list');
      const taskItem = document.createElement('li');
      
      // Create task text
      const taskTextNode = document.createTextNode(taskText);
      taskItem.appendChild(taskTextNode);
      
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
      };
      
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      
      // Clear input field
      taskInput.value = "";
    }

    // Optional: Allow pressing Enter to add a task
    document.getElementById('task-input').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  </script>
