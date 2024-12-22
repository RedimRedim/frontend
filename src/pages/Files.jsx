import Navbar from "../components/Navbar";
import FilesTable from "../components/FilesTable";
import UserInfoBar from "../components/UserInfoBar";

function Files() {
  return (
    <>
      <div className="App">
        <div className="main-container bg-light">
          <div className="navbar-content">
            <Navbar />
          </div>
          <main className="main-content  ">
            <UserInfoBar />
            <h3>Files</h3>
            <FilesTable />
          </main>
        </div>
      </div>
    </>
  );
}

export default Files;
