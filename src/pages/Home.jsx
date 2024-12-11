import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="navbar-content">
            <Navbar />
          </div>
          <main className="main-content">
            <h3>Test</h3>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
