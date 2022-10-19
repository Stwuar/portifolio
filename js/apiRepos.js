const resposContainer = document.getElementById("carts")

const fetchRepos = async () => {
    const response = await fetch("https://api.github.com/users/Stwuar/repos")
    return await response.json()
}

const getRepos = async () => {
    const repos = await fetchRepos()

    repos.map(repo => {
        resposContainer.innerHTML += `<div class="projeto">
        <div class="img-projetos">
            <img src="${repo.owner.avatar_url}"width="60px"  />
        </div>
        <h6>${repo.owner.login}</h6>
        <h6>${repo.name}</h6>
        <p>${repo.description}</p>
        <div class="buttons">
            <a href="${repo.html_url}" target="_black" >Ver repositorio</button>
        </div>
    </div>`
    } )
}

getRepos()