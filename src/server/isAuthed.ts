import { TRPCError } from "@trpc/server";
import { t } from "./t-core";

export const isAuthed = t.middleware(({ ctx, next }) => {
    if (!ctx.user?.userId) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({ ctx: { user: ctx.user } });
});
