import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChannelCreate from './components/channelCreate/channelCreate';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChannelCreate/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
