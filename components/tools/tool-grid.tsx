import type { ToolDefinition } from "@/types";
import { ToolCard } from "./tool-card";

type ToolGridProps = {
  tools: ToolDefinition[];
};

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}