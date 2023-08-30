import { Box } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import NewsBlock from '../components/NewsBlock';

const NewsContainer = styled(Box)({
  width: "100%",
  height: "auto",
  // border: "1px solid black",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "50px"
})

const NewsPage = () => {

  const newsList = [
    {
      id: 1,
      title: 'Заголовок 1',
      text: 'TextNewsTextNewsTextNewsTextNewsTextNews1',
      // link: '/news1',
    },
    {
      id: 2,
      title: 'Заголовок 2',
      text: 'TextNewsTextNewsTextNewsTextNewsTextNews2',
      // link: '/about',
    },
    {
      id: 3,
      title: 'Заголовок 3',
      text: 'TextNewsTextNewsTextNewsTextNewsTextNews3',
      // link: '/courses',
    },
    {
      id: 4,
      title: 'Заголовок 4',
      text: 'TextNewsTextNewsTextNewsTextNewsTextNews4',
      // link: '/news',
    },
  ]

  return (
    <NewsContainer>
      {/* {newsList.map(({id, title, text}) => (<NewsBlock key={id} title={title} text={text}/>))} */}
      <NewsBlock/>
      <NewsBlock/>
      <NewsBlock/>
      <NewsBlock/>
    </NewsContainer>
  )
}

export default NewsPage
