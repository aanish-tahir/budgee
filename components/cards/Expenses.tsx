import { Text, Box, VStack } from "native-base";
import React, { useMemo } from "react";
import { currencyFormat } from "@/utils";

export default function ExpensesCard() {
    const expensesData = [
        { category: "Food & Drink", spent: 3065 },
        { category: "Entertainment", spent: 875 },
        { category: "Fuel & Maintenance", spent: 500 },
    ];

    const sortedExpenses = useMemo(() => {
        return [...expensesData].sort((a, b) => b.spent - a.spent);
    }, [expensesData]);

    return (
        <Box
            width="100%"
            bg="white"
            shadow={2}
            borderRadius="md"
            paddingX={3}
            paddingY={2}
        >
            <Text color="gray.700" fontSize="md">
                Your Monthly Expense
            </Text>
            <Text color="black" fontSize="sm" fontWeight="bold">
                PKR 137,361
            </Text>
            <VStack marginTop={2} space={2}>
                {sortedExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.category}
                        category={expense.category}
                        spent={expense.spent}
                    />
                ))}
            </VStack>
        </Box>
    );
}

function ExpenseItem({ category, spent }: { category: string; spent: number }) {
    return (
        <Box>
            <Text color="gray.700" fontSize="xs">
                {category}
            </Text>
            <Text color="black" fontSize="xs" fontWeight="medium">
                {currencyFormat(spent)}
            </Text>
        </Box>
    );
}
