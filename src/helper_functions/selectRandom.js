const selectRandom = (min, max, count) => {
    let selected = []

    for(let i=0; i < count; i++) {
        let n = min + Math.floor( Math.random() * (max - min + 1) );
        
        if(!selected.includes(n)) selected.push(n);
        else {
            while(selected.includes(n)) {
                n = min + Math.floor( Math.random() * (max - min + 1) );
            }
            selected.push(n);
        }
    }
    return selected;
}

export { selectRandom };