

const getGif = (searchTerm) =>{
    const apiKey = 'EMRSM12NKWKU'
    const url = `https://api.tenor.com/v1/search?${searchTerm}&key=${apiKey}&media_filter=minimal&limit=50`;
    return fetch(url)
    .then(response=>response.json())
    .then(jsonResponse =>{
        console.log(jsonResponse);
        const no_gifs = jsonResponse.results.length;
        const randomgif = Math.floor(Math.random() * no_gifs);
        return jsonResponse.results[randomgif].media[0].gif.url;
    })
}

const Tenor = {
    getGif: getGif
}

export default Tenor;