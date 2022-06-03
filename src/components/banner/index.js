import React from 'react';
import {Button,Typography,useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";
import {BannerContainer,BannerContent,BannerDescription,BannerImage,BannerShopButton,BannerTitle} from "../../styles/banner";
export default function Banner()
{
   const theme=useTheme();
   const matches=useMediaQuery(theme.breakpoints.down("md"));
   return(
       <BannerContainer>
           <BannerImage src="/images/banner/banner.png"/>
           <BannerContent>
               <Typography variant="h6">Huge Collection</Typography>
               <BannerTitle variant="h2">New Bags</BannerTitle>
               <BannerDescription variant="subtitle">useful for buying bags</BannerDescription>
               <BannerShopButton color="primary">Shop now</BannerShopButton>
           </BannerContent>
       </BannerContainer>
   )
}