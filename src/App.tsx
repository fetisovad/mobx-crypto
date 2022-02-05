import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
} from '@mui/material/';

import { CryptoTable, ConverterBlock } from './components';
import { TCoin } from './types';

function App() {
  const [allCoins, setAllCoins] = useState<TCoin[]>([]);

  useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        setAllCoins(coins);
      });
  }, []);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={3} padding={10}>
          <Grid item xs={8} textAlign="center" color="secondary">
            <CryptoTable items={allCoins} />
          </Grid>
          <Grid item xs={4} textAlign="center" padding={2} color="secondary">
            <ConverterBlock  />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
