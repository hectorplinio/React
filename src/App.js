import React from "react"

function App() {
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }
    const interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date();

        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora =  zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

        // Exibe na tela usando a div#data-hora
        document.getElementById('data-hora').innerHTML = dataHora;
    }, 1000);
    return (<div>
        <h1>App prueba webpack Hector</h1>
        <h3>Date : {new Date().toDateString()}</h3>
        <h3>Time : {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</h3>
        <h3>Time actulized :<div id="data-hora"></div></h3>
        
    </div>)
}

export default App