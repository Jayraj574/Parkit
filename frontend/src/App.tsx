import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import CardHolder from "./components/CardHolder.tsx";
import Register from "./pages/Register.tsx";
import Book from "./pages/Book.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout><CardHolder/></Layout>}/>
          <Route path="/Search" element={<Layout><p>Search Page</p></Layout>}/>
          <Route path="/register" element={<Layout><Register/></Layout>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;
