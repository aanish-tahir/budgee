import React from "react";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { Box, Text } from "native-base";
import db from "@/services/db/index";

const DrizzleContext = ({ children }: { children: React.ReactNode }) => {
    const { success, error } = useMigrations(db, migrations);

    if (error) {
        return (
            <Box safeArea>
                <Text>Migration error: {error.message}</Text>
            </Box>
        );
    }
    if (!success) {
        return (
            <Box safeArea>
                <Text>Migration is in progress...</Text>
            </Box>
        );
    }
    return <>{children}</>;
};

export default DrizzleContext;
