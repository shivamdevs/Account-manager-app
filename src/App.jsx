import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Notfound from './components/Notfound';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app-body">
                    <Routes>
                        <Route path="/login" element={<Auth />} />
                        <Route path="/register" element={<Auth />} />
                        <Route path="/recover" element={<Auth />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/" element={<Welcome />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


function Auth(props) {
    return (<></>);
}