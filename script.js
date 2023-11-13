var prevScrollPos = window.pageYOffset;
var header = document.getElementById("cabeçalho");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }
    
    prevScrollPos = currentScrollPos;
}



const animais = document.getElementById('animais');
const myPopup1 = new Popup({
    id: "my-popup",
    title: "My First Popup 1",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

animais.addEventListener('click', () => {
    myPopup1.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const poluicao = document.getElementById('poluicao');
const myPopup2 = new Popup({
    id: "my-popup",
    title: "My First Popup 2",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

poluicao.addEventListener('click', () => {
    myPopup2.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const residuos = document.getElementById('residuos');
const myPopup3 = new Popup({
    id: "my-popup",
    title: "My First Popup 3",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

residuos.addEventListener('click', () => {
    myPopup3.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const contaminacao = document.getElementById('contaminacao');
const myPopup4 = new Popup({
    id: "my-popup",
    title: "My First Popup 4",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

contaminacao.addEventListener('click', () => {
    myPopup4.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const doar = document.getElementById('doar');
const myPopup5 = new Popup({
    id: "my-popup",
    title: "My First Popup 5",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

doar.addEventListener('click', () => {
    myPopup5.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const Reflorestamento = document.getElementById('Reflorestamento');
const myPopup6 = new Popup({
    id: "my-popup",
    title: "My First Popup 6",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

Reflorestamento.addEventListener('click', () => {
    myPopup6.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const reuso = document.getElementById('reuso');
const myPopup7 = new Popup({
    id: "my-popup",
    title: "My First Popup 7",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

reuso.addEventListener('click', () => {
    myPopup7.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const descarte = document.getElementById('descarte');
const myPopup8 = new Popup({
    id: "my-popup",
    title: "My First Popup 8",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

descarte.addEventListener('click', () => {
    myPopup8.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const campanhas = document.getElementById('campanhas');
const myPopup9 = new Popup({
    id: "my-popup",
    title: "My First Popup 9",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

campanhas.addEventListener('click', () => {
    myPopup9.show();
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const energia = document.getElementById('energia');
const myPopup = new Popup({
    id: "my-popup",
    title: "My First Popup 10",
    content: `
        An example popup.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat et quibusdam placeat, aliquam, libero rem necessitatibus quidem repudiandae, eius tempora voluptatum iusto mollitia amet repellat? Reiciendis cum officia in.`,
});

energia.addEventListener('click', () => {
    myPopup.show();
});

$(window).on('scroll',function() {
    if (window.scrollY > window.outerHeight) {
      $('#nos').addClass('active')
    } else {
      $('#nos').removeClass('active')
    }
  })
  
  $('#nos').on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  })


