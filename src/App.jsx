import { Footer } from "./Footer"
function App() {
    const name = "Manuel Fernández Marquez"
    return(
        <div>
            <h3>Lista de hobbies de {name}</h3>
            <ul>
                <li>Jugar Videojuegos</li>
                <li>Escuchar Música</li>
                <li>Cocinar</li>
            </ul>
            <hr />
            <Footer />
        </div>
    )

}

export default App
