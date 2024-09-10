import * as schema from "@/db/schema";
import db from "@/services/db";
import { eq } from "drizzle-orm";

export async function createUser(name: string, email: string) {
    const existingUser = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.email, email))
        .limit(1);

    if (existingUser.length > 0) {
        return existingUser[0].id;
    }

    const newUserId = String(Date.now());

    await db.insert(schema.users).values({
        id: newUserId,
        name,
        email,
    });

    return newUserId;
}
