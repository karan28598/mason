import { Routes, Route } from 'react-router-dom';
import NewHireInitiationFlow from './pages/NewHireInitiationFlow';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NewHireInitiationFlow />} />
    </Routes>
  );
}
export default App;
