import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';
import { render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {
    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculadora />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Deve limpar o campo de números', () => {
        const { getByTestId, getByText} = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('Deve somar 5 + 1 e obter 6', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('6');
    });

    it('Deve subtrair 5 - 1 e obter 4', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('4');
    });

    it('Deve multiplicar 5 * 1 e obter 5', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('*'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('5');
    });

    it('Deve dividir 5 / 1 e obter 5', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('5');
    });

    it('Deve somar 5.3 + 1 e obter 6.3', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('6.3');
    });
});
