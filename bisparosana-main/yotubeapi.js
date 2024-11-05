const apiKey = 'AIzaSyBnxDYNv7Vc4TocqjD3SMb11KRVUATUtTY'; // Substitua pela sua chave da API
const channelId = "UCdszsP0d2--zXZMagefdrzA"; // ID do canal da Bispa Rosana

// Se você quiser usar a API para buscar vídeos, pode manter essa função
async function fetchRecentVideos() {
    const recentVideosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=5&key=${apiKey}`;

    try {
        const response = await fetch(recentVideosUrl);
        if (!response.ok) {
            throw new Error(`Erro ao buscar vídeos recentes: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const videosContainer = document.getElementById('videos');
            videosContainer.innerHTML = ''; // Limpa o conteúdo antes de exibir os novos vídeos

            data.items.forEach(video => {
                const videoId = video.id.videoId;
                const videoTitle = video.snippet.title;

                // Criar iframe para cada vídeo
                const videoElement = document.createElement('iframe');
                videoElement.src = `https://www.youtube.com/embed/${videoId}`;
                videoElement.width = '320';
                videoElement.height = '180';
                videoElement.setAttribute('allowfullscreen', true);

                // Criar título para cada vídeo
                const titleElement = document.createElement('h3');
                titleElement.textContent = videoTitle;

                // Adicionar o título e o iframe ao container de vídeos
                videosContainer.appendChild(titleElement);
                videosContainer.appendChild(videoElement);
            });
        } else {
            console.log('Nenhum vídeo recente encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar vídeos recentes:', error);
    }
}

// Chamar a função para buscar vídeos recentes quando a página carregar
window.onload = fetchRecentVideos;
