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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material/';

const inputDivStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const CoinIconStyle = {
  width: 40,
  height: 40,
};

type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">volume24hour</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCoins.map((coin) => (
                    <TableRow
                      key={coin.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">
                        <img style={CoinIconStyle} src={coin.imageUrl} alt="Coin icon" />
                      </TableCell>
                      <TableCell align="left">{coin.name}</TableCell>
                      <TableCell align="left">{coin.fullName}</TableCell>
                      <TableCell align="left">$ {coin.price}</TableCell>
                      <TableCell align="left">$ {coin.volume24Hour}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
