import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import db from "@/services/db";
import { getAccountsByUserId } from "@/services/db/accounts";
import type { Account } from "@/types/Account";

export default function Grid() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    useEffect(() => {
        getAccounts();
    }, []);

    const getAccounts = async () => {
        const accountsResp = await getAccountsByUserId("1");
        setAccounts(accountsResp);
    };

    return (
        <Box
            marginTop="2"
            padding={2}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
        >
            {accounts.map((item, index) => (
                <Box
                    key={index}
                    borderColor="gray.400"
                    borderWidth={1}
                    padding={2}
                    borderRadius="md"
                    width="30%" // Ensure 3 items per row
                    marginBottom={4} // Adds space between rows
                    alignItems="center"
                >
                    <Text color="gray.700" fontSize="sm">
                        {item.accountName}
                    </Text>
                    <Text color="black" fontSize="sm" fontWeight="medium">
                        {item.balance}
                    </Text>
                </Box>
            ))}
        </Box>
    );
}
