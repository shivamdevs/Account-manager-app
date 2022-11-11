import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Notfound from './components/Notfound';
import Auth from './components/Auth';

function App() {
    const setTitle = (...titles) => {
        document.title = titles.length ? titles.join(" • ") + " • Task Manager" : "Task Manager";
    };
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app-body">
                    <Routes>
                        <Route path="/login" element={<Auth setTitle={setTitle} />} />
                        <Route path="/register" element={<Auth setTitle={setTitle} />} />
                        <Route path="/recover" element={<Auth setTitle={setTitle} />} />
                        <Route path="/dashboard" element={<Dashboard setTitle={setTitle} />} />
                        <Route exact path="/" element={<Welcome setTitle={setTitle} />} />
                        <Route path="*" element={<Notfound setTitle={setTitle} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;