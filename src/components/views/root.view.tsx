import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ServicesView } from "./services.view";
import { UsersView } from "./users.view";

function RootView() {
  const [params, setParams] = useSearchParams();

  return (
    <Tabs defaultValue={params.get("view") ?? "users"} className="w-[400px]">
      <TabsList>
        <TabsTrigger
          value="users"
          onClick={() => {
            setParams({ view: "users" });
          }}
        >
          Users
        </TabsTrigger>
        <TabsTrigger
          value="services"
          onClick={() => {
            setParams({ view: "services" });
          }}
        >
          Services
        </TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <UsersView />
      </TabsContent>
      <TabsContent value="services">
        <ServicesView />
      </TabsContent>
    </Tabs>
  );
}

export { RootView };

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
