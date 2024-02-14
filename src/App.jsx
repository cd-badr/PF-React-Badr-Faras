import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { Header } from './layouts/header';
import { Footerr } from './layouts/footer';
import { About } from './pages/About/about';
import { Contact } from './pages/Contact/contact';
import { Shop } from './pages/Shop/shop';

function App() {
  return (
    <>
    <Header />

      <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />

      </Routes>

      <Footerr />
    </>
  );
}
export default App;
