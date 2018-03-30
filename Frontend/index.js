var PAGE_DATA = {};


API_URL = 'http://localhost:8080/';

// VALIDATIONS BEGIN

var validations = {
    IsLoggedIn: true,
    AuthorName: false,
    Title: false,
    StorySummary: false,
    Story: false
};

// function maybeEnableButton() {
//     if (
//         validations.AuthorName === true &&
//         validations. === true &&
//         validations.repeatPass === true
//     ) {
//         $('.btn').attr('disabled', false);
//     } else {
//         $('.btn').attr('disabled', true);
//     }
// }

// function checkIfLoggedIn() {
//     if (validations.IsLoggedIn == false) {
//         $('#sign-up').removeAttr('hidden');
//         $('#new-story-form').attr('hidden', 'hidden');
//         $('#stories').attr('hidden', 'hidden');
//         $('#about').attr('hidden', 'hidden');
//     } else {
//         $('#sign-up').attr('hidden', 'hidden');
//     }
// }

function AuthorNameValidations() {
    if (validations.AuthorName == false) {
        console.log('The user is not logged in.');
    } else if (validations.AuthorName == true) {
        console.log('The user is logged in.');
        $('#sign-up').removeAttr('hidden');
    } else {
        console.log('ERROR.')
    }
}

function isLoggedIn() {
    if (validations.IsLoggedIn == false) {
        console.log('The author name is false.');
        $('#new-story-form').attr('hidden', 'hidden');
        $('#stories').attr('hidden', 'hidden');
        $('#about').attr('hidden', 'hidden');
        $('#navbar').attr('hidden', 'hidden');
        $('#sign-up').removeAttr('hidden');
    } else if (validations.IsLoggedIn == true) {
        console.log('The author name is true.');
        $('#new-story-form').removeAttr('hidden');
        $('#stories').removeAttr('hidden');
        $('#about').removeAttr('hidden');
        $('#navbar').removeAttr('hidden');
        $('#sign-up').attr('hidden', 'hidden');
    } else {
        console.log('ERROR.')
    }
}
// VALIDATIONS END
// SHOWING EXISTING STORY BODYS
function getAuthor(story) {
    return (_.escape(story.author_name));
}
function getGenre(story) {
    if (story.genre_id == 1) {
        newGenre = 'Horror'
    } else if (story.genre_id == 2) {
        newGenre = 'Action-Adventure'
    } else if (story.genre_id == 3) {
        newGenre = 'Romance'
    } else if (story.genre_id == 4) {
        newGenre = 'Thriller'
    } else if (story.genre_id == 5) {
        newGenre = 'Comedy'
    } else if (story.genre_id == 6) {
        newGenre = 'Historical Fiction'
    } else if (story.genre_id == 7) {
        newGenre = 'Fanfiction'
    } else if (story.genre_id == 8) {
        newGenre = 'Fantasy'
    } else if (story.genre_id == 9) {
        newGenre = 'Non-Fiction'
    } else if (story.genre_id == 10) {
        newGenre = 'Science Fiction'
    } else if (story.genre_id == 11) {
        newGenre = 'Short Story'
    } else if (story.genre_id == 12) {
        newGenre = 'Poetry'
    } else if (story.genre_id == 13) {
        newGenre = 'Spiritual'
    } else if (story.genre_id == 14) {
        newGenre = 'Paranormal'
    } else if (story.genre_id == 15) {
        newGenre = 'Teen Fiction'
    } else if (story.genre_id == 16) {
        newGenre = 'Random'
    } else {
        newGenre = null
    }
    return (_.escape(newGenre)) + '<hr>';
}
function getTitle(story) {
    return (_.escape(story.title) + '<hr>');
}
function getStory(story) {
    return (_.escape(story.story)); // DON'T ACTUALLY ALLOW SPAMMY TABLES; ESCAPE post.body
}
function getStorySummary(story) {
    return (_.escape(story.story_summary) + '<hr>');
    // PARAMETERS ARE READ IN FROM STORY.JAVA 
    // DON'T ACTUALLY ALLOW SPAMMY TABLES; ESCAPE post.body
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
function storySummariesHtml(stories) {
    return stories.map(getStorySummary).join('');
}
// STOPS DISPLAYING INFORMATION IN HTML
// .CLICKS BEGIN ||| THE "DIFFERENT PAGES" BEGIN
$("#navStories").click(function (event) {
    event.preventDefault();
    // alertify.log('You\'re looking at Stories!');
    $('#about').attr('hidden', 'hidden');
    $('#stories').removeAttr('hidden');
    $('#new-story-form').attr('hidden', 'hidden');
    // BELOW WILL MAKE THE ENTIRE ACTIVE NAVLINK GO AWAY
    // $('li.nav-item.active').attr('hidden', 'hidden');
    $('#navStoriesActive').removeAttr('hidden');
    $('#navCreateActive').attr('hidden', 'hidden');
    $('#navAboutActive').attr('hidden', 'hidden');
});

$("#navAbout").click(function (event) {
    event.preventDefault();
    // alertify.log('You\'re looking at About!');
    $('#new-story-form').attr('hidden', 'hidden');
    $('#stories').attr('hidden', 'hidden');
    $('#about').removeAttr('hidden');
    $('#navAboutActive').removeAttr('hidden');
    $('#navCreateActive').attr('hidden', 'hidden');
    $('#navStoriesActive').attr('hidden', 'hidden');
});

$('#navCreate').click(function (event) {
    event.preventDefault();
    // alertify.log('You\'ve clicked Create!');
    $('#about').attr('hidden', 'hidden');
    $('#stories').attr('hidden', 'hidden');
    $('#new-story-form').removeAttr('hidden');
    $('#navCreateActive').removeAttr('hidden');
    $('#navStoriesActive').attr('hidden', 'hidden');
    $('#navAboutActive').attr('hidden', 'hidden');
    // $('#Inventory-List').html('');
    // cart = '';
    // cart =
    //     '<button id="Back-Button-Cart" class="raise" onclick="draw()">Back</button><br><u><h3>Your Cart:</h3></u><br>';
    // for (n = 0; n < CART.length; n++) {
    //     cart += '<b><li>' + CART[n].name;
    // }
    // $('#Cart-List').html(
    //     cart +
    //     '<br><br><button id="checkout-button" class="raise" onclick="CheckOut()">Checkout!</button><br>'
    // );
});


// .CLICKS ENDS ||| THE "DIFFERENT PAGES" BEGIN

function initializeExistingStoriesView(stories) {
    let storiesDiv = document.getElementById('existing-stories');
    let titlesDiv = document.getElementById('existing-titles');
    let authorsDiv = document.getElementById('existing-authors');
    let genresDiv = document.getElementById('existing-genres');
    let storySummaryDiv = document.getElementById('existing-story-summaries');
    storiesDiv.innerHTML = storiesHtml(stories);
    titlesDiv.innerHTML = titlesHtml(stories);
    authorsDiv.innerHTML = authorsHtml(stories);
    genresDiv.innerHTML = genresHtml(stories);
    storySummaryDiv.innerHTML = storySummariesHtml(stories);
}

function moveNewStoryToExistingStories() {
    let author = $('author').val();
    let title = $('title').val();
    let story = $('story').val();
    let genre = $('genre').val();
    let storySummary = $('storySummary').val();
    // let existingStoriesDiv = document.getElementById('existing-stories');
    $("existing-stories").html("<li>" + story + "</li>")
    let newLi = document.createElement('li');
    // newLi.innerText = story;
    // existingStoriesDiv.appendChild(newLi);

    // form.author.value = '';
    // form.title.value = '';
    // form.story.value = '';
    // form.storySummary.value = '';
    // form.genre.value = '';
}

function postToNewStoryRoute(author, title, story, storySummary, genre) {
    fetch('http://localhost:8080/stories', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            author: author,
            title: title,
            story: story,
            storySummary: storySummary,
            genre: genre
        })
    }).then(moveNewStoryToExistingStories)
}
// $("new-story-form").onsubmit(function (event) {
//     event.preventDefault();

// })
document.getElementById('new-story-form').onsubmit = event => {
    event.preventDefault();
    alertify.log('Submitted');
    let form = event.target;
    let author = form.author.value;
    let title = form.title.value;
    let story = form.story.value;
    let storySummary = form.storySummary.value;
    let genre = form.genre.value;

    // CHECK FOR VALID DATA
    moveNewStoryToExistingStories();
    // postToNewStoryRoute(author, title, story, genre, storySummary);
}

// SHOWSTORIES FUNCTION SHOWS ALL STORY DATA AS JSON AND DISPLAYS THEM VIA SPRING BACKEND: http://localhost:8080/stories
function showStories() {
    window.onload = () => fetch('http://localhost:8080/stories/')
        .then(response => response.json())
        .then(initializeExistingStoriesView);
}

function mainDraw() {
    // checkIfLoggedIn();
    isLoggedIn();
    showStories();
    // form_validations();
}


mainDraw();