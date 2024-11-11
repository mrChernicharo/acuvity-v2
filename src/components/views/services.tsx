import { getServices } from "@/api/getServices";
import { useAppStore } from "@/lib/store";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function ServicesView() {
  const limit = 4;

  const navigate = useNavigate();

  const { services, addServices } = useAppStore();

  return (
    <div>
      <div>services</div>

      {services.map((service) => (
        <div key={service.id}>
          <div
            onClick={() => {
              navigate(`service/${service.id}`);
            }}
          >
            {service.name}
          </div>
        </div>
      ))}

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
