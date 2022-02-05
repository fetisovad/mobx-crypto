import React from 'react';
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material/';

type IConverterBlock = {};

const inputDivStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const ConverterBlock: React.FC<IConverterBlock> = () => {
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
  );
};

export default ConverterBlock;
