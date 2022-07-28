// Load data from external files
import profileData from "./data.js";
import Profile from "./Dog.js";


const ageEl = document.getElementById("cardAge");
const nameEl = document.getElementById("cardName");
const bioEl = document.getElementById("cardBio");
const imageEl = document.getElementById("cardImage");
const swipeResult = document.getElementById("swipeResult");

const nopeBtn = document.getElementById("nopeBtn");
const likeBtn = document.getElementById("likeBtn");

nopeBtn.addEventListener("click", nopeProfile);
likeBtn.addEventListener("click", likeProfile);


let profiles = [];
let swipedProfiles = [];
let waiting = false;
let currentProfile = {}

// Turn data into class objects
function createProfiles() {
    profileData.forEach((profile)=>{profiles.push(new Profile(profile))})
}


function swipeRender(result) {
    if (!waiting) {
        waiting = true;
        currentProfile.hasBeenSwiped = true;
        swipeResult.style.display = "block";
        if (result==="nope") {
            swipeResult.src = "images/badge-nope.png";
            currentProfile.hasBeenLiked = false;
        } else {
            swipeResult.src = "images/badge-like.png";
            currentProfile.hasBeenLiked = true;
        }
        swipedProfiles.push(currentProfile);
        setTimeout(()=> {renderNext(profiles)}, 1000);
    }
}


function nopeProfile() {swipeRender("nope");}
function likeProfile() {swipeRender("like");}


function renderNext(profiles) {
    if (profiles.length >= 1) {
        currentProfile = profiles.shift();
        renderCard(currentProfile);
    } else {renderEmpty();}
    swipeResult.style.display = "none";
    waiting = false;
}

function renderCard(profile) {
    ageEl.textContent = profile.age;
    nameEl.textContent = profile.name + ",";
    bioEl.textContent = profile.bio;
    imageEl.src = profile.avatar;

}
function renderEmpty() {
    ageEl.textContent = "";
    nameEl.textContent = "";
    bioEl.textContent = "";
    imageEl.src = "";
    imageEl.style.display = "none";
    nopeBtn.disabled = "true";
    likeBtn.disabled = "true";
}

createProfiles();
renderNext(profiles);


