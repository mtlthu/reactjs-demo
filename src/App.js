import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/reactjs-demo/" element={<Home />} />
                    <Route path="/reactjs-demo/following" element={<Following />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
