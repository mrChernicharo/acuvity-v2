import { getUsers } from "@/api/getUsers";
import { useAppStore } from "@/lib/store";
import { Button } from "../ui/button";
import { UserListItem } from "../molecules/user-list-item";
import { useNavigate } from "react-router-dom";

const limit = 4;
export function UsersView() {
  const navigate = useNavigate();
  const { users, addUsers } = useAppStore();

  return (
    <div className="p-6 w-screen">
      <div className="py-6 text-4xl font-bold">Users</div>

      <ul className="w-full">
        {users.map((user) => (
          <UserListItem
            key={user.id}
            user={user}
            onClick={() => {
              navigate(`user/${user.id}`);
            }}
          />
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
