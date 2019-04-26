import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  Button,
  Toolbar,
  AppBar,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
 } from '@material-ui/core';
import theme from './theme/nuixTheme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <section>
        <h1>Buttons</h1>
        <div className="container">
          <Button color="primary" variant="contained">Primary</Button>
          <Button color="secondary" variant="contained">Secondary</Button>
          <Button disabled>disabled</Button>
        </div>
      </section>
      <section>
        <h1>AppBar</h1>
        <div className="container">
          <AppBar position="static">
            <Toolbar>
              <h6>toolbar</h6>
            </Toolbar>
          </AppBar>
        </div>
      </section>
      <section>
        <h1>Typography</h1>
        <div className="container">
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
        </div>
      </section>
      <section>
        <h1>Inputs</h1>
        <div className="container">
          <TextField id="text-name" label="Name"/>
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <FormControl>
            <InputLabel htmlFor="select">select</InputLabel>
            <Select
              value="0"
              inputProps={{
                name: 'age',
                id: 'select',
              }}
            >
              <MenuItem value={0}>Five</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="select">disabled</InputLabel>
            <Select
              value="0"
              inputProps={{
                name: 'age',
                id: 'select',
              }}
              disabled
            >
              <MenuItem value={0}>Five</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
    </MuiThemeProvider>
  );
}

export default App;
