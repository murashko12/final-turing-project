import { Route, Routes } from 'react-router-dom'
import './App.css'

import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import Layout from './components/Layout/Layout'
import CoursesPage from './pages/CoursesPage'

function App() {

    return (
        <>
            <Layout/>
            <div style={{margin: "70px 3%"}}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/courses'} element={<CoursesPage/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
