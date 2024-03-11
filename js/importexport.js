  function exportLocalStorage() {
    const localStorageData = JSON.stringify(localStorage);
    download('mc_webtools.json', localStorageData);
  }

  function importLocalStorage() {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function() {
        const importedData = JSON.parse(reader.result);
        for (const key in importedData) {
          localStorage.setItem(key, importedData[key]);
        }
        alert('Local Storage data imported successfully!');
		location.reload()
      }

      reader.readAsText(file);
    };

    input.click();
  }

  function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }