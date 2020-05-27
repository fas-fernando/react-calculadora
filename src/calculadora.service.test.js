import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
    const [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculadoraService();

    it('Deve garantir que 5 + 1 seja 6', () => {
        let soma = calcular(5, 1, SOMA);
        expect(soma).toEqual(6);
    });

    it('Deve garantir que 5 - 1 seja 4', () => {
        let subtracao = calcular(5, 1, SUBTRACAO);
        expect(subtracao).toEqual(4);
    });

    it('Deve garantir que 5 * 1 seja 5', () => {
        let multiplicacao = calcular(5, 1, MULTIPLICACAO);
        expect(multiplicacao).toEqual(5);
    });

    it('Deve garantir que 5 / 1 seja 5', () => {
        let divisao = calcular(5, 1, DIVISAO);
        expect(divisao).toEqual(5);
    });

    it('Deve retornar o valor 0 para operação inválida', () => {
        let operacaoInvalida = calcular(5, 1, '%');
        expect(operacaoInvalida).toEqual(0);
    });
});