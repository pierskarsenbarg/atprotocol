import { createSubjects } from "@openauthjs/openauth/subject"
import { object, string, optional } from "valibot"

export const subjects = createSubjects({
    user: object({
        userID: string(),
        workspaceID: string()
    })
})