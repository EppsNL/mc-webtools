    // Function to initialize text content from local storage
    window.onload = function() {
      var storedText = localStorage.getItem("seed");
      if (storedText !== null) {
        document.getElementById("seed-content").textContent = storedText;
		updateLink(storedText);
      }
    };

    // Function to display text input for editing
    function showSeedInput() {
      var textDisplay = document.getElementById("seed-display");
      var textInputContainer = document.getElementById("seed-input-container");
      textDisplay.style.display = "none";
      textInputContainer.style.display = "block";
      var currentText = document.getElementById("seed-content").textContent;
      document.getElementById("seed-input").value = currentText;
    }

    // Function to save edited text and update display
    function editText() {
      var newText = document.getElementById("seed-input").value.trim(); // Trim whitespace
      if (newText === "") {
        newText = "Enter seed";
      }
      localStorage.setItem("seed", newText);
      document.getElementById("seed-content").textContent = newText;
      var textDisplay = document.getElementById("seed-display");
      var textInputContainer = document.getElementById("seed-input-container");
      textDisplay.style.display = "block";
      textInputContainer.style.display = "none";
      updateLink(newText);
    }

    // Function to update the link with the entered text
    function updateLink(seed) {
      var link = document.getElementById("ChunkbaseLink");
      link.href = "https://www.chunkbase.com/apps/seed-map#" + encodeURIComponent(seed);
	  var link = document.getElementById("SeederLink");
      link.href = "https://www.mcseeder.com/?seed=" + encodeURIComponent(seed);
    }