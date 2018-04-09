var PAGE_DATA = {};


API_URL = 'http://localhost:8080/';

// VALIDATIONS BEGIN

var validations = {
    IsLoggedIn: false,
    AuthorName: '',
    Title: false,
    StorySummary: false,
    Story: false
};

function maybeEnableButton() {
    if (
        validations.AuthorName === true &&
        validations.password === true &&
        validations.repeatPass === true
    ) {
        $('#SignUpButton').attr('disabled', false);
    } else {
        $('#SignUpButton').attr('disabled', true);
    }
}

// function AuthorNameValidations() {
//     if (validations.AuthorName == false) {
//         console.log('The user is not logged in.');
//     } else if (validations.AuthorName == true) {
//         console.log('The user is logged in.');
//         $('#sign-up').removeAttr('hidden');
//     } else {
//         console.log('ERROR.')
//     }
// }

function isLoggedIn() {
    if (validations.IsLoggedIn == false) {
        console.log('The user is not logged in.');
        $('#new-story-form').attr('hidden', 'hidden');
        $('#stories').attr('hidden', 'hidden');
        $('#about').attr('hidden', 'hidden');
        $('#navbar').attr('hidden', 'hidden');
        // $('#sign-up').removeAttr('hidden');
        $('#log-in').removeAttr('hidden');
    } else if (validations.IsLoggedIn == true) {
        console.log('The user is logged in.');
        $('#stories').removeAttr('hidden');
        $('#navbar').removeAttr('hidden');
        $('#sign-up').attr('hidden', 'hidden');
        $('#log-in').attr('hidden', 'hidden');
    } else {
        console.log('ERROR.')
    }
}
// VALIDATIONS END
// SHOWING EXISTING STORY BODYS IN SEPERATE CARDS
function getGenre(genre) {
    if (genre == 1) {
        newGenre = 'Horror'
    } else if (genre == 2) {
        newGenre = 'Action-Adventure'
    } else if (genre == 3) {
        newGenre = 'Romance'
    } else if (genre == 4) {
        newGenre = 'Thriller'
    } else if (genre == 5) {
        newGenre = 'Comedy'
    } else if (genre == 6) {
        newGenre = 'Historical Fiction'
    } else if (genre == 7) {
        newGenre = 'Fanfiction'
    } else if (genre == 8) {
        newGenre = 'Fantasy'
    } else if (genre == 9) {
        newGenre = 'Non-Fiction'
    } else if (genre == 10) {
        newGenre = 'Science Fiction'
    } else if (genre == 11) {
        newGenre = 'Short Story'
    } else if (genre == 12) {
        newGenre = 'Poetry'
    } else if (genre == 13) {
        newGenre = 'Spiritual'
    } else if (genre == 14) {
        newGenre = 'Paranormal'
    } else if (genre == 15) {
        newGenre = 'Teen Fiction'
    } else if (genre == 16) {
        newGenre = 'Random'
    } else if (genre == 17) {
        newGenre = 'Opinion/Analysis'
    } else {
        newGenre = null
    }
    return (newGenre)
}

// I PLAN TO WRITE THE BELOW FUNCTION LATER ON
// function heartVote() {

// }
function story(stories) {
    var storyStructure = stories.map(function (story) {
        return [
            "<div id='all-stories' class='card text-white bg-dark mb-3' style='max-width: 30rem;'>",
            "<div class='card-body'>",
            "<div class='card-header'>" + story.author_name + "</div>",
            "<div class='card-title'>" + story.title + "</div>",
            "<div class='card-title'>" + getGenre(story.genre_id) + "</div>",
            "<div class='card-title'>" + story.date + "</div>",
            "<div class='card-title'>" + story.story_summary + "</div>",
            "<div class='card-text'>" + story.story + "</div>",
            "</div></div>"
        ].join("")
    }).join("");
    return "<h3>All Stories:</h3>" + storyStructure;
}
// STOPS DISPLAYING INFORMATION IN HTML
// .CLICKS BEGIN ||| THE "DIFFERENT PAGES" BEGIN

// NAVBAR .CLICKS
$("#navStories").click(function (event) {
    event.preventDefault();
    // alertify.log('You\'re looking at Stories!');
    $('#about').attr('hidden', 'hidden');
    $('#stories').removeAttr('hidden');
    $('#new-story-form').attr('hidden', 'hidden');
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
});

// SIGNUP .CLICKS
$('#sign-up-button').click(function (event) {
    event.preventDefault();
    $('#sign-up').removeAttr('hidden');
    $('#log-in').attr('hidden', 'hidden');
});


// LOGIN .CLICKS
$('#log-in-button').click(function (event) {
    event.preventDefault();
    $('#sign-up').attr('hidden', 'hidden');
    $('#log-in').removeAttr('hidden');
});

// .CLICKS ENDS ||| THE "DIFFERENT PAGES" BEGIN

function initializeExistingStoriesView(stories) {
    $("#stories").html(story(stories));
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
}
// HELPED
function registerSignUpHandler() {
    $('#sign-up').on('submit', function (event) {
        event.preventDefault();
        validations.IsLoggedIn = true;
        isLoggedIn();

        // BELOW SETS THE AUTHOR NAME FOR THE WHOLE OF THE SESSION UNTIL USER LOGS OUT
        validations.AuthorName = $('#signup-username-input').val();

        $.ajax({
            url: 'http://localhost:8080/signup/',
            method: 'post',
            dataType: 'json',
            crossDomain: true,
            data: JSON.stringify({
                username: $('#signup-username-input').val(),
                password: $('#signup-password-input').val(),
            }),
            contentType: 'application/json',
            mimeType: 'application/json',
            error: function (data, status, er) {
                alert('status: ' + status);
            }
        });
    });
}

function postToNewStoryRoute(author, title, story, genre, storySummary) {
    let story_dto = {
        author_name: author,
        title: title,
        story: story,
        story_summary: storySummary,
        genre_id: Number(genre)
    };
    fetch('http://localhost:8080/newStory', {
        method: 'post',
        headers: {
            "Content-Type": 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(story_dto)
    }).then(moveNewStoryToExistingStories)
}

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
    postToNewStoryRoute(author, title, story, genre, storySummary);
}

// SHOWSTORIES FUNCTION SHOWS ALL STORY DATA AS JSON AND DISPLAYS THEM VIA SPRING BACKEND: http://localhost:8080/stories
function showStories() {
    window.onload = () => fetch('http://localhost:8080/stories/')
        .then(response => response.json())
        .then(initializeExistingStoriesView);
}

function mainDraw() {
    registerSignUpHandler();
    // checkIfLoggedIn();
    isLoggedIn();
    showStories();
    // form_validations();
}
mainDraw();