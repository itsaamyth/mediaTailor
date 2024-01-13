import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import "./viewConfig.css";
import Topbar from "../topbar/topbar";
import { Link } from "react-router-dom";
const ViewConfig = () => {
  const { jobID,callerRefID } = useParams();
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://107.109.131.23:8400/getmtconfig`;
    const payload = { jobID: jobID, CallerRefID:callerRefID };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data.response);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [jobID, callerRefID]);

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
                            <h4 className="title">MT Data</h4>
                            <div>
                              <div className="mt-2">
                              <pre>{JSON.stringify(jsonData, null, 2)}</pre>
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

export default ViewConfig;