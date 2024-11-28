    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function () {
      // Get the audio element after the DOM is fully loaded
      const audio = document.getElementById('audioElement');
      
      if (!audio) {
        console.error("Audio element not found!");
        return;
      }

      let hasPlayed = false; // To make sure the audio plays only once after scrolling

      // Listen for scroll events
      window.addEventListener('scroll', function() {
          // Play the audio when the user scrolls down
          if (!hasPlayed && window.scrollY > 100) { // Trigger audio after 100px of scroll
              audio.play().then(() => {
                  console.log('Audio is playing');
                  hasPlayed = true; // Prevent audio from playing multiple times
              }).catch((error) => {
                  console.error('Error playing audio:', error);
              });
          }
      });
    });


initSnowify();

function copyToClipboard() {
    /* Create a temporary textarea element */
    var textArea = document.createElement("textarea");
    
    /* Set the value to the text content of the div */
    textArea.value = document.querySelector('.copy-text').innerText;
    
    /* Append the textarea to the body */
    document.body.appendChild(textArea);
    
    /* Select the text in the textarea */
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices
    
    /* Copy the text */
    document.execCommand('copy');
    
    /* Remove the temporary textarea */
    document.body.removeChild(textArea);
    
    /* Show the popup */
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.style.opacity = "1";
    
    /* Hide the popup after 2 seconds */
    setTimeout(function() {
      popup.style.opacity = "0";
      setTimeout(function() {
        popup.style.display = "none";
      }, 300);
    }, 2000);
  }