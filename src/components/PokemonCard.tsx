export type PokemonType = {
    name: string;
    imgSrc?: string
}

export function PokemonCard({imgSrc, name}: PokemonType) {
    return (
        <figure>
            {imgSrc ? <img src={imgSrc} alt={name}/> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure> 
    )
    
}