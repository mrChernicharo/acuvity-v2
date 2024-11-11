import { SERVICES_DICT } from "@/api/data/services";
import { USERS_DICT } from "@/api/data/users";
import { dateIntl } from "@/utils/helperFns";
import { Interaction } from "@/utils/types";
import { Avatar } from "../atoms/avatar";
import { MdSubject } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbMessage2Question } from "react-icons/tb";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function InteractionItem({ interaction }: { interaction: Interaction }) {
  const { prompts, userId, serviceId, confidence, subject } = interaction;
  const service = SERVICES_DICT.get(serviceId);
  const user = USERS_DICT.get(userId);

  if (!user || !service) return null;

  return (
    <AccordionItem value={String(interaction.id)}>
      <AccordionTrigger>
        <div className="text-lg">
          <div className="flex flex-row items-center gap-1">
            <TbMessage2Question />
            {prompts.length} {prompts.length == 1 ? "prompt" : "prompts"}
          </div>
          <div className="flex flex-row items-center gap-1">
            <MdSubject /> subject {subject}
          </div>
          <div className="flex flex-row items-center gap-1">
            <VscWorkspaceTrusted /> trust {confidence.toFixed(2)}
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <ol className="w-full">
          {prompts.map(({ input, output, timestamp }) => (
            <li key={timestamp} className="relative">
              <div className="text-muted-foreground p-2">
                <div className="w-8 float-left">
                  <Avatar src={user.imageUrl} size={24} />
                </div>

                <span> {dateIntl.format(timestamp)}</span>
                <br />
                <span className="">
                  {input.split("\n").map((st) => (
                    <span>{st}</span>
                  ))}
                </span>
              </div>

              <div className="text-foreground p-2">
                <div className="w-8 float-left">
                  <Avatar src={service.imageUrl} size={24} />
                </div>
                <span className="">
                  {output.split("\n").map((st) => (
                    <span>{st}</span>
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </AccordionContent>
    </AccordionItem>
  );
}
