

function App() {
    const [palavra, setPalavra] = React.useState('')
    const [frases, setFrases] = React.useState([])

    // const RetornaTbody = (props) => {
    //     props.frases.map((item, index) => {
    //       return (<tr>
    //         <td key={index}>{item.palavra}</td>
    //         <td data-verificado={item.resposta == 'sim' ? 'positivo' : 'negativo'} key={index}>{item.resposta}</td>
    //       </tr>
    //       )
    //     }
    //     )
    //   }

    const handleLimpaHist = () => {
        setFrases([])
    }

    const ValidaPalindromo = (txt) => {
        var lcRetorno = 'não'
        var char = ""
        txt = txt.replace(/ /g, "").toLowerCase();
        // inverte compara
        for (let lnx = 0; lnx < txt.length; lnx++) {
            char = char + txt.substring((txt.length - lnx) - 1, txt.length - lnx)
        }

        if (char == txt) {
            lcRetorno = 'sim'
        }

        return lcRetorno
    }

    function verificaEnter(e) {
        if (e.keyCode == 13) {

            if (palavra.trim() !== '') {

                const lobjapalindromo = {
                    palavra: palavra,
                    resposta: ValidaPalindromo(palavra)
                }

                const newFrase = frases.concat(lobjapalindromo);
                setFrases(newFrase);
                setPalavra('')
            } else {
                setPalavra('')
            }
        }

    }
    return (
        <div>
            <div>
                <h1>Verificador de Palindromo</h1>
                <input data-test="entrada" onKeyDown={e => verificaEnter(e)} value={palavra} onChange={event =>
                    setPalavra(event.target.value)} placeholder='Palíndromo' type="text" name="inpttexto" id="inpttexto" />
                <button data-test="limpar-dados" onClick={handleLimpaHist}>Apagar Historico</button>
            </div>
            <div>
                {/* tabela */}
                <table>
                    <thead>
                        <th>
                            <td>FRASE</td>
                            <td>PALINDROMO</td>
                        </th>

                    </thead>
                    <tbody>
                        {/* <RetornaTbody frases={frases} /> */}
                        {
                            frases.map((item, index) => {
                                return (
                                    <tr>
                                        <td key={index}>{item.palavra}</td>
                                        <td data-verificado={item.resposta == 'sim' ? 'positivo' : 'negativo'} key={index}>{item.resposta}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>


    )
}






ReactDOM.render(<App />, document.querySelector("#root"));
