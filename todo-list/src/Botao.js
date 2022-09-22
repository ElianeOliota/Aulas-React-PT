function Botao() {
    // var onClickHandler = function() {   // podes usar "let" em vez de "var"
    //     alert("Alguém clicou no botão!");
    // }
    // return (
    //     <button onClick={onClickHandler}>Click me</button>
    // );
    return (
        <button onClick={
            () => 

                alert("Alguém clicou no botão!")
              

        }>Click me</button>
    );
}

export default Botao;