import { getServices } from "@/api/getServices";
import { useAppStore } from "@/lib/store";
import { ServiceListItem } from "../molecules/service-list-item";
import { Button } from "../ui/button";

const limit = 4;
export function ServicesView() {
  const { services, addServices } = useAppStore();

  return (
    <div className="p-6 w-screen">
      <div className="py-6 text-4xl font-bold">Services</div>

      <ul className="w-full">
        {services.map((service) => (
          <ServiceListItem key={service.id} service={service} />
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
