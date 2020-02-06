let btnAdd = document.querySelector("#adicionar-tarefa");
let divTarefas = document.querySelector("#tarefas");
let inputTarefa = document.querySelector("#tarefa-digitada");
let listaTarefas = localStorage.getItem("listaTarefas") ? JSON.parse(localStorage.getItem("listaTarefas")) : [];


const salvarLocalSt = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", tarefasEmJson)
}

const mostrarNaTela = tarefas => {
    listaTarefas.forEach(txtTarefa => {
        let tarefaNova = `<div class="col-md-4">
            <div class="card-tarefa">
                <div class="texto-tarefa">
                    ${txtTarefa}
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
            listaTarefas = listaTarefas.filter(valor => valor != txtTarefa)
            salvarLocalSt(listaTarefas)


        }

        inputTarefa.value = ""
        inputTarefa.focus();
    })


}

mostrarNaTela(listaTarefas)

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

        //comando para adicionar as tarefas na lista que vai para o localStore
        listaTarefas.push(valorDigitado);
        salvarLocalSt(listaTarefas);

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
            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)
            salvarLocalSt(listaTarefas)
        }

        inputTarefa.value = ""
        inputTarefa.focus();
    }
}

//Evento para o enter funcionar
inputTarefa.addEventListener("keypress", criarTarefaEnter)
btnAdd.addEventListener("click", criarTarefaEnter)