import { sql } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

/* Create the monster: name, description, type & motivation,
then define its powers, weakness, attacks, armour, harm
capacity, optionally custom moves.
*/

const npcs = sqliteTable("npcs", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  avatar: text("avatar").default(""),
  look: text("look").notNull(),
  type: text("type").notNull(),
  motivation: text("motivation").notNull(),
  description: text("description").notNull(),
  weakness: text("weakness", { mode: "json" }),
  armor: integer("armor").notNull().default(0),
  harmCapacity: integer("harm_capacity").notNull().default(7),
  history: text("history"),
  origins: text("origins", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default(["unknown"]),
  homebrew: integer("homebrew", { mode: "boolean" }).default(true).notNull(),
  isPublic: integer("is_public", { mode: "boolean" }).default(false).notNull(),
});

// export const npcsRelations = relations(npcs, ({ many }) => ({
//   npcMoves: many(npcMoves),
//   npcPowers: many(npcPowers),
// }));

export default npcs;
