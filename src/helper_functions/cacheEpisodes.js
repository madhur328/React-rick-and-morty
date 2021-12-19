const cacheEpisodes = (chars, cache) => {
    if(!Array.isArray(chars)) return {...cache, [chars.episode[0]] : fetch(chars.episode[0]).then(res => res.json()).then(json => json.name) }
    chars.forEach(char => {
        let ep = char.episode[0]
        if(ep in cache) {
        } else {
            cache = { ...cache, [ep]: fetch(ep).then(res => res.json()).then(json => json.name) }
        }
    })
    return cache;
}

export {cacheEpisodes};