import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <section style={{ height: "fit-content", minHeight: "75vh" }}>
        {props.children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;
