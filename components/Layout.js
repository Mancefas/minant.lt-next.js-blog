import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <section style={{ height: "fit-content", minHeight: "75vh" }}>
        {props.children}
      </section>
    </>
  );
};

export default Layout;
