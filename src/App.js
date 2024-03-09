import React, {Component} from 'react';
import {BrowserRouter, Routes} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route pate = '/' element = {<Home/>}/>
                    <Route pate = '/today' element = {<Today/>} />
                    <Route pate = '/developer' element = {<Developer/>} />
                    <Route pate = '/webd' element = {<Webd/>} />
                    <Route pate = '/webstie' element = {<Webstie/>} />
                    <Route pate = '/gsap' element = {<Gsap/>} />
                    <Route pate = '/port' element = {<Port/>} />
                    <Route pate = '/youtube' element = {<Youtube/>} />
                    <Route pate = '/channel/:channelID' element = {<Channel/>} />
                    <Route pate = '/video/:videoID' element = {<Video/>} />
                    <Route pate = '/search/:searchID' element = {<Search/>} />
                    <Route pate = '/*' element = {<Home/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;