import { getServiceData } from "@/api/getServiceData";
import { SERVICES_DICT } from "@/api/data/services";
import { useNavigate, useParams } from "react-router-dom";
import { UserListItem } from "../molecules/user-list-item";
import { Avatar } from "../atoms/avatar";
import { LiaIndustrySolid } from "react-icons/lia";

export function ServiceView() {
  const { id } = useParams();
  const service = SERVICES_DICT.get(+id!);
  const navigate = useNavigate();
  //   console.log({ id, service });

  if (!id || !service) return <div>service not found!</div>;

  const { error, payload } = getServiceData(+id);

  if (error) return <div>{error}</div>;

  const userInteractions = Object.values(payload?.interactions ?? {});

  console.log({ userInteractions, payload });

  return (
    <div className="w-screen">
      <div className="flex flex-row items-center gap-2">
        <Avatar src={service.imageUrl} />
        <div>
          <h1>{service?.name}</h1>
          <div className="flex flex-row items-center gap-1 text-muted-foreground">
            <LiaIndustrySolid />
            <span>{service.company}</span>
          </div>
        </div>
      </div>

      <ul className="w-full">
        {userInteractions.map(({ user, count }) => (
          <UserListItem
            key={user.id}
            user={user}
            interactionCount={count}
            onClick={() => {
              navigate(`/interactions?serviceId=${service.id}&userId=${user.id}`);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
