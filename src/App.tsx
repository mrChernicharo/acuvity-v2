// import { useState } from "react";
// import { getServiceData } from "./api/getServiceData";
// import { getUserData } from "./api/getUserData";
// import { getInteractions } from "./api/getInteractions";

import { ThemeToggle } from "./components/molecules/theme-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  // const [userId, setUserId] = useState(1);
  // const [serviceId, setServiceId] = useState(1);
  // const [limit, setLimit] = useState(3);

  // const { error: userErr, payload: userData } = getUserData(userId);
  // const { error: serviceErr, payload: serviceData } = getServiceData(serviceId);
  // const { payload: interactionData } = getInteractions(userId, serviceId, limit);

  // console.log("userData", userData);
  // console.log("serviceData", serviceData);
  // console.log("interactionData", interactionData);

  // return (
  //   <div>
  //     <label htmlFor="user">user id</label>
  //     <br />
  //     <input id="user" type="number" value={userId} onChange={(ev) => setUserId(ev.target.valueAsNumber)} />
  //     <br />
  //     <small>{userErr ? userErr : userData!.name}</small>
  //     <br />
  //     <br />
  //     <label htmlFor="service">service id</label>
  //     <br />
  //     <input id="service" type="number" value={serviceId} onChange={(ev) => setServiceId(ev.target.valueAsNumber)} />
  //     <br />
  //     <small>{serviceErr ? serviceErr : serviceData!.name}</small>
  //     <br />
  //     <br />
  //     <label htmlFor="limit">Limit</label>
  //     <br />
  //     <input id="limit" type="number" value={limit} onChange={(ev) => setLimit(ev.target.valueAsNumber)} />
  //     <br />
  //     <br />
  //     page count: {interactionData?.pageCount}
  //     <div style={{ textAlign: "left", maxWidth: window.innerWidth, overflowX: "auto" }}>
  //       {/*
  //       <pre>{JSON.stringify(userData, null, 2)}</pre>
  //       <pre>{JSON.stringify(serviceData, null, 2)}</pre>
  //       */}
  //       <pre>{JSON.stringify(interactionData, null, 2)}</pre>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-background text-foreground">
      <ThemeToggle />

      <Tabs defaultValue="users" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>
        <TabsContent value="users">Make changes to your account here.</TabsContent>
        <TabsContent value="services">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
