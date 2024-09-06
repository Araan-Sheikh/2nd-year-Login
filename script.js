function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
  const warningMessage = document.getElementById("warningMessage");

  // Show the warning message immediately
  warningMessage.style.display = "block";
  
  // Hide the warning message after 5 seconds
  setTimeout(() => {
      warningMessage.style.display = "none";
  }, 175000);
});













function openChatbot() {
// Redirect the user to the chatbot page or URL
window.location.href = "https://hari-hara7.github.io/chatbot-version-2.0/";
}


var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

window.onload = function() {
modal1.style.display = "block";
}

var closeBtn1 = document.getElementsByClassName("close")[0];
closeBtn1.onclick = function() {
modal1.style.display = "none";
modal2.style.display = "block";
}

window.onclick = function(event) {
if (event.target == modal1) {
modal1.style.display = "none";
modal2.style.display = "block";
}
}

var closeBtn2 = document.getElementsByClassName("close")[1];
closeBtn2.onclick = function() {
modal2.style.display = "none";
modal3.style.display = "block";
}

var closeBtn3 = document.getElementsByClassName("close")[2];
closeBtn3.onclick = function() {
modal3.style.display = "none";
}




// JavaScript for slideshow animation



// JavaScript for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
let slides = document.querySelectorAll('#analytics-slideshow .slideshow-container img');
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
slides[slideIndex - 1].style.display = "block";
setTimeout(showSlides, 3000); // Change image every 2 seconds
}
























// Function to add a time block
// Function to add a time block
function addTimeBlock() {
const task = document.getElementById('task').value.trim();
const time = document.getElementById('time').value.trim();


// Create a time block object
const timeBlock = {
task: task,
time: time
};

// Retrieve existing time blocks from localStorage or initialize an empty array
let timeBlocks = JSON.parse(localStorage.getItem('timeBlocks')) || [];

// Add the new time block to the array
timeBlocks.push(timeBlock);

// Save the updated time blocks array to localStorage
localStorage.setItem('timeBlocks', JSON.stringify(timeBlocks));

// Render the time blocks
renderTimeBlocks();

// Clear input fields after adding time block
document.getElementById('task').value = '';
document.getElementById('time').value = '';
}

// Function to render time blocks
function renderTimeBlocks() {
const schedule = document.getElementById('schedule');
schedule.innerHTML = ''; // Clear existing content

// Retrieve time blocks from localStorage
const timeBlocks = JSON.parse(localStorage.getItem('timeBlocks')) || [];

// Iterate through time blocks and create HTML elements for each
timeBlocks.forEach(function(timeBlock) {
const timeBlockElement = document.createElement('div');
timeBlockElement.classList.add('time-block');
timeBlockElement.innerHTML = `
  <p><strong>Time:</strong> ${timeBlock.time}</p>
  <p><strong>Task:</strong> ${timeBlock.task}</p>
`;
schedule.appendChild(timeBlockElement);
});
}

// Function to validate time format (HH:MM)
function isValidTimeFormat(time) {
const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
return regex.test(time);
}

// Render time blocks when the page loads
document.addEventListener('DOMContentLoaded', function() {
renderTimeBlocks();
});




// JavaScript for congratulation emojis falling animation
// JavaScript for congratulation emojis falling animation





(adsbygoogle = window.adsbygoogle || []).push({});
















function addGoal() {
const description = document.getElementById('goal-description').value;
const deadline = document.getElementById('goal-deadline').value;

if (description.trim() === '' || deadline.trim() === '') {
alert('Please enter a goal description and deadline.');
return;
}

const goalList = document.getElementById('goal-list');
const goalItem = document.createElement('div');
goalItem.classList.add('goal-item');
goalItem.innerHTML = `
<p><strong>Goal:</strong> ${description}</p>
<p><strong>Deadline:</strong> ${deadline}</p>
`;
goalList.appendChild(goalItem);

// Clear input fields after adding goal
document.getElementById('goal-description').value = '';
document.getElementById('goal-deadline').value = '';
}
















function showLoadingOverlay() {
document.getElementById('loading-overlay').style.display = 'block';
}

// Function to hide loading overlay
function hideLoadingOverlay() {
document.getElementById('loading-overlay').style.display = 'none';
}

// Example: Add event listeners to show/hide loading overlay during page transitions
document.addEventListener('DOMContentLoaded', function() {
showLoadingOverlay(); // Show loading overlay when the page is loaded

// Example: Hide loading overlay after 3 seconds (simulating a page load)
setTimeout(function() {
hideLoadingOverlay();
}, 3000);
});







function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

document.getElementById("feedback-form").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      event.preventDefault();
  }
});

document.getElementById("feedback-form").addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Simulate form submission (replace this with your actual form submission code)
  // For demonstration purposes, I'm just showing the success message
  document.getElementById("success-message").style.display = "block";
  
  // Optionally, reset the form fields after submission
  document.getElementById("feedback-form").reset();
});

document.getElementById("forum-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Collect data from the form
  var topic = document.getElementById("topic").value;
  var question = document.getElementById("question").value;
  
  // Send data to the backend (you'll need to implement this)
  // Example: Use AJAX to send data to a server-side script
  // For demonstration purposes, let's just log the data to the console
  console.log("Topic:", topic);
  console.log("Question:", question);
  
  // Clear the form fields after submission
  document.getElementById("topic").value = "";
  document.getElementById("question").value = "";
  
  // Show alert message
  alert("Your question has been posted!");
  
  // You can also update the discussion area with the new post (optional)
});

function addTask() {
  var taskInput = document.getElementById("task");
  var task = taskInput.value.trim();

  if (task !== "") {
      var taskList = document.getElementById("tasks");
      var li = document.createElement("li");
      li.textContent = task;

      // Add task actions (complete and delete)
      var actions = document.createElement("div");
      actions.classList.add("task-actions");

      var completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.classList.add("complete");
      completeButton.onclick = function() {
          li.classList.toggle("completed");
      };

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
          li.remove();
      };

      actions.appendChild(completeButton);
      actions.appendChild(deleteButton);
      li.appendChild(actions);

      taskList.appendChild(li);

      // Clear input field
      taskInput.value = "";
  }
}



function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Handle file upload form submission
function toggleMenu() {
var menu = document.querySelector('.menu');
menu.classList.toggle('active');
}

// Handle file upload form submission
document.getElementById("file-upload-form").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent default form submission

// Get selected files
var files = document.getElementById("file-input").files;

if (files.length === 0) {
  alert("Soon we will update this feature in academicpal .");
  return;
}

// Create FormData object to send files to server
var formData = new FormData();
for (var i = 0; i < files.length; i++) {
  formData.append("files[]", files[i]);
}

// Send files to server using AJAX
var xhr = new XMLHttpRequest();
xhr.open("POST", "upload.php", true);
xhr.onload = function() {
  if (xhr.status === 200) {
      alert("Files uploaded successfully!");
  } else {
      alert("Error uploading files. Please try again.");
  }
};
xhr.send(formData);
});


function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

function showMessage() {
  alert("Soon we will update this feature in Academic Pal.");
}





// Global variables for timer
var timerInterval;
var timerDisplay = document.getElementById('timer-display');
var studyTimeInput = document.getElementById('study-time');

// Function to start the study timer
function startStudyTimer() {
// Get the study time in minutes
var studyTime = parseInt(studyTimeInput.value, 10) * 60;

// Display initial time
displayTime(studyTime);

// Start the timer
timerInterval = setInterval(function() {
studyTime--;
displayTime(studyTime);

if (studyTime <= 0) {
  clearInterval(timerInterval);
  alert("Time's up! Take a break.");
}
}, 1000);
}

// Function to display time in MM:SS format
function displayTime(seconds) {
var minutes = Math.floor(seconds / 60);
var remainingSeconds = seconds % 60;
var displayString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
timerDisplay.textContent = displayString;
}


// Function to add a bookmark
function addBookmark() {
var bookmarkNameInput = document.getElementById('bookmark-name');
var bookmarkName = bookmarkNameInput.value.trim();

if (bookmarkName !== '') {
var bookmarkList = document.getElementById('bookmark-list');
var li = document.createElement('li');
li.textContent = bookmarkName;
bookmarkList.appendChild(li);

// Clear input field after adding bookmark
bookmarkNameInput.value = '';
} else {
alert("Please enter a name for your bookmark.");
}
}
// Function to update revision progress
function updateRevisionProgress() {
var progressBar = document.getElementById('revision-progress-bar');
var progressLabel = document.getElementById('progress-label');

// Simulate progress update (replace this with actual tracking logic)
var newProgress = Math.floor(Math.random() * 100); // Random progress value between 0 and 100
progressBar.value = newProgress;
progressLabel.textContent = newProgress + '%';
}



// Function to set a study reminder
function setReminder() {
var reminderInput = document.getElementById('reminder-input');
var reminderTime = document.getElementById('reminder-time').value;
var reminderList = document.getElementById('reminder-list');

if (reminderInput.value.trim() !== '' && reminderTime !== '') {
var li = document.createElement('li');
li.textContent = `${reminderInput.value} - ${formatReminderTime(reminderTime)}`;
reminderList.appendChild(li);

// Clear input fields after setting reminder
reminderInput.value = '';
document.getElementById('reminder-time').value = '';
} else {
alert("Please enter both a reminder and a time.");
}
}

// Function to format reminder time for display
function formatReminderTime(dateTime) {
var date = new Date(dateTime);
return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}



var timerInterval;
var timerRunning = false;
var startTime;
var elapsedTime = 0;

function startTimer() {
if (!timerRunning) {
startTime = Date.now() - elapsedTime;
timerInterval = setInterval(updateTimerDisplay, 1000);
document.getElementById('start-button').disabled = true;
document.getElementById('pause-button').disabled = false;
document.getElementById('reset-button').disabled = false;
timerRunning = true;
}
}

function pauseTimer() {
clearInterval(timerInterval);
timerRunning = false;
document.getElementById('start-button').disabled = false;
}

function resetTimer() {
clearInterval(timerInterval);
timerRunning = false;
elapsedTime = 0;
updateTimerDisplay();
document.getElementById('start-button').disabled = false;
document.getElementById('pause-button').disabled = false;
document.getElementById('reset-button').disabled = true;
}

function updateTimerDisplay() {
var currentTime = Date.now();
elapsedTime = currentTime - startTime;
var formattedTime = formatTime(elapsedTime);
document.getElementById('timer-display').textContent = formattedTime;
}

function formatTime(milliseconds) {
var hours = Math.floor(milliseconds / 3600000);
var minutes = Math.floor((milliseconds % 3600000) / 60000);
var seconds = Math.floor((milliseconds % 60000) / 1000);
return (
(hours < 10 ? '0' : '') + hours + ':' +
(minutes < 10 ? '0' : '') + minutes + ':' +
(seconds < 10 ? '0' : '') + seconds
);
}


function findStudyGroups() {
var subject = document.getElementById('subject').value.trim();
var location = document.getElementById('location').value.trim();
var studyGroupResults = document.getElementById('study-group-results');

// Clear previous results
studyGroupResults.innerHTML = '';

// Example data (replace with actual data or API call)
var studyGroups = [
{ subject: 'Mathematics', location: 'Library', time: 'Mon, Wed, Fri 4-6pm', contact: 'Hari' },
{ subject: 'Physics', location: 'Coffee shop', time: 'Tue, Thu 3-5pm', contact: 'Harsha' },
{ subject: 'Computer Science', location: 'Student center', time: 'Sat 10am-12pm', contact: 'Teja' }
];

// Filter study groups based on input
var filteredGroups = studyGroups.filter(function(group) {
return group.subject.toLowerCase().includes(subject.toLowerCase()) &&
     group.location.toLowerCase().includes(location.toLowerCase());
});

// Display filtered study groups
if (filteredGroups.length > 0) {
filteredGroups.forEach(function(group) {
  var groupListing = document.createElement('div');
  groupListing.classList.add('study-group-listing');
  groupListing.innerHTML = `
      <p><strong>Subject:</strong> ${group.subject}</p>
      <p><strong>Location:</strong> ${group.location}</p>
      <p><strong>Time:</strong> ${group.time}</p>
      <p><strong>Contact:</strong> ${group.contact}</p>
  `;
  studyGroupResults.appendChild(groupListing);
});
} else {
var noResultsMessage = document.createElement('p');
noResultsMessage.textContent = 'No study groups found.';
studyGroupResults.appendChild(noResultsMessage);
}
}

// Function to toggle dark mode

// Function to show loading overlay
function showLoadingOverlay() {
document.getElementById('loading-overlay').style.display = 'block';
}

// Function to hide loading overlay
function hideLoadingOverlay() {
document.getElementById('loading-overlay').style.display = 'none';
}

// Example: Add event listeners to show/hide loading overlay during page transitions
document.addEventListener('DOMContentLoaded', function() {
showLoadingOverlay(); // Show loading overlay when the page is loaded

// Example: Hide loading overlay after 3 seconds (simulating a page load)
setTimeout(function() {
hideLoadingOverlay();
}, 2000);
});





// Function to add a new flashcard
// Function to add a new flashcard
function addFlashcard() {
var flashcardContainer = document.getElementById('flashcard-container');
var newFlashcard = document.createElement('div');
newFlashcard.classList.add('flashcard');

var questionInput = document.createElement('textarea');
questionInput.classList.add('question-input');
questionInput.rows = 3;
questionInput.placeholder = "Enter your question or term here...";

var answerInput = document.createElement('textarea');
answerInput.classList.add('answer-input');
answerInput.rows = 3;
answerInput.placeholder = "Enter the answer or definition here...";

var frontContent = document.createElement('div');
frontContent.classList.add('flashcard-front');
frontContent.appendChild(document.createElement('h3')).textContent = "Front";
frontContent.appendChild(questionInput);

var backContent = document.createElement('div');
backContent.classList.add('flashcard-back');
backContent.appendChild(document.createElement('h3')).textContent = "Back";
backContent.appendChild(answerInput);

newFlashcard.appendChild(frontContent);
newFlashcard.appendChild(backContent);

// Toggle between front and back sides on click
newFlashcard.addEventListener('click', function() {
this.classList.toggle('flipped');
});

flashcardContainer.appendChild(newFlashcard);
}





async function fetchDefinition() {
  const word = document.getElementById('wordInput').value;
  if (!word) {
    alert('Please enter a word');
    return;
  }
  const definitionData = await getDefinition(word);
  displayDefinition(definitionData);
}

function displayDefinition(data) {
  const container = document.getElementById('definitionContainer');
  container.innerHTML = '';
  if (!data || data.length === 0) {
    container.innerHTML = '<p>No definition found.</p>';
    return;
  }
  const wordData = data[0];
  const word = document.createElement('h2');
  word.textContent = wordData.word;
  container.appendChild(word);
  if (wordData.phonetics && wordData.phonetics.length > 0) {
    const phonetic = document.createElement('p');
    phonetic.textContent = `Phonetic: ${wordData.phonetics[0].text}`;
    container.appendChild(phonetic);
  }
  wordData.meanings.forEach(meaning => {
    const partOfSpeech = document.createElement('h3');
    partOfSpeech.textContent = meaning.partOfSpeech;
    container.appendChild(partOfSpeech);
    meaning.definitions.forEach(def => {
      const definition = document.createElement('p');
      definition.textContent = def.definition;
      container.appendChild(definition);
      if (def.example) {
        const example = document.createElement('p');
        example.textContent = `Example: ${def.example}`;
        container.appendChild(example);
      }
    });
  });
}

async function getDefinition(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch definition:', error);
  }
}
