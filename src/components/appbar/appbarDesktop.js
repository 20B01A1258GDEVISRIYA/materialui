import {Box,Divider,List,ListItemButton,ListItemIcon,ListItemText,StackTypography} from "@mui/material";
import {AppbarActionIcons,AppbarContainer,AppbarHeader,MyList} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavouriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import {useUIContext} from "../../context/ui";
import React from 'react';
export default function AppbarDesktop({matches})
{
    const {setShowSearchBox} =useUIContext();
    return(
        <AppbarContainer>
            <AppbarHeader variant="h4">My bags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="About us"/>
                <ListItemText primary="Contact us"/>
                <ListItemButton onClick={() => setShowSearchBox(true)}>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
                </ListItemButton>  
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
    )
}