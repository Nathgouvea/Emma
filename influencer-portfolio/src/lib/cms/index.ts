import local from "./local";
import type { CmsProvider } from "./types";

export function getCms(): CmsProvider {
  // In the future, switch based on env CMS_PROVIDER
  return local;
}

export * from "./types";