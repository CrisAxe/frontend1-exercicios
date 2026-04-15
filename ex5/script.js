
async function buscarDados(breed) {
    try {
        mostarLoading();
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        if(!res.ok) 
            throw new Error(`Erro ao buscar dados: `);
        const dados  = await res.json();
        mostrarImagem(dados.message);
    } catch (error) {
        console.error(error.message);
    } finally {
        esconderLoading();
    }
    
}

const form = document.querySelector('form'); 

form.addEventListener('submit', (e) => {
    const breed = document.querySelector('#nome-cao').value;
    e.preventDefault();
    buscarDados(breed);
});

    const img = document.createElement('img'); 
    document.body.appendChild(img);
function mostrarImagem(url) {
    img.alt = 'Imagem do cão';
    img.src = url;
}

function mostarLoading() {
    img.src = 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif';
}

function esconderLoading() {

}