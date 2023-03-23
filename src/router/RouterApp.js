import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Index'
import Test from '../pages/test/index'
import Test2 from '../pages/test/test2/index'

export default function RouterApp() {

    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="test" element={<Test />} />
                <Route path="test2" element={<Test2 />} />
            </Routes>
        </Router>
    );
}