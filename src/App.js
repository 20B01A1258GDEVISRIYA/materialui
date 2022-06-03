import React,{useEffect} from 'react';
import {Button,Container,Typography,Box,Grid,Stack} from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
function App() {
  useEffect(()=>
  {
    document.title="react material-ui home"
  },[]);
  return (
    <ThemeProvider theme={theme}>
<Container maxWidth="x1" sx={{background:'#fff'}}>
      <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
    </Container>
    </ThemeProvider>
  );
}

export default App;
