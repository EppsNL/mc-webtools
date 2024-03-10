const overworldXInput = document.getElementById('overworldX');
const overworldZInput = document.getElementById('overworldZ');
const netherXInput = document.getElementById('netherX');
const netherZInput = document.getElementById('netherZ');

function convertCoordinates(sourceInput, destinationInput) {
  const sourceValue = parseInt(sourceInput.value);
  if (!isNaN(sourceValue)) {
	const destinationValue = sourceInput === netherXInput || sourceInput === netherZInput ? Math.round(sourceValue * 8) : Math.round(sourceValue / 8);
	destinationInput.value = destinationValue;
  }
}

function handleInputChange(sourceInput, destinationInput) {
  sourceInput.addEventListener('input', function() {
	this.value = this.value.replace(/[^0-9.-]/g, '');
	convertCoordinates(sourceInput, destinationInput);
  });
}

// Add event listeners to input fields
handleInputChange(overworldXInput, netherXInput);
handleInputChange(overworldZInput, netherZInput);
handleInputChange(netherXInput, overworldXInput);
handleInputChange(netherZInput, overworldZInput);

// Initialize conversion on page load
convertCoordinates(overworldXInput, netherXInput);
convertCoordinates(overworldZInput, netherZInput);