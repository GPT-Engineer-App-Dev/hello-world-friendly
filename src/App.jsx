import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dishes from "./pages/Dishes.jsx";
import { SupabaseProvider } from "./integrations/supabase/index.js";

function App() {
  return (
    <Router>
      <SupabaseProvider>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/dishes" element={<Dishes />} />
        </Routes>
      </SupabaseProvider>
    </Router>
  );
}

export default App;