function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function showPersonInfo(name, info) {
    // Get the modal and modal content elements
    var modal = document.getElementById("myModal");
    var modalContent = modal.querySelector(".modal-content");
    // Set the person's name and information
    document.getElementById("personName").textContent = name;
    document.getElementById("personInfo").textContent = info;
    // Display the modal
    modal.style.display = "block";
    // Close the modal when the close button is clicked
    modal.querySelector(".close").onclick = function() {
        modal.style.display = "none";
    }
    // Close the modal when clicking anywhere outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}