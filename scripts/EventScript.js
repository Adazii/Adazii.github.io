document.addEventListener('DOMContentLoaded', function () {
    var eventContainer = document.getElementById('eventContainer');

    // Replace 'your-api-key' with your actual API key
    var apiKey = '5157b19281c649c0b30aa052e8b96fe1';
    var apiUrl = 'http://localhost:3000/getFootballData';  // Update the URL to your server-side proxy endpoint

    fetch(apiUrl, {
        headers: {
            'X-Auth-Token': apiKey,
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(events) {
        // Display each event in the container
        events.matches.forEach(function(event) {
            var eventDiv = createEventDiv(event);
            eventContainer.appendChild(eventDiv);
        });
    })
    .catch(function(error) {
        console.error('Error fetching events:', error);
    });

    function createEventDiv(event) {
        var eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        var title = document.createElement('h2');
        title.textContent = event.homeTeam.name + ' vs ' + event.awayTeam.name;

        var date = document.createElement('p');
        date.textContent = 'Date: ' + event.utcDate;

        var status = document.createElement('p');
        status.textContent = 'Status: ' + event.status;

        eventDiv.appendChild(title);
        eventDiv.appendChild(date);
        eventDiv.appendChild(status);

        return eventDiv;
    }
});
