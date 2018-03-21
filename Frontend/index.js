var PAGE_DATA = {};

API_URL = 'http://localhost:8080/';

// SHOWING EXISTING STORY BODYS
function getAuthor(story) {
    return (_.escape(story.author));
}
function getTitle(story) {
    return (_.escape(story.title) + '<hr>');
}
function getStory(story) {
    return (_.escape(story.body)); // DON'T ACTUALLY ALLOW SPAMMY TABLES; ESCAPE post.body
}

function authorsHtml(stories) {
    return stories.map(getAuthor).join('');
}
function titlesHtml(stories) {
    return stories.map(getTitle).join('');
}
function storiesHtml(stories) {
    return stories.map(getStory).join('');
}
function initializeExistingStoriesView(stories) {
    let storiesDiv = document.getElementById('existing-stories')
    let titlesDiv = document.getElementById('existing-titles')
    let authorsDiv = document.getElementById('existing-authors')
    storiesDiv.innerHTML = storiesHtml(stories);
    titlesDiv.innerHTML = titlesHtml(stories);
    authorsDiv.innerHTML = authorsHtml(stories);
}
function moveNewStoryToExistingStories() {
    let form = document.getElementById('new-story-form')
    let author = form.author.value;
    let title = form.title.value;
    let body = form.body.value;
    let existingStoriesDiv = document.getElementById('existing-stories');
    let newLi = document.createElement('li');
    newLi.innerText = body;
    existingStoriesDiv.appendChild(newLi);
    form.author.value = '';
    form.title.value = '';
    form.body.value = '';
}
function postToNewStoryRoute(author, title, body) {
    fetch('http://localhost:8080/stories/new/', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            author: author,
            title: title,
            body: body
        })
    }).then(moveNewPostToExistingStories)
}
document.getElementById('new-story-form').onsubmit = event => {
    let form = event.target;
    let author = form.author.value;
    let body = form.body.value;
    let title = form.title.value;
    // CHECK FOR VALID DATA
    postToNewStoryRoute(author, title, body);
    return false;
}
window.onload = () => fetch('http://localhost:8080/stories/')
    .then(response => response.json())
    .then(initializeExistingStoriesView);