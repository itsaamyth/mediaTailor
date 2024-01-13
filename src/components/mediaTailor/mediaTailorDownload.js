import React, { useState } from 'react';
import './mediaTailorDownload.css';
const MediaTailorConfigFetch = () => {
  const [channelName, setchannelName] = useState('');
  const [callerRefID, setCallerRefID] = useState('');
  const [region, setRegion] = useState('');
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState('');
  const [responseText, setResponseText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const handleButtonClick = async () => {
    const url = 'http://107.109.131.23:8400/mediatailorDownload';
    const data = {
      'Channel Name': channelName,
      'Caller Ref ID': callerRefID,
      'Region': region,
      'Token': token,
      'UserID': userID,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      setResponseText(responseData);
      setShowResponse(true);
    } else {
      setResponseText(`Request failed with status code ${response.status}`);
    }
  };
  const handleReset = () => {
    setShowResponse(false);
    setchannelName('');
    setCallerRefID('');
    setRegion('');
    setToken('');
    setUserID('');
  };
  return (
    <div className="media-tailor-config">
      <div className="top-bar">
        <h1>MediaTailor Download</h1>
      </div>
      {!showResponse ? (
        <div>
          <div className="label-container">
          <label>
              Channel Name:
              <input type="text" value={channelName} onChange={(e) => setchannelName(e.target.value)} className="input-field" />
            </label>
            <label>
              Caller Ref ID:
              <input type="text" value={callerRefID} onChange={(e) => setCallerRefID(e.target.value)} className="input-field" />
            </label>
            <label>
              Region:
              <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} className="input-field" />
            </label>
            <label>
              Token:
              <input type="text" value={token} onChange={(e) => setToken(e.target.value)} className="input-field" />
            </label>
            <label>
              UserID:
              <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} className="input-field" />
            </label>
          </div>
          <div className="button-container">
            <button onClick={handleButtonClick}>Send Request</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="header-div">
            <h4 className="title">MT Config Details</h4>
            <h5 className="subtitle">
               Previews the JSON response sent through the request
            </h5>
          </div>
          <hr />
          {responseText && (
            <div className="response-json">
              <h2>Response</h2>
              <pre>{JSON.stringify(responseText, null, 2)}</pre>
            </div>
          )}
          <hr />
          <div>
            <button
              type="button"
              className="btn btn-primary submit-btn"
              onClick={handleReset}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MediaTailorConfigFetch;