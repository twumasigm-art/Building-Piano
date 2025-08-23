// Vars


// Select all keys //
const keys = document.querySelectorAll('.key');

//--Listeners--//
//Add an event listener for each key//
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
    });

//--Handlers--//
function playNote(key) {
    // Get the note's letter value //
    const noteAudio = document.getElementById(key.dataset.note);

    // Reset the note's current time to 0 
    noteAudio.currentTime = 0;

    // Play the note //
    noteAudio.play();

    // Add a class, active for styling purposes
    key.classList.add("active");

    // Listen for when the sound has ended and remove 'active' class
    noteAudio.addEventListener('ended', () => {
        key.classList.remove("active");
    });
}

