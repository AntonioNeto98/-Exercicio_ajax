document.addEventListener ('DOMContentLoaded', function() {
    const nomeUsuario = document.querySelector('#name');
    const nomeElemento = document.querySelector('#username');
    const avatarElemento = document.querySelector('#avatar');
    const reposiElemento = document.querySelector('#repos');
    const followersElemento = document.querySelector('#followers');
    const followingElemento = document.querySelector('#following');
    const linkElemento = document.querySelector('#link');

    fetch('https://api.github.com/users/AntonioNeto98')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nomeUsuario.innerText = json.name;
        nomeElemento.innerText = json.login;
        avatarElemento.src = json.avatar_url;
        followingElemento.innerText = json.following;
        followersElemento.innertext = json.followers;
        reposiElemento.innerText = json.public_repos;
        linkElemento.href = json.html_url;
    })
})