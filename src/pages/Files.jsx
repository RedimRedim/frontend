import Navbar from "../components/Navbar";
import FilesTable from "../components/FilesTable";

function Files() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="navbar-content">
            <Navbar />
          </div>
          <main className="main-content">
            <h3>Files</h3>
            <FilesTable />
          </main>
        </div>
      </div>
    </>
  );
}

export default Files;
