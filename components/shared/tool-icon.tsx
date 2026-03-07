import type { LucideIcon } from "lucide-react";
import { getToolIcon } from "@/lib/tool-registry";

type ToolIconProps = {
  iconKey: string;
  className?: string;
};

export function ToolIcon({ iconKey, className }: ToolIconProps) {
  const Icon: LucideIcon = getToolIcon(iconKey);
  return <Icon className={className} />;
}