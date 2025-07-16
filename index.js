let herois = [ 
    {nome: "Caio", xp: 950},
    {nome: "Vini", xp: 3200},
    {nome: "Henrique", xp: 10500},
    {nome: "Maria", xp: 7600},
    {nome: "Th", xp: 1800},
    {nome: "Brendon", xp: 5000}
];

let randomHeroi = Math.floor(Math.random() * herois.length);

let heroi = herois[randomHeroi];

let nivel = "";

if (heroi.xp < 1000) {
    nivel = "Ferro"
}
else if (heroi.xp > 1000 && heroi.xp < 2000){
    nivel = "Bronze"
}
else if (heroi.xp > 2000 && heroi.xp < 5000) {
    nivel = "Prata"
}
else if (heroi.xp > 5000 && heroi.xp < 7000) {
    nivel = "Ouro"
}
else if (heroi.xp > 7000 && heroi.xp < 8000) {
    nivel = "Platina"
}
else if (heroi.xp > 8000 && heroi.xp < 9000) {
    nivel = "Ascendente"
}
else if (heroi.xp > 9000 && heroi.xp < 10000) {
    nivel = "Imortal"
}
else if (heroi.xp > 10000) {
    nivel = "Radiante"
}

console.log(`O Herói de nome ${heroi.nome} está no nível ${nivel}`);
