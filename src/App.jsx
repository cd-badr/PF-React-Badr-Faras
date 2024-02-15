import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { Header } from './layouts/header';
import { Footerr } from './layouts/footer';
import { About } from './pages/About/about';
import { Contact } from './pages/Contact/contact';
import { Shop } from './pages/Shop/shop';
import { MyProvider } from './utils/contextProvider';

function App() {
  return (
    <MyProvider>

      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />

      </Routes>

      <Footerr />
    </MyProvider>
  );
}
export default App;
