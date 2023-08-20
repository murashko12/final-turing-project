import { Route, Routes } from 'react-router-dom'
import './App.css'

import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import Layout from './components/Layout/Layout'

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
