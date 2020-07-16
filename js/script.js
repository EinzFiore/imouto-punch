// Element
const area = document.querySelectorAll('.area');
const imouto = document.querySelectorAll('.imouto');
const papanSkor = document.querySelector('.skor');


let areaSebelumnya;
let finish;
let skor;

// Membuat element area menjadi random
function randomArea(area){
    const a = Math.floor(Math.random() * area.length);
    const areaRandom = area[a];
    if(areaRandom == areaSebelumnya){
        randomArea(area);
    }
    areaSebelumnya = areaRandom;
    return areaRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min);
}


// show imouto
function showImouto(){
    const areaRandom = randomArea(area);
    const time = randomWaktu(300,1000);
    areaRandom.classList.add('muncul');

    setTimeout(() => {
        areaRandom.classList.remove('muncul');
        if(!finish){
            showImouto();
        }
    }, time);

}

// Start game
function start(){
    finish = false;
    skor = 0;
    papanSkor.textContent = 0;
    showImouto();
    setTimeout(() => {
        finish = true;
    }, 10000);
}

// ambil nilai dari pukulan
function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    papanSkor.textContent = skor;
}

imouto.forEach(i => {
    i.addEventListener('click', pukul);
});
