function getImageURL(name:string){
    return new URL(`../assets/products/${name}`,import.meta.url).href
}

export {getImageURL}