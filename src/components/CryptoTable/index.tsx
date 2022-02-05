import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { TCoin } from '../../types';

const CoinIconStyle = {
  width: 40,
  height: 40,
};

type ICryptoTable = {
  items: TCoin[];
}

const CryptoTable = ({ items }: ICryptoTable) => {
  return (
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
          {!items.length
            ? 'Загрузка...'
            : items.map((coin) => (
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
  );
};

export default CryptoTable;
