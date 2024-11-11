import { getServiceData } from "@/api/getServiceData";
import { SERVICES_DICT } from "@/api/data/services";
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      <div>service {id}</div>
      <div>{service?.name}</div>

      {userInteractions.map(({ user, count }) => (
        <div
          id={String(user.id)}
          key={user.id}
          onClick={() => {
            navigate(`/interactions?serviceId=${service.id}&userId=${user.id}`);
          }}
        >
          {user.name} {count}
        </div>
      ))}
    </div>
  );
}
