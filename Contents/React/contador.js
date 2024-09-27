import { useState } from 'react';

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function Pagina(){
    return <Contador/>
}


// o onClick espera uma função javascript para executar quando o botão for clicado