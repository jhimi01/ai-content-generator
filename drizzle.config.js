/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:6X3IYSkglEdN@ep-long-poetry-a56qazd8.us-east-2.aws.neon.tech/ai-content-genaretor?sslmode=require",
  },
};
