// App.js
import React, { useState } from 'react';
import InputField from './InputField';
import CalcButton from './CalcButton';

const App = () => {
  const [alcoolPrice, setAlcoolPrice] = useState('');
  const [gasolinaPrice, setGasolinaPrice] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (!alcoolPrice || !gasolinaPrice) {
      alert('Preencha ambos os valores!');
      return;
    }

    const alcool = parseFloat(alcoolPrice.replace(',', '.'));
    const gasolina = parseFloat(gasolinaPrice.replace(',', '.'));

    const ratio = alcool / gasolina;

    if (ratio < 0.7) {
      setResult('Abasteça com Álcool');
    } else {
      setResult('Abasteça com Gasolina');
    }
  };

  return (
    <div>
      <h1>Calculadora de Combustível</h1>
      <InputField label="Preço do Álcool (R$)" value={alcoolPrice} onChange={(e) => setAlcoolPrice(e.target.value)} />
      <InputField label="Preço da Gasolina (R$)" value={gasolinaPrice} onChange={(e) => setGasolinaPrice(e.target.value)} />
      <CalcButton onClick={handleCalculate} label="Calcular" />
      {result && <p>{result}</p>}
    </div>
  );
};

export default App;

