

export function PokemonCard({img, name}) {
    return (
        <figure>
            {img ? <img src={img} alt={name}/> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure> 
    )
    
}