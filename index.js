console.log("Hello World!");

const message = document.querySelector('#message');

function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector("input");
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click',crossOffMovie);
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
}

document.querySelector('form').addEventListener('submit',addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove();
    const text = event.target.parentNode.textContent
    message.textContent = `You have deleted: "${text.slice(0,text.length-1)}"`
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    const text = event.target.parentNode.textContent
    if (!event.target.classList.contains('checked')) {
        message.textContent = `You have not watched "${text.slice(0,text.length-1)}"`
    } else {
        message.textContent = `You have watched "${text.slice(0,text.length-1)}"`
    }
}

