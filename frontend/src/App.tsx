import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import CardHolder from "./components/CardHolder.tsx";
import Register from "./pages/Register.tsx";
import Book from "./pages/Book.tsx";
import Search from "./components/Search.tsx";
import Signin from "./pages/Signin.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout><Search/><CardHolder/></Layout>}/>
          <Route path="/Select" element={<Layout><Book site="MBIT"/></Layout>}/>
          <Route path="/signin" element={<Layout><Signin/></Layout>}/>
          <Route path="/register" element={<Layout><Register/></Layout>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;
