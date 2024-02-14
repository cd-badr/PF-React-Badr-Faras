import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { Header } from './layouts/header';
import { Footerr } from './layouts/footer';

function App() {
  return (
    <>
    <Header />

      <Routes>

      <Route path="/" element={<HomePage />} />

      </Routes>

      <Footerr />
    </>
  );
}
export default App;
