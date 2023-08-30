import { Box, Button, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const NewsBlockContainer = styled(Box)({
    width: "70%",
    height: "auto",
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
    backgroundColor: "#9e9e9e",
    color: "white",
    borderRadius: "20px"
    
})


// const NewsBlock = (id, title, text) => {
const NewsBlock = () => {
    return (
        <NewsBlockContainer>
            <Box sx={{height: "180px", width: "250px", border: "1px solid black"}}>Image</Box>
            <Box sx={{height: "180px", width: "520px", display: "flex", flexDirection: "column"}}>
                <Box sx={{height: "130px", width: "100%"}}>
                    <Typography variant="h4">Заголовок</Typography>
                    <Typography>
                        TextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextText
                    </Typography>
                </Box>
                <Box>
                    <IconButton size="large">
                        <ThumbUpOffAltIcon/>
                    </IconButton>
                    <IconButton color="" size="large">
                        <ThumbDownOffAltIcon/>
                    </IconButton>
                    <IconButton size="large">
                        <ChatBubbleOutlineIcon/>
                    </IconButton>
                    <Button variant="contained" sx={{float: "right", height: "50px"}}>Читать</Button>
                </Box>
            </Box>

        </NewsBlockContainer>
    )
}

export default NewsBlock
