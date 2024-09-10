import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";

export const expoDb = openDatabaseSync("testdb1.db");
export default drizzle(expoDb);
