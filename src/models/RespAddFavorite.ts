import { Result } from "./RespCharacters";

export type RespAddFavorite =
    Partial<
  { character: Result } & { error: string } & {
    action: "added" | "deleted";
  }>