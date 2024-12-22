import Navbar from "../components/Navbar";
import UserInfoBar from "../components/UserInfoBar";
function Home() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="navbar-content">
            <Navbar />
          </div>
          <main className="main-content ">
            <UserInfoBar />
            <h3>Home</h3>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
