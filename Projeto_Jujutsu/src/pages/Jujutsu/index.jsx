import { useState } from "react"
import "./style.css"

// um vetor de objetos
const jujutsuList = [
    { id: 1, nome: "Yuji Itadori" },
    { id: 2, nome: "Megumi Fushiguro" },
    { id: 3, nome: "Nobara Kugisaki" },
    { id: 4, nome: "Satoru Gojo" },
    { id: 5, nome: "Yuta Okkotsu" },
    { id: 6, nome: "Maki Zenin" },
]

function Jujutsu() {
    const [jujutsuGlobal, setJujutsuGlobal] = useState(null)

    const getJujutsuData = (idJujutsu) => {

        // conexão com a api
        const uri = `https://api.jujutsukaisenapi.site/api/v1/characters/${idJujutsu}`

        fetch(uri)
            .then(res => res.json())
            .then(json => {
                const jujutsuFetch = {
                    nome: json.name,
                    idade: json.age,
                    altura: json.height,
                    imagem: json.image,
                }
                setJujutsuGlobal(jujutsuFetch)
                console.log(jujutsuFetch)
            })
            .catch(() => alert('Não foi possivel acessar os dados do personagem'))
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Lista de Personagens</h1>
            </div>

            {jujutsuGlobal && (
                <div className="jujutsu-info">
                    <h2>Nome: {jujutsuGlobal.nome}</h2>
                    <h2>idade: {jujutsuGlobal.idade}</h2>
                    <h2>altura: {jujutsuGlobal.altura}</h2>
                    <img src src={jujutsuGlobal.imagem} alt={jujutsuGlobal.nome} />
                </div>
            )}

            {jujutsuList.map((item) => (
                <div className="card" key={item.id}>
                    <p>{item.nome}</p>
                    <button onClick={() => (getJujutsuData(item.id))}>Saiba mais</button>
                </div>
            ))}
        </div>
    )
}

export default Jujutsu