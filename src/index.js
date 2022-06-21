document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form") 
    
  form.addEventListener('submit', makeTask) 
    
    function makeTask(e) {
      e.preventDefault()
      
      let newtaskDescriptioin = document.querySelector("#new-task-description")
      
      let newTask = document.createElement('li')
      
      newTask.innerText = newtaskDescriptioin.value
      appendTask(newTask)
    }
      function appendTask(task) {
        document.querySelector('#tasks').appendChild(task)
      }
});
