
// Criação da tabela dinamicamente usando DOM
// selecionar div
let div = document.getElementById("tabela");

div.style.marginBottom = "20px"

// criar elemento tabela

let tabela = document.createElement("table")
tabela.border = "1"

// criar elemento thead
let thead = document.createElement("thead")

// estilizar o thead

thead.className = "fundo2"

// criar elemento tr
let tr = document.createElement("tr")

// criar elemento th 
let th1 = document.createElement("th")

th1.textContent = "Fruta"

let th2 = document.createElement("th")
th2.textContent = "Preço"

let th3 = document.createElement("th")
th3.textContent = "Quantidade"

// criar elemento tbody

let tbody = document.createElement("tbody")

tbody.style.backgroundColor = "silver"
tbody.style.color= "white"

// criar elemento tr
let tr2 = document.createElement("tr")

// criar elemento td
let td1 = document.createElement("td")
td1.textContent = "Maçã"

let td2 = document.createElement("td")
td2.textContent = "R$ 5,00"
let td3 = document.createElement("td")
td3.textContent = "10"

// criar elemento tr
let tr3 = document.createElement("tr")
// criar elemento td
let td4 = document.createElement("td")
td4.textContent = "Banana"
let td5 = document.createElement("td")
td5.textContent = "R$ 3,00"
let td6 = document.createElement("td")
td6.textContent = "15"
// criar elemento tr
let tr4 = document.createElement("tr")
// criar elemento td
let td7 = document.createElement("td")
td7.textContent = "Laranja"
let td8 = document.createElement("td")
td8.textContent = "R$ 4,00"
let td9 = document.createElement("td")
td9.textContent = "12"

// adicionar a tabela na div

div.appendChild(tabela)


//adicionar o thead na tabela
tabela.appendChild(thead)
// adicionar o tr no thead
thead.appendChild(tr)
// adicionar os th no tr
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

// adicionar o tbody na tabela
tabela.appendChild(tbody)
// adicionar o tr no tbody
tbody.appendChild(tr2)
// adicionar os td no tr
tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)
// adicionar o tr no tbody
tbody.appendChild(tr3)
// adicionar os td no tr
tr3.appendChild(td4)    
tr3.appendChild(td5)
tr3.appendChild(td6)
// adicionar o tr no tbody
tbody.appendChild(tr4)
// adicionar os td no tr
tr4.appendChild(td7)
tr4.appendChild(td8)
tr4.appendChild(td9)


// criar formulario

// selecionar div
let div2 = document.getElementById("formulario");

// criar elemento form
let form = document.createElement("form")

// estilizar o form
form.style.border = "1px solid black"
form.style.borderRadius = "5px"
form.style.width = "300px"
form.style.padding = "10px"

// criar elemento label
let label1 = document.createElement("label")
label1.textContent = "Nome da Fruta: "

// criar elemento input
let input1 = document.createElement("input")
input1.type = "text"
input1.name = "nome"
input1.id = "nome"
input1.required = true

// criar elemento label
let label2 = document.createElement("label")
label2.textContent = "Preço: "
// criar elemento input
let input2 = document.createElement("input")
input2.type = "number"
input2.name = "preco"
input2.id = "preco"
input2.required = true

// criar elemento label
let label3 = document.createElement("label")
label3.textContent = "Quantidade: "
// criar elemento input
let input3 = document.createElement("input")
input3.type = "number"
input3.name = "quantidade"
input3.id = "quantidade"
input3.required = true

// criar elemento button
let button = document.createElement("button")
button.type = "submit"
button.textContent = "Adicionar"


// adicionar o form na div
div2.appendChild(form)

// adicionar os elementos no form
form.appendChild(label1)
form.appendChild(input1)
form.appendChild(document.createElement("br"))
form.appendChild(label2)
form.appendChild(input2)
form.appendChild(document.createElement("br"))
form.appendChild(label3)
form.appendChild(input3)
form.appendChild(document.createElement("br"))
form.appendChild(button)



// criar botao para mudar cor da formulario

// selecionar div
let div3 = document.getElementById("botao");



// criar elemento button
let button2 = document.createElement("button")

button2.style.marginBottom = "10px"

button2.ondblclick = function(){
    form.style.backgroundColor = "red"
}


// adicionar texto ao button
button2.textContent = "Mudar a Cor"

//adicionar button na div
div3.appendChild(button2)
