import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import ResponsiveAppBar from './navBar';

function App() {
  return (
    <Button variant="contained">Hello World</Button>);
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kaz",
    };
  }

  render() {
    return (
      <div className="">
        <ThemeProvider theme={darkTheme}>
          <ResponsiveAppBar color="secondary" />
          <App color="secondary"></App>
          <button color="secondary">aaa</button>
        </ThemeProvider>
      </div>
    );
  }
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);