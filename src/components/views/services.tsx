import { getServices } from "@/api/getServices";
import { useAppStore } from "@/lib/store";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../atoms/avatar";
import { LiaIndustrySolid } from "react-icons/lia";

export function ServicesView() {
  const limit = 4;

  const navigate = useNavigate();

  const { services, addServices } = useAppStore();

  return (
    <div className="p-6">
      <div className="py-6 text-4xl font-bold">Services</div>

      <ul>
        {services.map((service) => (
          <li
            key={service.id}
            className="p-2 flex flex-row gap-2 cursor-pointer hover:bg-muted"
            onClick={() => {
              navigate(`service/${service.id}`);
            }}
          >
            <Avatar src={service.imageUrl} />

            <div className="">
              <div className="flex flex-row items-center gap-1">
                <span>{service.id}.</span>
                <span>{service.name}</span>
              </div>

              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <LiaIndustrySolid />
                <span>{service.company}</span>
              </div>
            </div>
          </li>
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
