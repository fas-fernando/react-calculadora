function CalculadoraService () {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const MULTIPLICACAO = '*';
    const DIVISAO = '/';

    function calcular (numero1, numero2, operacao) {
        let resultado;
        
        switch(operacao) {
            case SOMA:
                resultado = numero1 + numero2; 
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2; 
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2; 
                break;
            case DIVISAO:
                resultado = numero1 / numero2; 
                break;
            default:
                resultado = 0;
        }
        
        return resultado;
    }

    function concatenarNumero (numAtual, NumConcat) {
        // Caso contenha apenas '0' ou null, reinicia o valor
        if(numAtual === '0' || numAtual === null){
            numAtual = '';
        }

        // Primeiro digito for '.' concatena '0' com o ponto
        if(NumConcat === '.' && numAtual === ''){
            return '0.';
        }

        // Caso '.' digitado e já contenha um ponto, apenas retorna
        if(NumConcat === '.' && numAtual.indexOf('.') > - 1){
            return numAtual
        }

        return numAtual + NumConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO
    ];

}

export default CalculadoraService;