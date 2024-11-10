import { useParams } from "react-router-dom";

export function UserView() {
  const { id } = useParams();

  return <div>User {id}</div>;
}
