let obrjecto = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};
let jsonString = JSON.stringify(obrjecto);
console.log(jsonString);

let objeto2 = JSON.parse(jsonString);
console.log(objeto2.nome);

let data = fetch("ex1/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })