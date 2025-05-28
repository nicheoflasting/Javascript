const inputField = document.getElementById('name-input');
const suggestionsList = document.getElementById('suggestions');
let names = [];
let highlightedIndex = -1;

// Fetch names from JSON stored as an array
async function fetchNames() {
    try {
        const response = await fetch('names.json'); // Adjust path as necessary
        names = await response.json();
    } catch (error) {
        console.error('Error fetching names:', error);
    }
}

// Filter names based on input
function filterNames(query) {
    if (!query) return [];
    return names.filter(name => name.toLowerCase().startsWith(query.toLowerCase()));
}

// Render suggestions
function renderSuggestions(suggestions) {
    suggestionsList.innerHTML = ""; // Clear previous suggestions
    if (suggestions.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }

    suggestions.forEach((suggestion, index) => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.onclick = () => selectName(suggestion);
        li.className = index === highlightedIndex ? 'active' : '';
        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
}

// Select name
function selectName(name) {
    inputField.value = name;
    suggestionsList.style.display = 'none';
}

// Handle input
inputField.addEventListener('input', () => {
    const query = inputField.value;
    const filteredNames = filterNames(query);
    renderSuggestions(filteredNames);
    highlightedIndex = -1; // Reset highlighted index
});

// Keyboard navigation
inputField.addEventListener('keydown', (event) => {
    const suggestions = suggestionsList.getElementsByTagName('li');

    if (event.key === 'ArrowDown') {
        highlightedIndex = (highlightedIndex + 1) % suggestions.length;
    } else if (event.key === 'ArrowUp') {
        highlightedIndex = (highlightedIndex - 1 + suggestions.length) % suggestions.length;
    } else if (event.key === 'Enter') {
        if (highlightedIndex >= 0) selectName(suggestions[highlightedIndex].textContent);
    }

    for (let i = 0; i < suggestions.length; i++) {
        suggestions[i].classList.remove('active');
    }

    if (highlightedIndex >= 0) {
        suggestions[highlightedIndex].classList.add('active');
    }
});

// Initiate name fetching
fetchNames();
