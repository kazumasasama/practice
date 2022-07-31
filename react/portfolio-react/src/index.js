import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import ResponsiveAppBar from './navBar';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Root() {
  const [myName, setMyName] = React.useState(null)

  function handleNameChange(name) {
    setMyName(name);
  }

  let name = 'kaz';
  React.useEffect(() => {
    handleNameChange(name);
  })

  return (
    <div className="">
      <ThemeProvider theme={darkTheme}>
        <ResponsiveAppBar
          color="secondary"
        />
        <p>{myName}</p>
      </ThemeProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);