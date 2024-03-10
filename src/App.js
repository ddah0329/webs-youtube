import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Today from "./pages/Today";
import Developer from "./pages/Developer";
import Gsap from "./pages/Gsap";
import Youtube from "./pages/Youtube";
import Webd from "./pages/Webd";
import Website from "./pages/Website";
import Not from "./pages/Not";
import Search from "./pages/Search";
import Video from "./pages/Video";
import Channel from "./pages/Channel";
import Port from "./pages/Port";
import Header from "./components/section/Header";
import Footer from "./components/section/Footer";
import Main from "./components/section/Main";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Main>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/today' element={<Today/>}/>
                        <Route path='/developer' element={<Developer/>}/>
                        <Route path='/webd' element={<Webd/>}/>
                        <Route path='/webstie' element={<Website/>}/>
                        <Route path='/gsap' element={<Gsap/>}/>
                        <Route path='/port' element={<Port/>}/>
                        <Route path='/youtube' element={<Youtube/>} />
                        <Route path='/channel/:channelID' element={<Channel/>}/>
                        <Route path='/video/:videoID' element={<Video/>}/>
                        <Route path='/search/:searchID' element={<Search/>}/>
                        <Route path='/*' element={<Not/>} />
                    </Routes>
                </Main>
                <Footer/>
            </BrowserRouter>
        );
    }
}


export default App;