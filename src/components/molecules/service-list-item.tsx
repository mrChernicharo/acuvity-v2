import { Service } from "@/utils/types";
import { LiaIndustrySolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../atoms/avatar";
import { BsChatRightText } from "react-icons/bs";

export function ServiceListItem({ service }: { service: Service & { interactionCount: number } }) {
  const navigate = useNavigate();
  return (
    <li
      key={service.id}
      className="p-2 flex flex-row gap-2 cursor-pointer hover:bg-muted"
      onClick={() => {
        navigate(`service/${service.id}`);
      }}
    >
      <Avatar src={service.imageUrl} />

      <div>
        <div className="flex flex-row items-center gap-1">
          <span>{service.id}.</span>
          <span>{service.name}</span>
        </div>

        <div className="flex flex-row items-center gap-1 text-muted-foreground">
          <LiaIndustrySolid />
          <span>{service.company}</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-1">
        <BsChatRightText />
        <span>{service.interactionCount}</span>
      </div>
    </li>
  );
}
