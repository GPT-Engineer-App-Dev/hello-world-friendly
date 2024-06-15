import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

function App() {
  return (
    <Router>
      <SupabaseAuthProvider>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </SupabaseAuthProvider>
    </Router>
  );
}

export default App;
