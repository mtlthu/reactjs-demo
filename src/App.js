// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
// import { BrowserRouter as Routes, Route, HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/reactjs-demo" element={<Home />} />
                <Route path="/reactjs-demo/following" element={<Following />} />
            </Routes>
        </div>
        // <HashRouter>
        //     <Routes>
        //         <Route path="/reactjs-demo/" element={<Home />} />
        //         <Route path="/reactjs-demo/following" element={<Following />} />
        //     </Routes>
        // </HashRouter>
    );
}

export default App;
