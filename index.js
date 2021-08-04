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
    message.textContent = `You have deleted: "${event.target.parentNode.querySelector('span').textContent}"`;
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if (!event.target.classList.contains('checked')) {
        message.textContent = `You have not watched "${event.target.textContent}"`;
    } else {
        message.textContent = `You have watched "${event.target.textContent}"`;
    }
    revealMessage();
}

function revealMessage() {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add("hide")
    }, 1000);
}