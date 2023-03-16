import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {/* <Route exact path="/reactjs-demo" element={<Home />} />
                <Route path="/reactjs-demo/following" element={<Following />} /> */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
