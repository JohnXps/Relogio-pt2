function relogio(){


    var img = document.getElementById("imagem")



    const espacoRelogio = document.querySelector(".relogio");
    
    const horaAgora = new Date();


    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();


    // const formatoHora = horas.toString().padStart(2,"0");
    // converteu hora para string
    // padStart como vai aparecer 
    const formatoMinutos = minutos.toString().padStart(2,"0");
    const formatoSegundos = segundos.toString().padStart(2,"0");


    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.
    querySelector ('.frase')

    dia = new Array ('Domingo','Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');
    // "variável" usada pra armazenar vários dados.
    // Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.


    mes = new Array ('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');

    
    
    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate() .toString().padStart(2,"0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`


    


    if (formatoHora >= 00 && formatoHora < 12 ){

        document.body.style.backgroundImage = 'url(https://preview.redd.it/8v8i9gyk9mz51.png?width=1920&format=png&auto=webp&v=enabled&s=42c6ab4e9e6f236c086a3b944d72378c1eb6fe56)'
        document.body.style.color = 'red'
        document.body.style.backgroundSize = 'cover'
        img.src = "img/img1.png"
        img.width =  650
        img.height = 500
        

        



    }

    else if (formatoHora >= 12 && formatoHora < 18){
        document.body.style.backgroundImage = 'url(https://i.redd.it/sm6wxz2c34f61.jpg)'
        document.body.style.color = 'yellow'
        document.body.style.backgroundSize = 'cover'
        img.src = "img/img2.png"
        img.width =  450
        img.height = 500

    }

    else{
        document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/44/e6/Red_Dead_Redemption_2_video_games_Arthur_Morgan_sunset_dusk-1949395.jpg!d)'
        document.body.style.color = 'blue'
        document.body.style.backgroundSize = 'cover'
        img.src = "img/img3.png"
        img.width =  150
        img.height = 350

    }



}


setInterval(relogio, 1000)
// usado para ativar um função relacionada ao tempo
// 1000 = quantidade de milisegundos




