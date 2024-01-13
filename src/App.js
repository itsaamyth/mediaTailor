import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MTStatus from './components/mediaTailorStatus/mediaTailorStatus';
import ViewConfig from './components/viewConfig/viewConfig';
import MediaTailorConfigFetch from './components/mediaTailor/mediaTailorDownload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/viewConfig/:jobID/:callerRefID' element={<ViewConfig/>}></Route>
      </Routes>
      <Routes>
        <Route path='/mediaTailorDownload' element={<MediaTailorConfigFetch/>}></Route>
      </Routes>
      <Routes>
        <Route path='/mediaTailorStatus' element={<MTStatus/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;