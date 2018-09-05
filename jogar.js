function getRandom(max) {
    max = 3;
    return Math.floor(Math.random() * max + 1)
}
function jogar(){
    var x = document.getElementById('numero1').value;
    var y = document.getElementById('numero2').value;

    x = Number(x);
    y = Number(y);   
   
    
    switch(x){
        case 1:
        if(y==3) alert('Jogador 1 GANHOU!');         
        if(y==1) alert ('EMPATE!');
        if(y==2) alert('Jogador 2 GANHOU!');
        break;

        case 2:
        if(y==1) alert('Jogador 1 GANHOU!');
        if(y==2) alert ('EMPATE!');
        if(y==3) alert('Jogador 2 GANHOU!');
        break;

        case 3:
        if(y==2) alert('Jogador 1 GANHOU!');
        if(y==3) alert ('EMPATE!');
        if(y==1) alert('Jogador 2 GANHOU!');
        break;

    }
}
function jogarm(){
    var x = document.getElementById('numero1').value;
    var y = getRandom(4);

    x = Number(x);
    y = Number(y);
    console.log(y);
    
    switch(x){
        case 1:
        if(y==3) alert('GANHOU!');         
        if(y==1) alert ('EMPATE!');
        if(y==2) alert('PERDEU!');
        break;

        case 2:
        if(y==1) alert('GANHOU!');
        if(y==2) alert ('EMPATE!');
        if(y==3) alert('PERDEU!');
        break;

        case 3:
        if(y==2) alert('GANHOU!');
        if(y==3) alert ('EMPATE!');
        if(y==1) alert('PERDEU!!');
        break;

    }
}