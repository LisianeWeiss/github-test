// Dropdown
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
    dropdown.classList.toggle('active');

}

async function getProfileData() {

    // URL DADOS USUÁRIO
    const dataProfile = await fetch('https://api.github.com/users/LisianeWeiss');
    const data = await dataProfile.json();
    const userProfile = data;
    showProfileData(userProfile);


    function showProfileData(userProfile) {
        
        const image = document.getElementById('image');
        const name = document.getElementById('name');
        const description = document.getElementById('description');
        const company = document.querySelectorAll('.company');
        const location = document.getElementById('location');
        const socialMedia = document.getElementById('socialMedia')

        image.setAttribute('src', `${userProfile.avatar_url}`);
        name.innerText = `${userProfile.name}`;
        description.innerText = `${userProfile.bio}`;
        company.forEach(function (company) {
            company.innerText = `${userProfile.company}`;
        })
        location.innerText = `${userProfile.location}`;
        socialMedia.innerText = `${userProfile.twitter_username}`;

    }


}
getProfileData();




