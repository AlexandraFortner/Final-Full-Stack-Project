var PAGE_DATA = {};


API_URL = 'http://localhost:8080/';

// VALIDATIONS BEGIN

var loginValidations = {
    username: false,
    passord: false
}

var signupValidations = {
    username: false,
    passord: false
}

var validations = {
    IsLoggedIn: false,
    AuthorName: '',
    Title: false,
    StorySummary: false,
    Story: false
};

function logInMaybeEnableButton() {
    if (
        loginValidations.username === true &&
        loginValidations.password === true
    ) {
        $('#LogInButton').attr('disabled', false);
    } else {
        $('#LogInButton').attr('disabled', true);
    }
}

function signUpMaybeEnableButton() {
    if (
        signupValidations.username === true &&
        signupValidations.password === true
    ) {
        $('#SignUpButton').attr('disabled', false);
    } else {
        $('#SignUpButton').attr('disabled', true);
    }
}

function isLoggedIn() {
    if (validations.IsLoggedIn == false) {
        console.log('The user is not logged in.');
        $('#new-story-form').attr('hidden', 'hidden');
        $('#stories').attr('hidden', 'hidden');
        $('#about').attr('hidden', 'hidden');
        $('#navbar').attr('hidden', 'hidden');
        $('#users').attr('hidden', 'hidden');
        // $('#sign-up').removeAttr('hidden');
        $('#log-in').removeAttr('hidden');
    } else if (validations.IsLoggedIn == true) {
        console.log('The user is logged in.');
        $('#stories').removeAttr('hidden');
        $('#navbar').removeAttr('hidden');
        $('#sign-up').attr('hidden', 'hidden');
        $('#log-in').attr('hidden', 'hidden');
        $('#users').removeAttr('hidden');
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

function user(users) {
    var userStructure = users.map(function (user) {
        return [
            "<div id='all-users' class='card text-white bg-dark mb-3' style='max-width: 30rem;'>",
            "<div class='card-body'>" + user.username +
            "</div></div>"
        ].join("")
    }).join("");
    return "<h3>All Users:</h3>" + userStructure;
}

function profile() {
    var profileStructure =
        [
            "<div id='profile-information'>",
            "<div style='font-size: 24px;'>" + validations.AuthorName + "</div>",
            "<button id='log-out-button' class='signup-login-button'> Log-Out</button><br>",
            "<button id='delete-user-button' class='signup-login-button'> Delete Profile</button>",
            "</div></div>"
        ].join("")
    return "<h3>Username:</h3>" + profileStructure;
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
    $('#users').attr('hidden', 'hidden');
    $('#profile-info').attr('hidden', 'hidden');
});

$("#navUsers").click(function (event) {
    event.preventDefault();
    // alertify.log('You\'re looking at Stories!');
    $('#about').attr('hidden', 'hidden');
    $('#stories').attr('hidden', 'hidden');
    $('#users').removeAttr('hidden');
    $('#new-story-form').attr('hidden', 'hidden');
    $('#profile-info').attr('hidden', 'hidden');
});

$("#navAbout").click(function (event) {
    event.preventDefault();
    // alertify.log('You\'re looking at About!');
    $('#new-story-form').attr('hidden', 'hidden');
    $('#stories').attr('hidden', 'hidden');
    $('#about').removeAttr('hidden');
    $('#users').attr('hidden', 'hidden');
    $('#profile-info').attr('hidden', 'hidden');
});

$('#navCreate').click(function (event) {
    event.preventDefault();
    // alertify.log('You\'ve clicked Create!');
    $('#about').attr('hidden', 'hidden');
    $('#stories').attr('hidden', 'hidden');
    $('#users').attr('hidden', 'hidden');
    $('#new-story-form').removeAttr('hidden');
    $('#profile-info').attr('hidden', 'hidden');
});

$('#user-profile-icon').click(function (event) {
    event.preventDefault();
    // alertify.log('You\'ve clicked Create!');
    $('#about').attr('hidden', 'hidden');
    $('#stories').attr('hidden', 'hidden');
    $('#users').attr('hidden', 'hidden');
    $('#new-story-form').attr('hidden', 'hidden');
    $('#profile-info').removeAttr('hidden');
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

// .CLICKS ENDS ||| ON INPUTS BEGIN

// LOG IN USERNAME VALIDATION
$('#log-in-username-input').on('input', function (event) {
    var username = event.currentTarget.value;
    var array = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var errorUL = $('#log-in-username-errors');
    if (array.includes(username.length)) {
        $('#log-in-username-input').css("border", "green double");
        loginValidations.username = true;
        errorUL.html('');
    } else {
        $('#log-in-username-input').css("border", "red double");
        loginValidations.username = false;
        errorUL.html('<li>Username must be 8-20 characters long.</li>');
    }
    logInMaybeEnableButton();
});

// LOG-IN PASSWORD VALIDATION
$('#log-in-password-input').on('input', function (event) {
    var string = '';
    var password = event.currentTarget.value;
    var array = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var errorUL = $('#log-in-password-errors');
    if (!array.includes(password.length)) {
        string += '<li>Password must be 8-20 characters long.</li>';

        $('#log-in-password-input').css("border", "red double");

    } if (
        !(
            /[a-zA-Z]/.test(password) &&
            /\d/.test(password)
        )
    ) {
        $('#log-in-password-input').css("border", "red double");
        string +=
            '<li>Alert! You must use a letter, a number, and punctuation in your password.</li>';
    }
    else {
        $('#log-in-password-input').css("border", "green double");
        loginValidations.password = true;
    }
    loginValidations.pass = string.length === 0;
    errorUL.html(string);
    logInMaybeEnableButton();
});


// SIGN-UP USERNAME VALIDATION
$('#sign-up-username-input').on('input', function (event) {
    var username = event.currentTarget.value;
    var array = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var errorUL = $('#sign-up-username-errors');
    if (array.includes(username.length)) {
        $('#sign-up-username-input').css("border", "green double");
        signupValidations.username = true;
        errorUL.html('');
    } else {
        $('#sign-up-username-input').css("border", "red double");
        signupValidations.username = false;
        errorUL.html('<li>Username must be 8-20 characters long.</li>');
    }
    signUpMaybeEnableButton();
});

// SIGN UP PASSWORD VALIDATION
$('#sign-up-password-input').on('input', function (event) {
    var string = '';
    var password = event.currentTarget.value;
    var array = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var errorUL = $('#sign-up-password-errors');
    if (!array.includes(password.length)) {
        string += '<li>Password must be 8-20 characters long.</li>';
    }
    if (
        !(
            /[a-zA-Z]/.test(password) &&
            /\d/.test(password)
        )
    ) {
        $('#sign-up-password-input').css("border", "red double");
        string +=
            '<li>Alert! You must use a letter and a number in your password.</li>';
    }
    else {
        $('#sign-up-password-input').css("border", "green double");
        signupValidations.password = true;
    }
    signupValidations.pass = string.length === 0;
    errorUL.html(string);
    signUpMaybeEnableButton();
});

//ON INPUTS END ||| THE "DIFFERENT PAGES" BEGIN

function initializeExistingStoriesView(stories) {
    $("#stories").html(story(stories));
}

function initializeExistingUsersView(users) {
    $('#users').html(user(users));
}

function initializeProfileView() {
    $('#profile-info').html(profile());
}

function moveNewStoryToExistingStories() {
    let author = validations.AuthorName;
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
        validations.AuthorName = $('#sign-up-username-input').val();

        $.ajax({
            url: 'http://localhost:8080/signup/',
            method: 'post',
            dataType: 'json',
            crossDomain: true,
            data: JSON.stringify({
                username: $('#sign-up-username-input').val(),
                password: $('#sign-up-password-input').val(),
            }),
            contentType: 'application/json',
            mimeType: 'application/json',
            error: function (data, status, er) {
                alert('status: ' + status);
            },
            success: function (data) {
                // console.log(data);
                validations.IsLoggedIn = true;
                isLoggedIn();
                showStories();
                showUsers();
                initializeProfileView();
            }
        });
    });
}

function registerLogInHandler() {
    $('#log-in').on('submit', function (event) {
        event.preventDefault();

        $.ajax({
            url: 'http://localhost:8080/login',
            method: 'post',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({
                username: $('#log-in-username-input').val(),
                password: $('#log-in-password-input').val(),
            }),
            contentType: 'application/json',
            mimeType: 'application/json',
            error: function (data, status, er) {
                alertify.alert('Wrong information. Try again.');
            },
            success: function (data) {
                // console.log(data);
                // BELOW SETS THE AUTHOR NAME FOR THE WHOLE OF THE SESSION UNTIL USER LOGS OUT
                validations.AuthorName = $('#log-in-username-input').val();
                validations.IsLoggedIn = true;
                isLoggedIn();
                showStories();
                showUsers();
                initializeProfileView();
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
    let author = validations.AuthorName;
    let title = form.title.value;
    let story = form.story.value;
    let storySummary = form.storySummary.value;
    let genre = form.genre.value;

    // CHECK FOR VALID DATA
    postToNewStoryRoute(author, title, story, genre, storySummary);
}

// SHOWSTORIES FUNCTION SHOWS ALL STORY DATA AS JSON AND DISPLAYS THEM VIA SPRING BACKEND: http://localhost:8080/stories
function showStories() {
    fetch('http://localhost:8080/stories/')
        .then(response => response.json())
        .then(initializeExistingStoriesView);
    $('#users').attr('hidden', 'hidden');
}

function showUsers() {
    fetch('http://localhost:8080/users/')
        .then(response => response.json())
        .then(initializeExistingUsersView);
}

function mainDraw() {
    isLoggedIn();
    registerSignUpHandler();
    registerLogInHandler();

}
mainDraw();