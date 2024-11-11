import { getUserData } from "@/api/getUserData";
import { USERS_DICT } from "@/api/data/users";
import { useNavigate, useParams } from "react-router-dom";
import { LazyImage } from "../atoms/lazy-img";

export function UserView() {
  const { id } = useParams();
  const user = USERS_DICT.get(+id!);
  const navigate = useNavigate();
  //   console.log({ id, user });

  if (!id || !user) return <div>user not found!</div>;

  const { error, payload } = getUserData(+id);

  if (error) return <div>{error}</div>;

  const userInteractions = Object.values(payload?.interactions ?? {});

  console.log({ userInteractions, payload });

  return (
    <div>
      <div>User {id}</div>
      <div>{user?.name}</div>

      <ul>
        {userInteractions.map(({ service, count }) => (
          <li
            id={String(service.id)}
            key={service.id}
            onClick={() => {
              navigate(`/interactions?userId=${user.id}&serviceId=${service.id}`);
            }}
          >
            <div>
              <LazyImage src={service.imageUrl} width={120} height={80} />
            </div>
            <div>{service.name}</div>
            <div>{service.release_date}</div>

            <div>{count}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
