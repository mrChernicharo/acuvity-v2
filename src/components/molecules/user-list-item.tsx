import { User } from "@/utils/types";
import { BsChatRightText } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";

import { Avatar } from "../atoms/avatar";
import { cn } from "@/lib/utils";

export function UserListItem({
  user,
  interactionCount,
  onClick,
}: {
  user: User;
  interactionCount?: number;
  onClick?: () => void;
}) {
  return (
    <li
      key={user.id}
      className={cn("p-2 flex flex-row gap-2", onClick && "cursor-pointer hover:bg-muted")}
      onClick={onClick}
    >
      <Avatar src={user.imageUrl} />

      <div>
        <div className="flex flex-row items-center gap-1">
          <span>{user.id}.</span>
          <span>{user.name}</span>
        </div>

        <div className="flex flex-row items-center gap-1 text-muted-foreground">
          <LiaIndustrySolid />
          <span>{user.company}</span>
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
