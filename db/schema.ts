import { sql } from "drizzle-orm";
import { text, integer, sqliteTable, real } from "drizzle-orm/sqlite-core";

// User table
export const users = sqliteTable("users", {
    id: text("id").primaryKey(), // Primary Key
    name: text("name").notNull(), // User's name
    email: text("email").notNull().unique(),
});

// Account table
export const accounts = sqliteTable("accounts", {
    id: text("id").primaryKey(), // Primary Key
    userId: text("user_id")
        .notNull()
        .references(() => users.id), // Foreign key referencing user
    accountType: text("account_type").notNull(), // Type of account (e.g., bank, personal)
    accountName: text("account_name").notNull(),
    balance: real("balance").notNull().default(0), // Account balance
    createdAt: text("created_at")
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`), // Timestamp for account creation
});

// Transaction table
export const transactions = sqliteTable("transactions", {
    id: text("id").primaryKey(), // Primary Key
    accountId: text("account_id")
        .notNull()
        .references(() => accounts.id), // Foreign key referencing account
    amount: real("amount").notNull(), // Transaction amount
    transactionType: text("transaction_type").notNull(), // Type of transaction (e.g., credit, debit)
    createdAt: text("created_at")
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`), // Timestamp for when transaction is made
});
