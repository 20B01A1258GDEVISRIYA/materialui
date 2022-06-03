import styled from "@emotion/styled";
import {Grid,List,ListItemText,Typography,Button,Stack,Container} from "@mui/material";
import {Box} from "@mui/system";
import {Colors} from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {SubscribeTf,FooterTitle} from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import React from 'react';
export default function Footer()
{
    return(
        <Box sx={{background:Colors.shaft,color:Colors.white,p:{xs:4,md:10},pt:12,pb:12,fontSize:{xs:'12px',md:'14px'}}}>
            <Grid containerspacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">about us</FooterTitle>
                    <Typography variant="caption2">write something</Typography>
                    <Box sx={{mt:4,color:Colors.dove_gray}}>
                        <FacebookIcon sx={{mr:1}}/>
                        <InstagramIcon sx={{mr:1}}/>
                        <TwitterIcon sx={{mr:1}}/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                   <FooterTitle variant="body1">information</FooterTitle>
                   <List>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">about us</Typography>
                       </ListItemText>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">order tracking</Typography>
                       </ListItemText>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">privacy &amp;Policy</Typography>
                       </ListItemText>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">terms &amp; Conditions</Typography>
                       </ListItemText>
                    </List> 
                </Grid>
                <Grid item md={6} lg={2}>
                <FooterTitle variant="body1">my account</FooterTitle>
                   <List>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">login</Typography>
                       </ListItemText>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">my cart</Typography>
                       </ListItemText>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">my account</Typography>
                       </ListItemText>
                       <ListItemText>
                           <Typography lineHeight={2} variant="caption2">wishlist</Typography>
                       </ListItemText>
                    </List> 
                </Grid>
                <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">news letter</FooterTitle>
                    <Stack>
                        <SubscribeTf color="primary" label="email address" variant="standard">
                            <Button startIcon={<SendIcon sx={{colors: Colors.white}}></SendIcon>} sx={{mt:4,mb:4}} vaariant="contaained">subscribe</Button>
                        </SubscribeTf>
                    </Stack>
                </Grid>
                </Grid>
        </Box>
    )
} 