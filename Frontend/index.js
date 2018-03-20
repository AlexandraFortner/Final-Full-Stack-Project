var PAGE_DATA = {};

API_URL = 'http://localhost:8080/';

function storyHtml(story) {
    return ('<li>' + escape(story.body) + '</li>'); // DON'T ACTUALLY ALLOW SPAMMY TABLES; ESCAPE post.body
}
function storiesHtml(posts) {
    return stories.map(storyHtml).join('');
}
function initializeExistingStoriesView(stories) {
    let storiesDiv = document.getElementById('existing-stories')
    storiesDiv.innerHTML = storiesHtml(stories);
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
    .then(initializeExistingPostsView);