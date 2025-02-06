const plantButton = document.getElementById('plantButton');
const plantCommonName = document.getElementById('plantName1');
const plantSciName = document.getElementById('plantName2');
const plantImg = document.getElementById('plantImg');

const apiKey = "sk-Hbkc67a4ae76206648518";
const apiUrl = `https://perenual.com/api/species-list?key=${apiKey}&page=1`;

plantButton.onclick = function() {
    findPlant();
};

function findPlant() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.data && data.data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.data.length);
                const plant = data.data[randomIndex];

                plantCommonName.textContent = `Plant name: ${plant.common_name || "Unknown"}`;
                plantSciName.textContent = `Plant name: ${plant.scientific_name || "Unknown"}`;
                plantImg.src = `${plant.default_image.medium_url}`
            } else {
                plantCommonName.textContent = "No plant data available.";
            }
        })
        .catch(error => {
            console.error('Error fetching plant data:', error);
            plantCommonName.textContent = "Failed to fetch plant info.";
        });
}