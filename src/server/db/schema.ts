// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `url-shortener_${name}`);

export const shortenedUrls = createTable(
  "shortened_urls",
  {
    id: serial("id").primaryKey(),
    uuid: varchar("uuid", { length: 36 }).notNull(),
    originalUrl: varchar("original_url", { length: 2048 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    uuidIndex: index("uuid_idx").on(table.uuid),
    originalUrlIndex: index("original_url_idx").on(table.originalUrl),
    createdAtIndex: index("created_at_idx").on(table.createdAt),
    updatedAtIndex: index("updated_at_idx").on(table.updatedAt),
  }),
);
