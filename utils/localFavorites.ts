

const toggleFavirites = (id:number) => {
   

    let favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
        console.log(favorites);
    }else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

    const existeFavorito = (id:number):boolean => {
        if(typeof window === 'undefined') return false;
        const favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

        return favorites.includes(id);
    }

    const pokemon = ():number[] => {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

export  default{
    toggleFavirites,
    existeFavorito,
    pokemon
}