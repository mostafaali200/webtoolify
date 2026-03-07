import type { Metadata } from "next";
import { buildMetadata } from "./metadata";

export function noIndexMetadata(metadata: Metadata): Metadata {
  return {
    ...metadata,
    robots: {
      index: false,
      follow: false
    }
  };
}

export { buildMetadata };
