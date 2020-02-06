let btnAdd = document.querySelector("#adicionar-tarefa");
let divTarefas = document.querySelector("#tarefas");
let inputTarefa = document.querySelector("#tarefa-digitada");
//altera estilo mouse
btnAdd.style.cursor = "pointer";

inputTarefa.focus();

const criarTarefaEnter = (event) => {

    if (event.keyCode == 13 || event.type == "click") {

        let valorDigitado = inputTarefa.value

        if (valorDigitado == "") {
            alert("Digite algo antes");
            inputTarefa.focus();
            return
        }

        let tarefaNova = `<div class="col-md-4">
            <div class="card-tarefa">
                <div class="texto-tarefa">
                    ${valorDigitado}
                </div>
                <div class="botao-tarefa">
                    <img src="img/check.png" width="32" alt="botao finalizar tarefa"
                        title="botao finalizar tarefa">
                </div>
            </div>
            </div>`

        divTarefas.insertAdjacentHTML("beforeend", tarefaNova);
        let objTarefaNova = divTarefas.lastElementChild
        let btnCheckTNova = objTarefaNova.lastElementChild.lastElementChild

        btnCheckTNova.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
        }

        inputTarefa.value = ""
        inputTarefa.focus();
    }
}

//Evento para o enter funcionar
inputTarefa.addEventListener("keypress", criarTarefaEnter)
btnAdd.addEventListener("click", criarTarefaEnter)