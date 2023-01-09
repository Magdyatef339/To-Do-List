
// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function () {
  theInput.focus();
};

theAddButton.onclick = function () {

  if (theInput.value === '') {

    console.log("No Value");

  } else {

    let noTasksMsg = document.querySelector(".no-tasks-message");

    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {

      noTasksMsg.remove();

    }

    let mainSpan = document.createElement("span");

    let deleteElement = document.createElement("span");

    let text = document.createTextNode(theInput.value);

    let deleteText = document.createTextNode("Delete");

    mainSpan.appendChild(text);

    mainSpan.className = 'task-box';

    deleteElement.appendChild(deleteText);

    deleteElement.className = 'delete';

  
    mainSpan.appendChild(deleteElement);


    tasksContainer.appendChild(mainSpan);


    theInput.value = '';


    theInput.focus();


  }
};
document.addEventListener('click', function (e) {


    if (e.target.className == 'delete') {
  

      e.target.parentNode.remove();
  
      // Check Number Of Tasks Inside The Container
      if (tasksContainer.childElementCount == 0) {
  
        createNoTasks();
  
      }
  
    }
  
    // Finish Task
    if (e.target.classList.contains('task-box')) {
  
      // Toggle Class 'finished'
      e.target.classList.toggle("finished");
  
    }
  
    // Calculate Tasks
    calculateTasks();
  
  });

  

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");
  
    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");
  
    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);
  
    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';
  
    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
  
  }
  
  // Function To Calculate Tasks
  function calculateTasks() {
  
    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  
    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
  }










