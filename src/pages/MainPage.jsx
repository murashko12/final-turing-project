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
                <Divider sx={{borderBottomWidth: 3,margin: "30px 0px"}} />
                <Typography variant="h3" gutterBottom fontWeight={400} color={"#006aff"} textAlign={"center"}>
                    Разработка - это ПРОСТО
                </Typography>
                <Typography variant="h5" textAlign={"justify"}>
                    Образовательная платформа, предоставляющая возможность студентам НИУ МЭИ получить практический опыт в свере IT по направлениям: Frontend, Java и Python backend, SQL, Android. А также принять учатие в разработке реальных проектов.
                </Typography>
            </Box>  
        </>
    )
}

export default MainPage
