import React from 'react';
import {
  Container,
  Grid,
} from '@mui/material/';

import { CryptoTable, ConverterBlock } from './components';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={3} padding={10}>
          <Grid item xs={8} textAlign="center" color="secondary">
            <CryptoTable/>
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
