// Check if browser supports local storage
if (typeof(Storage) !== "undefined") {
    // Retrieve stored text from local storage and display it in the textarea
    var storedText = localStorage.getItem("noteFieldText");
    if (storedText) {
        document.getElementById("noteField").value = storedText;
    }

    // Save text to local storage whenever user types
    document.getElementById("noteField").addEventListener("input", function() {
        var text = this.value;
        localStorage.setItem("noteFieldText", text);
    });
} else {
    alert("Sorry, your browser does not support Web Storage...");
}