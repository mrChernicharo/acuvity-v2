"use client";
import { getUsers } from "@/api/getUsers";
import { useAppStore } from "@/lib/store";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function UsersView() {
  const limit = 4;

  const navigate = useNavigate();

  const { users, addUsers } = useAppStore();

  return (
    <div>
      <div>Users</div>

      {users.map((user) => (
        <div key={user.id}>
          <div
            onClick={() => {
              navigate(`user/${user.id}`);
            }}
          >
            {user.name}
          </div>
        </div>
      ))}

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
