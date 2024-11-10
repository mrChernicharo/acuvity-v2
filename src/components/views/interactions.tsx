import { getInteractions } from "@/api/getInteractions";
import { SERVICES_DICT } from "@/data/services";
import { USERS_DICT } from "@/data/users";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Interaction } from "@/utils/types";

const limit = 2;

export function InteractionsView() {
  const [params] = useSearchParams();
  const userId = Number(params.get("userId") ?? 0);
  const serviceId = Number(params.get("serviceId") ?? 0);

  const [offset, setOffset] = useState(1);
  const [interactions, setInteractions] = useState<Interaction[]>(
    getInteractions(userId, serviceId, limit, 0).payload!.interactions
  );

  const user = USERS_DICT.get(userId);
  const service = SERVICES_DICT.get(serviceId);

  console.log({ userId, serviceId, offset });

  const loadData = useCallback(() => {
    setOffset((prev) => prev + 1);
    const { error, payload } = getInteractions(userId, serviceId, limit, offset);
    if (error || !payload) return;
    console.log({ pageCount: payload.pageCount, offset, limit });
    setInteractions((prev) => [...prev, ...(payload.interactions || [])]);
  }, [offset, serviceId, userId]);

  return (
    <div>
      <div>{user?.name}</div>
      <div>Interactions</div>

      {interactions.map((interaction) => (
        <div key={interaction.id}>
          <div>{service?.name}</div>

          <div>{interaction.timestamp}</div>
        </div>
      ))}

      <Button
        onClick={() => {
          loadData();
        }}
      >
        more
      </Button>
    </div>
  );
}
