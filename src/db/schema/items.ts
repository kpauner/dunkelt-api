import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const items = sqliteTable("items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  type: text("type").notNull().default("other"),
  harm: integer("harm").default(0),
  armor: integer("armor").default(0),
  value: integer("value"),
  tags: text("tags", { mode: "json" }).$type<string[]>(),
  history: text("history").default(""),
  origins: text("origins", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default(["unknown"]),
  homebrew: integer("homebrew", { mode: "boolean" }).default(true).notNull(),
  isPublic: integer("is_public", { mode: "boolean" }).default(false).notNull(),
});

export default items;
