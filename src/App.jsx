import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Create from './pages/Create.jsx';
import View from './pages/View.jsx';
import Store from './store/Store.jsx';

function App() {

  return (
    <>
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='create' element={<Create />} />
            <Route path='view/:bookId' element={<View />} />
          </Routes>
        </BrowserRouter>
      </Store>

    </>
  )
}

export default App
