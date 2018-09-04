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