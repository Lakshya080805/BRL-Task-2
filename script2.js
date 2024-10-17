const apiUrl = 'https://randomuser.me/api/';
const userId = new URLSearchParams(window.location.search).get('id');
const userDetail = document.getElementById('user-detail');

fetch(`${apiUrl}?id=${userId}`)
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userDetailHtml = `
            <h2>${user.name.first} ${user.name.last}</h2>
            <img src="${user.picture.large}" alt="${user.name.first}">
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Date of Birth: ${user.dob.date}</p>
            <p>Location: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.country}</p>
        `;
        userDetail.innerHTML = userDetailHtml;
    })
    .catch(error => console.error('Error fetching API data:', error));