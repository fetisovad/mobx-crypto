import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Paper,
  TextField,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material/';

import { CryptoTable } from './components';
import { TCoin } from './types';

const inputDivStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

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
            <Paper>
              <div style={inputDivStyle}>
                <Box padding={1} width={270}>
                  <FormControl>
                    <TextField id="standard-error" label="Сумма" />
                  </FormControl>
                </Box>
                <Box padding={1}>
                  <FormControl>
                    <InputLabel>Валюта</InputLabel>
                    <Select
                      label="Валюта"
                      value={10}
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div style={inputDivStyle}>
                <Box padding={1} width={270}>
                  <FormControl>
                    <TextField id="standard-error" label="Сумма" />
                  </FormControl>
                </Box>
                <Box padding={1}>
                  <FormControl>
                    <InputLabel>Валюта</InputLabel>
                    <Select
                      label="Валюта"
                      value={10}
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <Typography component="h4" padding={1} color="black" fontSize={20} fontWeight={500}>
                77,81 Российский рубль
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
