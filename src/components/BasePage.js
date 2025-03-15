import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/BasePage.css';

// ヘッダーコンポーネント
const Header = () => (
  // <header>
  //   <h1>My Website</h1>
  // </header>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Tune-Tracker
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

// フッターコンポーネント
const Footer = () => (
  <footer>
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
);

// ベースページコンポーネント
const BasePage = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default BasePage;
