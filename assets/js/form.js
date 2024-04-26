const formSel = document.querySelector('#demo-form')

const alias = document.querySelector('#alias');
const title = document.querySelector('#title');
const story = document.querySelector('#story');

let postedStories = JSON.parse(localStorage.getItem("postedStories")) || [] 


//Saving to Local Storage
function formSubmit() {
  const storyContent = {
    name: alias.value,
    title: title.value, 
    story: story.value,
  }

  postedStories.push(storyContent)
  localStorage.setItem("postedStories", JSON.stringify(postedStories))

  document.location.href="./blog.html";
}


//Prevent blank fields from being submitted
function stopBlanks(event) {
  event.preventDefault() 
  if (alias.value == "" || title.value == "" || story.value == "") {
    alert("To message the gods you must complete the form in full")
  } else {
    formSubmit();
  }
}


formSel.addEventListener('submit', stopBlanks);
