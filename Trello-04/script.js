const episodios = [
    { id: 1, episodio: 'T1:01 - Degenerado', tempo: '29min', imagem: 'images/1ep.jpg', link: 'https://www.youtube.com/watch?v=_rB36UGoP4Y' },
    { id: 2, episodio: 'T1:02 - Acerte primeiro', tempo: '28min', imagem: 'images/2ep.jpg', link: 'https://www.youtube.com/watch?v=1Aoc-cd9eYs' },
    { id: 3, episodio: 'T1:03 - Esqueleto', tempo: '24min', imagem: 'images/3ep.jpg', link: 'https://www.youtube.com/watch?v=9z1nTwP2n0w' }
];

const listaEpisodios = document.getElementById('lista-episodios');
episodios.forEach(episodio => {
    const cardEpisodio = document.createElement('div');
    cardEpisodio.className = 'card-episodio';
    cardEpisodio.innerHTML = `
        <span>${episodio.episodio}</span>
        <span>${episodio.tempo}</span>
        <a href="${episodio.link}" target="_blank">
            <img src="${episodio.imagem}" alt="Imagem do episódio ${episodio.id}">
        </a>`;
    cardEpisodio.addEventListener('click', () => {
        console.log(`Episódio clicado: ${episodio.id}`);
    });
    listaEpisodios.appendChild(cardEpisodio);
});

['sobre', 'trailer', 'atores', 'avaliacoes'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => alert("Página em construção"));
});

document.getElementById('insta').addEventListener('click', () => window.open('http://www.instagram.com', '_blank'));
document.getElementById('twt').addEventListener('click', () => window.open('http://www.twitter.com', '_blank'));
document.getElementById('face').addEventListener('click', () => window.open('http://www.facebook.com', '_blank'));

document.getElementById('btnDireita').addEventListener('click', () => {
    document.getElementById('lista-episodios').scrollLeft += 230;
});

document.getElementById('btnEsquerda').addEventListener('click', () => {
    document.getElementById('lista-episodios').scrollLeft -= 230;
});
