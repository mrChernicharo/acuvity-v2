import { getUserData } from "@/api/getUserData";
import { USERS_DICT } from "@/api/data/users";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "../atoms/avatar";
import { LiaIndustrySolid } from "react-icons/lia";
import { ServiceListItem } from "../molecules/service-list-item";

export function UserView() {
  const { id } = useParams();
  const user = USERS_DICT.get(+id!);
  const navigate = useNavigate();
  //   console.log({ id, user });

  if (!id || !user) return <div>user not found!</div>;

  const { error, payload } = getUserData(+id);

  if (error) return <div>{error}</div>;

  const userInteractions = Object.values(payload?.interactions ?? {});

  // console.log({ userInteractions, payload });

  return (
    <div className="w-screen">
      <div className="flex flex-row items-center gap-2">
        <Avatar src={user.imageUrl} />
        <div>
          <h1>{user?.name}</h1>
          <div className="flex flex-row items-center gap-1 text-muted-foreground">
            <LiaIndustrySolid />
            <span>{user.company}</span>
          </div>
        </div>
      </div>

      <ul className="w-full">
        {userInteractions.map(({ service, count }) => (
          <ServiceListItem
            key={service.id}
            service={service}
            interactionCount={count}
            onClick={() => {
              navigate(`/interactions?userId=${user.id}&serviceId=${service.id}`);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
