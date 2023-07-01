const form = document.querySelector('#form-atividade')
const imgAprovado = '<img src="/images/partying-face.png" alt="Emoji festejando">'
const imgReprovado = '<img src="/images/disappointed-face.png" alt="Emoji decepcionado">'
const arrayAtividades = []
const arrayNotas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputAtividade = document.querySelector('#atividade')
    const inputNota = document.querySelector('#nota')

    if (arrayAtividades.includes(inputAtividade.value)) {
        alert(`A atividade: ${inputAtividade.value} já foi inserida`)
    } else {
        arrayAtividades.push(inputAtividade.value)
        arrayNotas.push(parseFloat(inputNota.value))

        let linha = '<tr>'
        linha += `<td>${inputAtividade.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    
    }
    
    inputAtividade.value = ''
    inputNota.value = ''
}

function atualizaTabela() {
    const corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.querySelector('td#media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.querySelector('td#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < arrayNotas.length; i++) {
        somaDasNotas += arrayNotas[i]
    }
    return somaDasNotas / arrayNotas.length
}

