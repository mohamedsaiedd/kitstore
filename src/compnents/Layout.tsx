import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props:any) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>

    )
}
export default Layout