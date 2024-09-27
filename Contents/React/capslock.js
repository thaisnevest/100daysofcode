function CapsLock(props){
    const textoInserido = props.texto // estamos acessando a propriedade texto do objeto props
    const textoEmCapsLock = textoInserido.toUpperCase() // deixa o texto inserido em caps lock
    return <div>{textoEmCapsLock}</div> // retorna o texto em caps lock
}

// function CapsLock(props){
//     return <h1>{props.texto.toUpperCase()}</h1>
// }

//props é um único parâmetro que agrega os demais e também é um objeto javascript

function Pagina(){
    return <CapsLock texto ="Me deixe em Caps Lock por favor"/>
}

//outra forma de fazer é usando o children
function CapsLock(props){
    const textoInserido = props.children // estamos acessando a propriedade texto do objeto props
    const textoEmCapsLock = textoInserido.toUpperCase() // deixa o texto inserido em caps lock
    return <div>{textoEmCapsLock}</div> // retorna o texto em caps lock
}

function Pagina(){ // o texto passa a ser um children do componente CapsLock
    return <CapsLock> Me deixe em Caps Lock por favor</CapsLock>
}