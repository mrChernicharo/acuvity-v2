import { Service } from "@/utils/types";
import { LiaIndustrySolid } from "react-icons/lia";
import { Avatar } from "../atoms/avatar";
import { BsChatRightText } from "react-icons/bs";
import { cn } from "@/lib/utils";

export function ServiceListItem({
  service,
  interactionCount,
  onClick,
}: {
  service: Service;
  interactionCount?: number;
  onClick?: () => void;
}) {
  return (
    <li
      key={service.id}
      className={cn("p-2 flex flex-row gap-2", onClick && "cursor-pointer hover:bg-muted")}
      onClick={onClick}
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

      {Number.isInteger(interactionCount) && (
        <div className="flex flex-row items-center gap-1">
          <BsChatRightText />
          <span>{interactionCount}</span>
        </div>
      )}
    </li>
  );
}
