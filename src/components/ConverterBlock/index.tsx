import React from 'react';
import { observer, inject } from 'mobx-react';
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import CurrenciesStore from '../../stores/currenciesStore';

type IConverterBlock = {
  currenciesStore?: CurrenciesStore;
};

const inputDivStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
  observer(({ currenciesStore }: IConverterBlock) => {
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);

    return (
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
                value={coins[0]}
                // onChange={handleChange}
              >
                {coins.map((name) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
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
              <InputLabel color="primary">Валюта</InputLabel>
              <Select
                label="Валюта"
                value={coins[1]}
                // onChange={handleChange}
              >
                {coins.map((name) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <Typography component="h4" padding={1} color="black" fontSize={20} fontWeight={500}>
          77,81 Российский рубль
        </Typography>
      </Paper>
    );
  })
);

export default ConverterBlock;
