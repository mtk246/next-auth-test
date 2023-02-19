import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";

require("dotenv").config()

const options = {
  site: process.env.SITE || "http://localhost:3000",

  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

function Auth(req, res) {
  return NextAuth(req, res, options)
}

export default Auth;