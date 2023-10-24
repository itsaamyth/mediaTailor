import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Sidebar from "../sidebar/sidebar";
import "./channelCreateStatus.css";
import Topbar from "../topbar/topbar";
import { Link } from "react-router-dom";
const ChannelCreateStatus = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://107.109.131.23:8000/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.Result);
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
            <div className="create-channel-div col-lg-10">
            <div className="create-channel-btn-div">
            <Link to="/channelCreate">
            <button
                              type="button"
                              className="btn btn-primary create-channel-btn"
                            >
                              Create Channel +
                            </button>
            </Link>
                          </div>
              <form className="container form-div">
                <div className="card form-div-card">
                  <div className="card-body">
                    <nav className="navbar bg-body-tertiary bg-primary card-topbar">
                      <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">
                          Channel Creation Dashboard
                        </span>
                      </div>
                    </nav>
                    <div className="card-body-element">
                      <div className="col-lg-12 right-div">
                        <div>
                          <div className="header-div">
                            <h4 className="title">Channel Status</h4>
                            <div>
                              {/* <div>
                                {isLoading ? (
                                  <p>Loading...</p>
                                ) : error ? (
                                  <p>Error: {error.message}</p>
                                ) : (
                                  <div>
                                  <table className="table table-striped table-hover">
                                <thead>
                                  <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Channel Name</th>
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
                                      <th scope="row">{item.country}</th>
                                      <td>{item.channelName}</td>
                                      <td>{item.requestTime}</td>
                                      <td>{item.completionTime}</td>
                                      <td>{item.status}</td>
                                      <td>{item.userId}</td>
                                      <td><button type="button" className="btn btn-primary btn-sm">View JSON</button></td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                                  </div>
                                )}
                              </div> */}
                              <div>
                                  <div>
                                  <table className="table table-striped table-hover">
                                <thead>
                                  <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Channel Name</th>
                                    <th scope="col">Request Time</th>
                                    <th scope="col">Completion Time</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">User Id</th>
                                    <th scope="col">JSON Data</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                      <th scope="row">India</th>
                                      <td>Test Channel</td>
                                      <td>123</td>
                                      <td>456</td>
                                      <td>True</td>
                                      <td>123user</td>
                                      <td>
                                      {/* <Link to={`/viewJSON/${item.id}`}></Link> */}
                                      <Link to={`/viewJSON/1`}>
                                      <button type="button" className="btn btn-primary btn-sm">View JSON</button> </Link></td>
                                    </tr>
                                  
                                </tbody>
                              </table>
                                  </div>
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

export default ChannelCreateStatus;
