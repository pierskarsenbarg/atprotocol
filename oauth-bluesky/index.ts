import { issuer } from "@openauthjs/openauth";
import { GithubProvider } from "@openauthjs/openauth/provider/github";
import { subjects } from "./subjects";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory"


const app = issuer({
  providers: {
    github: GithubProvider({
      clientID: "Iv23liRIwjhle5hoJWM0",
      clientSecret: "05f428997d1064bbffee84a63bff3017c99da497",
      scopes: ["user:email"],
    }),
  },
  subjects: subjects,
  storage: MemoryStorage(),
  async success(ctx, value) {
    let userID = "notpiers";
    if (value.provider === "github") {
      console.log(value.tokenset.access)
      userID = "piers" // lookup user or create them
    }
    return ctx.subject("user", {
      userID,
      workspaceID: 'a workspace id'
    })
  }
});

export default app;