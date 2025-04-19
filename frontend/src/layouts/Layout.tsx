import Header from '../components/Header'
import Footer from "../components/Footer.tsx";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
      <>
          <Header/>
          <div>{children}</div>
          <Footer/>
      </>
 )
}

export default Layout