const blogcards = document.querySelector('.blogcards');

function createBlogCards() {
  let postedStories = JSON.parse(localStorage.getItem("postedStories"));

  for(let i = 0; i < postedStories.length; i++) {
    const card = document.createElement('div');
    card.classList.add("storycards")

    let html = `
    <h3>${postedStories[i].title}</h3>
    <p>${postedStories[i].name}</p>
    <p>${postedStories[i].story}</p>
    `

    card.innerHTML = html
    blogcards.appendChild(card)
  }
}

createBlogCards();

