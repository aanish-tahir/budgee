import * as schema from "@/db/schema";
import db from "@/services/db";
import { eq } from "drizzle-orm";

export async function createAccount(
    userId: string,
    accountName: string,
    accountType: string
) {
    const existingAccount = await db
        .select()
        .from(schema.accounts)
        .where(eq(schema.accounts.userId, userId))
        .where(eq(schema.accounts.accountName, accountName))
        .limit(1);

    // If the account already exists, return the account ID
    if (existingAccount.length > 0) {
        return existingAccount[0].id;
    }

    // Generate a new unique ID for the account (you can replace this with your actual ID generation logic)
    const newAccountId = String(Date.now());

    // Insert the new account into the database
    await db.insert(schema.accounts).values({
        id: newAccountId,
        userId,
        accountName,
        accountType,
        balance: 0, // Default balance to 0
        createdAt: new Date().toISOString(),
    });

    // Return the ID of the newly created account
    return newAccountId;
}

export async function getAccountsByUserId(userId: string) {
    const accounts = await db
        .select()
        .from(schema.accounts)
        .where(eq(schema.accounts.userId, userId));
    return accounts;
}
