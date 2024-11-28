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