let btnAdd = document.querySelector("#adicionar-tarefa");
let divTarefas = document.querySelector("#tarefas");
let inputTarefa = document.querySelector("#tarefa-digitada");
let btnCheck = document.querySelector(".botao-tarefa");

btnAdd.style.cursor = "pointer";
btnCheck.style.cursor = "pointer";

inputTarefa.focus();


btnAdd.onclick = function() {
    let valorDigitado = inputTarefa.value

    let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
        ${valorDigitado}
    </div>
    <div class="botao-tarefa">
        <img src="img/check.png" width="32" alt="botao finalizar tarefa"
            title="botao finalizar tarefa" class="">
    </div>
</div>
</div>`
    divTarefas.innerHTML += tarefaNova
    inputTarefa.value = ""
    inputTarefa.focus();
}

btnCheck.onclick = function(){
    alert("Funciona")
}