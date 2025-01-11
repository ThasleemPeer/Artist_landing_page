import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPageView1 from './components/LandingPageView1';
import LandingPageView2 from './components/LandingPageView2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route for "/" */}
        <Route path="/" element={<Navigate to="/landing1" replace />} />
        
        {/* Other routes */}
        <Route path="/landing1" element={<LandingPageView1 />} />
        <Route path="/landing2" element={<LandingPageView2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
