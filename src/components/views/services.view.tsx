import { getServices } from "@/api/getServices";
import { useAppStore } from "@/lib/store";
import { ServiceListItem } from "../molecules/service-list-item";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const limit = 4;
export function ServicesView() {
  const navigate = useNavigate();
  const { services, addServices } = useAppStore();

  return (
    <div className="p-6 w-screen">
      <div className="py-6 text-4xl font-bold">Services</div>

      <ul className="w-full">
        {services.map((service) => (
          <ServiceListItem
            key={service.id}
            service={service}
            onClick={() => {
              navigate(`service/${service.id}`);
            }}
          />
        ))}
      </ul>

      <Button
        onClick={() => {
          const offset = Math.round(services.length / limit);
          const newServices = getServices(limit, offset);
          addServices(newServices);
        }}
      >
        more
      </Button>
    </div>
  );
}
