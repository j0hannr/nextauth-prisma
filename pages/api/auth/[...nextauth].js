import NextAuth from "next-auth"
import Providers from "next-auth/providers"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
// import fs from "next-auth/fs"
import fs from "fs"
// import ca from "../../../ca-certificate.crt"

// const prisma = new PrismaClient()
const { readFileSync } = require('fs');
const { join } = require('path');
// const file = readFileSync(join(__dirname, '../../../../../', 'ca-certificate.crt'), 'utf8');
// let file = readFileSync(join(__dirname, '../../../../../', 'ca-certificate.crt'), 'utf8');
let file = `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUYi+RplrJ9AyAaezSApkuKKjoucQwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjAyMmI2N2ItZTFlZi00YjQwLWE4NjUtMzY0OTAzZTBk
MTAwIFByb2plY3QgQ0EwHhcNMjEwNzI4MTEyMTI0WhcNMzEwNzI2MTEyMTI0WjA6
MTgwNgYDVQQDDC9iMDIyYjY3Yi1lMWVmLTRiNDAtYTg2NS0zNjQ5MDNlMGQxMDAg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMYTbSXq
rGzzvslOOJAFI8NJQzq19c3/OBLbEIFjsz/nVeKQM4SBjY7U7htlo3DgE604//YX
UzQ8kJY6Wemkd3jme/F1nF2P/1JqP93Vt8HEMs1P2NI8FimzeD0IblqOiQnkM7Hk
AzvZzch0CmaLE9GH/yuZikHrKh2aPC5aVHhMWQwfH4/smv6Z0HoFvCUo4GX57Df8
iPdl87urao2PeHE7Nww3Fl1lJJMDHWdRrH4nhy0YzJMV9lotxeobQ5YI7lxe9tvQ
3gUUhHo+ZKQWvpoBmVXzZF3WZ+ic5Ts3bf0RK9ESCDcWwIJJ3sWqt2NeQiO3gidU
NVuVfUD/eSL910zWhHHrIfRUalv3Lds1ETTPlWYENdpkLqQYVyi69KHR557BK+nu
5OmBn3JH0bFfvoSOS52rR0j6Sbgs706oDqkzqX5bPjeZmrJ5nRNfV0ZdfbaX+yKv
ayRcvwpAquQ/Bn5FyItFQJg6rVaRal2elhIofk5Sr0acISRgXH1cL2JFPQIDAQAB
oz8wPTAdBgNVHQ4EFgQUtfOEcg8gZfuYRFBmFz46HdNzPyMwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABVOp+lwzbto649T
vAFGnU2OOa8gGAvUxw8sxZ+GTuaMHytcAKidCcsKfXizCdhbBXhAL8tHwPYDkv4M
KFqSN+5wrsyPYS1KD05sepR5YfaJt0d4BLYHfbilAIVjxntVha2Z4OMHSwZ8Fppn
hq2qetkR9ifPlbd+007seCZZi1aO9mIUQo8gtsmNICAD2vpYPSwAv3enr9BNDDFj
7f6zLZggvyoYLiFlMwtQSs4JjTT6fPuALaV0ZNPg0csyEgGQYbm3M3EhnWpHzx++
4BRivgTrwgi9FnKuXRBk++kFOkiL1YOC2h70VEztwgt8RSMHVk5G2BtVHwG0KmAi
cJOB7Qhohe3b1cyQS3h9smG1PHIfkXxQ55OR99MYLS7zykPyOkpKr7KdDwgOpgYZ
rjssulNK+8YMykmV6fGkevv+zOZv0dRDyQY9X0t7Nkoolu+OIkO8gOkypCbPemiY
O0Ee+fz7/S2VMWSy5QS395NcW8yirJpbb2MfwFeIDb8dNVdq0A==
-----END CERTIFICATE-----`
console.log(file)
// const file = readFileSync(join(__dirname, 'ca-certificate.crt'), 'utf8');
// https://vercel.com/docs/runtimes#advanced-usage/technical-details/including-additional-files

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    /*
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: "read:user"
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
  // adapter: PrismaAdapter(prisma),
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,
  database: { 
    type: 'postgres',
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: {
      rejectUnauthorized: false,
      // ca: fs.readFileSync("./prisma/ca-certificate.crt").toString(),
      ca: file.toString(),
      // ca: fs.readFile("./ca-certificate.crt").toString(),
    }
    // synchronize: true
  },

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    // async session(session, user) { return session },
    // async jwt(token, user, account, profile, isNewUser) { return token }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // You can set the theme to 'light', 'dark' or use 'auto' to default to the
  // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
  theme: 'light',

  // Enable debug messages in the console if you are having problems
  debug: false,
})
