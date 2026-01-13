

function showmenu() {
    const hamburguer = document.getElementById("menu-body");
    const hbg = document.getElementById('hamburguer');
    
    hamburguer.style.display = "inline-block";
    hbg.style.display = "none";

    
    
}

function closemenu() {
    const close = document.getElementById("menu-body");
    const burguer = document.getElementById('hamburguer')
    close.style.display = "none";
    burguer.style.display = "block";
}

    function showdropdown() {
        const dropdwon = document.getElementById('drop-cont');
        dropdwon.style.display = "block";
    }


function link_click() {
    const link = document.querySelector(".card-box");
    link.style.cursor = "pointer";
}

function link_click2() {
    const link_two = document.getElementById("b-2");
    link_two.style.cursor = "pointer";
}

function link_click3() {
    const link_three = document.getElementById("b-3");
    link_three.style.cursor = "pointer";
}

function link_click4() {
    const link_four = document.getElementById("b-4");
    link_four.style.cursor = "pointer";
}

// Apliquei este tipo de método de usar várias funções ainda que eu possa unir tudo por uma classe, pois fica mais fácil até eu começar a ir limpando o código aos poucos. quando eu estiver bem com manipulaçao de DOM, faço a refatoração do código