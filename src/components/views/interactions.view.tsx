import { getInteractions } from "@/api/getInteractions";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Interaction } from "@/utils/types";
import { SERVICES_DICT } from "@/api/data/services";
import { USERS_DICT } from "@/api/data/users";
import { UserListItem } from "../molecules/user-list-item";
import { ServiceListItem } from "../molecules/service-list-item";
import { InteractionItem } from "../molecules/interaction-item";
import { Accordion } from "../ui/accordion";

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

  const loadData = useCallback(() => {
    setOffset((prev) => prev + 1);
    const { error, payload } = getInteractions(userId, serviceId, limit, offset);
    if (error || !payload) return;
    console.log({ pageCount: payload.pageCount, offset, limit });
    setInteractions((prev) => [...prev, ...(payload.interactions || [])]);
  }, [offset, serviceId, userId]);

  if (!user || !service) return null;

  return (
    <div>
      <h1>Interactions</h1>
      <div className="flex flex-row">
        <UserListItem user={user} />
        <ServiceListItem service={service} />
      </div>

      <Accordion className="p-6 w-screen" type="multiple">
        {interactions.map((interaction, i) => (
          <InteractionItem key={`${i}`} interaction={interaction} />
        ))}
      </Accordion>
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
