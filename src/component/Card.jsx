const Card = () => {

    const cursos = ["react","javascript","css","html"]
    const resultados = cursos.map(e => e.toUpperCase())


    return(
        <div>
            {resultados.map(e => <h2>{e}</h2>)}

            
        </div>
    )
}

export default Card