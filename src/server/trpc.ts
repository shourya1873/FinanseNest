import { t } from "./t-core";
import { isAuthed } from "./isAuthed";

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = publicProcedure.use(isAuthed);
export { t };
