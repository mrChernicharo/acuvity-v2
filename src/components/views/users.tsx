import { getUsers } from "@/api/getUsers";
import { useAppStore } from "@/lib/store";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { LiaIndustrySolid } from "react-icons/lia";
import { Avatar } from "../atoms/avatar";
// import { GrUser } from "react-icons/gr";
/* <GrUser /> */

export function UsersView() {
  const limit = 4;

  const navigate = useNavigate();

  const { users, addUsers } = useAppStore();

  return (
    <div className="p-6">
      <div className="py-6 text-4xl font-bold">Users</div>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="p-2 flex flex-row gap-2 cursor-pointer hover:bg-muted"
            onClick={() => {
              navigate(`user/${user.id}`);
            }}
          >
            <Avatar src={user.imageUrl} />

            <div className="">
              <div className="flex flex-row items-center gap-1">
                <span>{user.id}.</span>
                <span>{user.name}</span>
              </div>

              <div className="flex flex-row items-center gap-1 text-muted-foreground">
                <LiaIndustrySolid />
                <span>{user.company}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Button
        onClick={() => {
          const offset = Math.round(users.length / limit);
          const newUsers = getUsers(limit, offset);
          addUsers(newUsers);
        }}
      >
        more
      </Button>
    </div>
  );
}
