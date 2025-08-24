let indiceAtual = 0;
const imgElemento = document.getElementById('carousel-images');
const btnAnterior = document.getElementById('prev');
const btnProximo = document.getElementById('next');

function mostrarImagem(indice) {
  imgElemento.src = imagens[indice];
}

btnAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indiceAtual);
});

btnProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
});

mostrarImagem(indiceAtual);s










document.addEventListener("DOMContentLoaded", () =>{
   const form = document.querySelector("form");

   form.addEventListener("submit", (Event) => {
       Event.preventDefault();

       const dados = {
           nome: Document.getElementById("nome").value.trim(),
           tipo_material: Document.getElementById("tipoo-material").value,
           titulo: Document.getElementById("titulo").value.trim(),
           autor: document.getElementById("autor").value.trim(),
           motivo: Document.getElementById("motivo").value.trim(),
       };
       console.log("JSON gerado:", JSON.stringify(dados, null, 2));

       const resultado = document.getElementById( "jsonResultado");
       if (resultado) {
           resultado.textContent = JSON.stringify(dados, null, 2);
       }

       localStorage.setItem("sugestaoBiblioteca",JSON.stringify(dados));
    });
 });
