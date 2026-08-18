import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Structural from "./pages/Structural";
import Building from "./pages/Building";
import Cladding from "./pages/Cladding";
import { ThemeProvider } from "./context/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
        <ScrollToTop />

        <Routes>

          <Route path="/" element={<Home />}/>

          <Route path="/structural" element={<Structural />}/>
          
          <Route path="/building" element={<Building />} />
          
          <Route path="/cladding" element={<Cladding />}/>

        </Routes>
    </ThemeProvider>
  );
}

export default App;