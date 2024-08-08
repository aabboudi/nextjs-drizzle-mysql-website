import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations/",
  dialect: "sqlite",
  dbCredentials: {
    url: "./db.sqlite3",
  }
});
