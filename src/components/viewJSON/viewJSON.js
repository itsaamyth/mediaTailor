import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../sidebar/sidebar";
import "./viewJSON.css";
import Topbar from "../topbar/topbar";
import { Link } from "react-router-dom";
const ViewJSON = () => {
  const { id } = useParams();
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://107.109.131.23:8000/getjson`;
    const payload = { serviceID: id };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [id]);

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
                            <h4 className="title">JSON Data</h4>
                            <div>
                              <div className="mt-2">
                              {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
                                Hello JSON
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

export default ViewJSON;
