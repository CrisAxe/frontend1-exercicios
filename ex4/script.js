async function fetchData() {
    const lista = document.getElementById("lista-posts");
    lista.innerHTML = "<li>A carregar...</li>";

    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await resposta.json();

        lista.innerHTML = "";

        posts.slice(0).forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            lista.appendChild(li);
        });

    } catch (erro) {
        lista.innerHTML = "<li>Erro ao carregar os posts.</li>";
        console.error(erro);
    }
}

fetchData();
