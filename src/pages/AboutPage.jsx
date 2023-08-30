import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import mpeiLogo from '../Images/MrTuring.png'

import MishaGasin from '../Images/MishaGasin.jpeg'
import Mesnyankin from '../Images/Mesnyankin.jpeg'
import PashaZhukov from '../Images/PashaZhukov.jpeg'
import SashaKobzev from '../Images/SashaKobzev.jpeg'
import SonyaMarchinskaya from '../Images/SonyaMarchinskaya.jpeg'
import SashaFofanov from '../Images/SashaFofanov.jpeg'
import SashaGordov from '../Images/SashaGordov.jpeg'




const AboutPage = () => {
    
      
    return (
        <>
            <Typography variant="h3" fontWeight={400} color={"#006aff"} textAlign={"center"}>
                Turing
            </Typography>

            <Divider sx={{borderBottomWidth: 3,margin: "30px 0px"}} />

            <Typography variant="h5" textAlign={"justify"} color={"#595959"} marginBottom={"40px"}>
                это студентческая организация, посвященная разработке программного обеспечения. Все желающие студенты НИУ МЭИ могут вступить к нам. 
                У нас есть опыт коммерческой разработки в разных сферах, и мы готовы поделиться им с другими.
                С каждым днем мы стремимся сделать разработки и обучения максимально приближёнными к тем, которые используют настоящие IT-компании.
                Так, если наши друзья решат пойти работать в IT-сферу, они будут начинать не с нуля и не бояться незнакомых профессиональных слов, а вместо этого понимать, что, зачем и для чего.
            </Typography>

            <Typography variant="h3" fontWeight={400} color={"#006aff"} textAlign={"center"}>Кто такой Тьюринг?</Typography>
            <Box display="flex" justifyContent="space-between">
                <Box sx={{width: "80%"}}>
                    <Typography variant="h5" fontWeight={400} color={"#595959"} textAlign={"justify"}>
                        Алан Тьюринг - создатель машины Тьюринга, математической модели, которая описывает абстрактный компьютер. Именно она положила начало серьезному развитию информатики в прошлом веке.
                    </Typography>         
                    <br />
                    <Typography variant="h5" fontWeight={400} color={"#595959"} textAlign={"justify"}>
                        Это величайший ученый разгадал принцип действия на тот момент считавшийся совершенной немецкой шифровальной машины "Энигма". 
                    </Typography>
                    <br />
                    <Typography variant="h5" fontWeight={400} color={"#595959"} textAlign={"justify"}>
                        Своим открытием он спас множество жизней союзников во время Второй Мировой войны.
                    </Typography>
                </Box>
                <Box sx={{width: "auto",display: "flex"}}>
                    <img height={"250px"} src={mpeiLogo} alt="" />
                </Box>
            </Box>
            <Divider sx={{borderBottomWidth: 3,margin: "30px 0px"}} />
            <Box>
                <Typography variant="h3" fontWeight={400} color={"#006aff"} textAlign={"center"}>Наш коллектив</Typography>
                <Box>
                    <img height={"330px"} src={MishaGasin} alt="" />
                    <img height={"330px"} src={Mesnyankin} alt="" />
                    <img height={"330px"} src={PashaZhukov} alt="" />
                    <img height={"330px"} src={SashaKobzev} alt="" />
                </Box>    
                <Box >
                    <img height={"330px"} src={SonyaMarchinskaya} alt="" />
                    <img height={"330px"} src={SashaFofanov} alt="" />
                    <img height={"330px"} src={SashaGordov} alt="" />
                </Box>
            </Box>
        </>
    )
}

export default AboutPage
