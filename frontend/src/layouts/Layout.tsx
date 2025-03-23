import Header from '../components/Header'
import Search from "../components/Search.tsx";
import Footer from "../components/Footer.tsx";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
      <>
          <Header/>
          <Search/>
          <div>{children}</div>
          <Footer/>
      </>
 )
}

export default Layout