import { useState, useEffect } from "react";
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/sidebar";
import { Link } from "react-router-dom";
import './mediaTailorStatus.css';
const MTStatus = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://107.109.131.23:8400/mtlist")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.Result.reverse());
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Topbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <div className="mt-download-div col-lg-10">
              <div className="mt-download-btn-div">
                <Link to="/mediaTailorDownload">
                  <button
                    type="button"
                    className="btn btn-primary mt-download-btn"
                  >
                    MT Config Download
                  </button>
                </Link>
              </div>
              <form className="container form-div">
                <div className="card form-div-card">
                  <div className="card-body">
                    <nav className="navbar bg-primary card-topbar">
                      <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">
                          Media Tailor Configuration Download
                        </span>
                      </div>
                    </nav>
                    <div className="card-body-element">
                      <div className="col-lg-12 right-div">
                        <div>
                          <div className="header-div">
                            <h4 className="title">MediaTailor Config List</h4>
                            <div>
                              <div>
                                {isLoading ? (
                                  <p>Loading...</p>
                                ) : error ? (
                                  <p>Error: {error.message}</p>
                                ) : (
                                  <div>
                                    <table className="table table-striped table-hover">
                                      <thead>
                                        <tr>
                                          <th scope="col">Job ID</th>
                                          <th scope="col">Channel Name</th>
                                          <th scope="col">Caller Ref ID</th>
                                          <th scope="col">Request Time</th>
                                          <th scope="col">Completion Time</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">User Id</th>
                                          <th scope="col">JSON Data</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {data.map((item) => (
                                          <tr key={item.id}>
                                            <td>{item.jobID}</td>
                                            <td>{item.channelName}</td>
                                            <td>{item.callerRefID}</td>
                                            <td>{item.requestTime}</td>
                                            <td>{item.completionTime}</td>
                                            <td>{item.Status}</td>
                                            <td>{item.userID}</td>
                                            <td>
                                              <Link to={`/viewConfig/${item.jobID}/${item.callerRefID}`}>
                                                <button
                                                  type="button"
                                                  className="btn btn-primary btn-sm"
                                                >
                                                  View MT Config
                                                </button>
                                              </Link>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTStatus;