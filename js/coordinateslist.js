const form = document.getElementById('coordinatesForm');
        const itemList = document.getElementById('coordinatesList');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const itemName = document.getElementById('itemName').value;
            const dimension = document.getElementById('dimension').value;
            const x = document.getElementById('coordListX').value;
            const y = document.getElementById('coordListY').value;
            const z = document.getElementById('coordListZ').value;

            const coordinate = {
                itemName: itemName,
                dimension: dimension,
                x: x,
                y: y,
                z: z
            };

            // Get existing coordinates from local storage or create an empty array
            let coordinates = JSON.parse(localStorage.getItem('coordinates')) || [];
            coordinates.push(coordinate);
            localStorage.setItem('coordinates', JSON.stringify(coordinates));

            displayCoordinates();
            form.reset();
        });

        function displayCoordinates() {
            itemList.innerHTML = '';

    // Retrieve coordinates from local storage and sort them by dimension
    let coordinates = JSON.parse(localStorage.getItem('coordinates')) || [];
    coordinates.sort((a, b) => {
        // First, sort by dimension
        const dimensionOrder = { "Overworld": 0, "Nether": 1, "The End": 2 };
        const dimensionSort = dimensionOrder[a.dimension] - dimensionOrder[b.dimension];
        // If dimensions are the same, sort alphabetically by item name
        return dimensionSort === 0 ? a.itemName.localeCompare(b.itemName) : dimensionSort;
    });

            coordinates.forEach((coordinate, index) => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="location">${coordinate.itemName}</span> - ${coordinate.dimension} - (${coordinate.x}, ${coordinate.y}, ${coordinate.z}) `;

                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '❌';
                deleteBtn.addEventListener('click', function() {
                    // Remove coordinate from array
                    coordinates.splice(index, 1);
                    // Update local storage
                    localStorage.setItem('coordinates', JSON.stringify(coordinates));
                    // Update displayed list
                    displayCoordinates();
                });

                // Append delete button to list item
                li.appendChild(deleteBtn);
                itemList.appendChild(li);
            });
        }

        // Display existing coordinates when the page loads
        displayCoordinates();