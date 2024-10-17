const apiUrl = 'https://randomuser.me/api/?results=10';
const userList = document.getElementById('user-list');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <img src="${user.picture.thumbnail}" alt="${user.name.first}">
                <h2>${user.name.first} ${user.name.last}</h2>
                <a href="user-detail.html?id=${user.id.value}">View Details</a>
            `;
            userList.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error fetching API data:', error));