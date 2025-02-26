import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google";
import type {NextAuthConfig} from "next-auth";

export default {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })
    ],
    callbacks: {
        session: async ({session, user}) => {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
} satisfies NextAuthConfig;
