import Layout from "./Layout.jsx";
import Home from "./Home";
import Bestellen from "./Bestellen";
import Over from "./Over";
import FAQ from "./FAQ";
import { Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
  Home: Home,
  Bestellen: Bestellen,
  Over: Over,
  FAQ: FAQ,
};

function _getCurrentPage(url) {
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }

  let urlLastPart = url.split('/').pop();

  if (urlLastPart.includes('?')) {
    urlLastPart = urlLastPart.split('?')[0];
  }

  const cleanPart = urlLastPart.replace('#', '');

  const pageName = Object.keys(PAGES).find(
    (page) => page.toLowerCase() === cleanPart.toLowerCase()
  );

  return pageName || Object.keys(PAGES)[0];
}

export default function Pages() {
  const location = useLocation();
  const currentPage = _getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Bestellen" element={<Bestellen />} />
        <Route path="/Over" element={<Over />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </Layout>
  );
}
