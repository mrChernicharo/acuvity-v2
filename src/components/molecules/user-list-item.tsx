import { User } from "@/utils/types";
import { BsChatRightText } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../atoms/avatar";

export function UserListItem({ user }: { user: User & { interactionCount: number } }) {
  const navigate = useNavigate();
  return (
    <li
      key={user.id}
      className="p-2 flex flex-row gap-2 cursor-pointer hover:bg-muted"
      onClick={() => {
        navigate(`user/${user.id}`);
      }}
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

      <div className="flex flex-row items-center gap-1">
        <BsChatRightText />
        <span>{user.interactionCount}</span>
      </div>
    </li>
  );
}
