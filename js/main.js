async function getProfileData() {

    // URL BASE
    const baseURL = 'https://api.github.com/';

    // URL PERFIL DO USUÁRIO
    const profile = await fetch(`${baseURL}users/LisianeWeiss`);

    const dataProfile = await profile.json();
    const userProfile = dataProfile;
    showProfileData(userProfile);

    function showProfileData(userProfile) {

        const image = document.getElementById('image');
        const name = document.getElementById('name');
        const description = document.getElementById('description');
        const company = document.querySelectorAll('.company');
        const location = document.getElementById('location');
        const socialMedia = document.getElementById('socialMedia');
        const repositories = document.getElementById('repos');


        image.setAttribute('src', `${userProfile.avatar_url}`);
        name.innerText = `${userProfile.name}`;
        description.innerText = `${userProfile.bio}`;
        company.forEach(function (company) {
            company.innerText = `${userProfile.company}`;
        })
        location.innerText = `${userProfile.location}`;
        socialMedia.innerText = `${userProfile.twitter_username}`;
        repositories.innerText = `${userProfile.public_repos}`

    }

    // URL REPOSITÓRIOS
    const repos = await fetch(`${baseURL}users/LisianeWeiss/repos`)
        .then(response => {
            return response.json()
        })

    const dataRepos = repos.map((data) => {
       return data
       
    })
  
    const starredData = Object.keys(dataRepos).length
    
       const starred = document.getElementById('starred');
       starred.innerText = `${starredData}`;


}

getProfileData();

// DROPDOWN
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
    dropdown.classList.toggle('active');
}

// TROCA DE CONTEUDO ENTRE REPOSITORIOS E STARRED
function showContent(obj) {

    switch (obj.id) {
        case 'showRepos':
            document.getElementById('repositories').style.display = "block";
            document.getElementById('showRepos').classList.add('border-bottom');
            document.getElementById('showStarred').classList.remove('border-bottom');
            document.getElementById('star').style.display = "none";
            break
        case 'showStarred':
            document.getElementById('star').style.display = "block";
            document.getElementById('showStarred').classList.add('border-bottom');
            document.getElementById('showRepos').classList.remove('border-bottom');
            document.getElementById('repositories').style.display = "none";
            break
        
    }
}






