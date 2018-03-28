var PAGE_DATA = {};

API_URL = 'http://localhost:8080/';

var validations = {
    ItemName: false,
    Seller: false,
    Price: false,
    PictureUrl: false,
    HowMany: false
};

// SHOWING EXISTING STORY BODYS
function getAuthor(story) {
    return (_.escape(story.author_id));
}
function getGenre(story) {
    return (_.escape(story.genre));
}
function getTitle(story) {
    return (_.escape(story.title) + '<hr>');
}
function getStory(story) {
    return (_.escape(story.body)); // DON'T ACTUALLY ALLOW SPAMMY TABLES; ESCAPE post.body
}

// DISPLAYS INFORMATION IN HTML
function authorsHtml(stories) {
    return stories.map(getAuthor).join('');
}
function genresHtml(stories) {
    return stories.map(getGenre).join('');
}
function titlesHtml(stories) {
    return stories.map(getTitle).join('');
}
function storiesHtml(stories) {
    return stories.map(getStory).join('');
}

// JQUERY STARTS

$("#navCreate").click(function (event) {
    event.preventDefault();
    alertify.log('You\'ve clicked Create!')
});

$("#navStories").click(function (event) {
    event.preventDefault();
    alertify.log('You\'re looking at Stories!')
});

$("#navAbout").click(function (event) {
    event.preventDefault();
    alertify.log('You\'re looking at About!')
});

function initializeExistingStoriesView(stories) {
    let storiesDiv = document.getElementById('existing-stories')
    let titlesDiv = document.getElementById('existing-titles')
    let authorsDiv = document.getElementById('existing-authors')
    let genresDiv = document.getElementById('existing-genres')
    storiesDiv.innerHTML = storiesHtml(stories);
    titlesDiv.innerHTML = titlesHtml(stories);
    authorsDiv.innerHTML = authorsHtml(stories);
    genresDiv.innerHTML = genresHtml(stories);
}

function moveNewStoryToExistingStories() {
    let form = document.getElementById('new-story-form')
    let author = form.author.value;
    let title = form.title.value;
    let story = form.story.value;
    let genre = form.genre.value;
    let storySummary = form.storySummary.value;
    let existingStoriesDiv = document.getElementById('existing-stories');
    let newLi = document.createElement('li');
    newLi.innerText = story;
    existingStoriesDiv.appendChild(newLi);
    form.author.value = '';
    form.title.value = '';
    form.story.value = '';
    form.storySummary.value = '';
    form.genre.value = '';
}

function postToNewStoryRoute(author, title, story, storySummary, genre) {
    fetch('http://localhost:8080/stories/new/', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            author: author,
            title: title,
            story: story,
            storySummary: storySummary,
            genre: genre
        })
    }).then(moveNewPostToExistingStories)
}

document.getElementById('new-story-form').onsubmit = event => {
    let form = event.target;
    let author = form.author.value;
    let story = form.story.value;
    let title = form.title.value;
    let genre = form.genre.value;
    let storySummary = form.storySummary.value;
    // CHECK FOR VALID DATA
    postToNewStoryRoute(author, title, story, genre, storySummary);
    return false;
}

window.onload = () => fetch('http://localhost:8080/stories/')
    .then(response => response.json())
    .then(initializeExistingStoriesView);