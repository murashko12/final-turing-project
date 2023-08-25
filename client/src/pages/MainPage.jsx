import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import mpeiLogo from '../Images/mpeiLogo.png'

const MainPage = () => {
    return (
        <>
            <Box sx={{width: "100%", height: "auto"}}>
                <Typography variant="h1" gutterBottom fontWeight={400} color={"#adadad"} textAlign={"center"}>
                    IT - клуб при НИУ МЭИ
                </Typography>
                <Typography variant="h1" gutterBottom fontWeight={400} color={"#006aff"} textAlign={"center"}>
                    TURING
                </Typography>
                <Box sx={{width: "100%",display: "flex", justifyContent: "center"}}>
                    <img height={"250px"} src={mpeiLogo} alt="" />
                </Box>
                <Divider sx={{borderBottomWidth: 3,margin: "50px 0px"}} />
                <Typography variant="h3" gutterBottom fontWeight={400} color={"#006aff"} textAlign={"center"}>
                    TURING
                </Typography>
            </Box>  
        </>
    )
}

export default MainPage
