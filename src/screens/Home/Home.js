import React, { useState, useEffect } from 'react';

import Block from 'components/Block';
import { doGetRequest } from 'helpers/ApiHelper';
import {
  bitcoinProcessor,
  currencyProcessor,
  bovespaProcessor,
  googleTrendsProcessor,
} from 'helpers/ProcessorHelper';

// Componente funcional Home
const Home = () => {
  // Estado para armazenar os dados da API
  const [data, setData] = useState(null);
    console.log(data)
  // Efeito colateral para carregar os dados da API quando o componente monta
  useEffect(() => {
    // Realiza uma requisição GET para obter os dados da API
    doGetRequest('/dashboard').then(({ data }) => setData(data));
  }, []);

  // Renderização condicional com base nos dados recuperados da API
  if (data) {
    return (
      <div className="home">
        <div className="blocks">
          {/* Componente Block para exibir os dados do Google Trends */}
          <Block data={data.googletrends} label="Top 10 Google Trends" processor={googleTrendsProcessor} />
          {/* Componente Block para exibir os dados da Bovespa */}
          <Block data={data.bovespa} label="Bovespa Price" processor={bovespaProcessor} />
          {/* Componente Block para exibir os dados do Bitcoin */}
          <Block data={data.bitcoin} label="Bitcoin Price" processor={bitcoinProcessor} />
          {/* Componente Block para exibir os dados de moeda */}
          <Block data={data.currency} label="Currency" processor={currencyProcessor} />
        </div>
      </div>
    );
  }

  // Caso não haja dados, exibe uma mensagem de ausência de dados
  return <h1>No data to display</h1>;
};

// Exporta o componente Home como padrão
export default Home;
