const getEpisode = (cache, char) => {
    let url = char.episode[0];
    if ( url in cache ) return cache[url]
    else return Promise.resolve("")
}

export {getEpisode}