import { useState } from "react";
import "./App.css";
import { getServiceData } from "./api/getServiceData";
import { getUserData } from "./api/getUserData";
import { getInteractions } from "./api/getInteractions";

function App() {
  const [userId, setUserId] = useState(1);
  const [serviceId, setServiceId] = useState(1);

  const { error: userErr, payload: userData } = getUserData(userId);
  const { error: serviceErr, payload: serviceData } = getServiceData(serviceId);
  const { payload: interactionData } = getInteractions(userId, serviceId);

  console.log("userData", userData);
  console.log("serviceData", serviceData);
  console.log("interactionData", interactionData);

  return (
    <div>
      <label htmlFor="user">user id</label>
      <br />
      <input id="user" type="number" value={userId} onChange={(ev) => setUserId(ev.target.valueAsNumber)} />
      <br />
      <small>{userErr ? userErr : userData!.name}</small>

      <br />
      <br />

      <label htmlFor="service">service id</label>
      <br />
      <input id="service" type="number" value={serviceId} onChange={(ev) => setServiceId(ev.target.valueAsNumber)} />
      <br />
      <small>{serviceErr ? serviceErr : serviceData!.name}</small>

      <div style={{ textAlign: "left" }}>
        {/* <pre>{JSON.stringify(userData, null, 2)}</pre>
        <pre>{JSON.stringify(serviceData, null, 2)}</pre> */}
        <pre>{JSON.stringify(interactionData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
