function verifica1(){    
    var x = document.getElementById('numero1').value;
    try {
        if(x=='') throw 'Informe um Valor';
        if(isNaN(x)) throw 'Voce precisa informar os numeros 1,2 ou 3';
        x = Number(x);
        if(x<1 || x>3) throw 'Voce precisa informar os numero 1, 2 ou 3';        
        if(x==1) x='PEDRA';
        if(x==2) x='PAPEL';
        if(x==3) x='TESOURA'
        document.getElementById('msg1').innerHTML = 'Voce escolheu:' + x;
    } catch (error) {
        document.getElementById('msg1').innerHTML = 'Erro: ' + error;
    }
}
function verifica2(){    
    var x = document.getElementById('numero2').value;
    try {
        if(x=='') throw 'Informe um Valor';
        if(isNaN(x)) throw 'Voce precisa informar os numeros 1,2 ou 3';
        x = Number(x);
        if(x<1 || x>3) throw 'Voce precisa informar os numero 1, 2 ou 3';        
        if(x==1) x='PEDRA';
        if(x==2) x='PAPEL';
        if(x==3) x='TESOURA'
        document.getElementById('msg2').innerHTML = 'Voce escolheu:' + x;
    } catch (error) {
        document.getElementById('msg2').innerHTML = 'Erro: ' + error;
    }
}