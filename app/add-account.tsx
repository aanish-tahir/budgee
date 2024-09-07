import { Box, Text, VStack, FormControl, Input, Button, Alert } from "native-base";
import { useState } from "react";
import RowRadioButton from "@/components/RowRadioButtons";

const accountTypeOptions = [
    {
        id: "bankAccount",
        label: "Bank Account",
        value: "bankAccount"
    },
    {
        id: "person",
        label: "Person",
        value: "person"
    }
];

export default function AddAccount() {
    const [accountType, setAccountType] = useState("bankAccount");
    const [accountName, setAccountName] = useState("");
    const [openBalance, setOpenBalance] = useState("0");
    const [balanceType, setBalanceType] = useState("positive");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!accountName.trim()) {
            setError("Account name cannot be empty.");
            return;
        }
        setError("");
        console.log("Form submitted:", { accountType, accountName, openBalance, balanceType });
    };

    return (
        <VStack flex={1} space={4} padding={4}>
            <RowRadioButton options={accountTypeOptions} selectedId={accountType} setSelectedId={setAccountType} />

            <VStack space={2}>
                <FormControl isRequired isInvalid={!!error}>
                    <FormControl.Label>Account Name</FormControl.Label>
                    <Input
                        value={accountName}
                        onChangeText={setAccountName}
                        placeholder="Enter account name"
                    />
                    {error ? (
                        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl>
                    <FormControl.Label>Open Balance</FormControl.Label>
                    <Input
                        value={openBalance}
                        onChangeText={setOpenBalance}
                        placeholder="Enter open balance"
                        keyboardType="numeric"
                    />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Balance Type</FormControl.Label>
                    <RowRadioButton options={[
                        {id: "positive", label:"Positive", value:"positive"},
                        {id: "negative", label:"Negative", value:"negative"}
                    ]} selectedId={balanceType} setSelectedId={setBalanceType} />
                </FormControl>
            </VStack>
            <Button onPress={handleSubmit} textAlign="center">Add Account</Button>
        </VStack>
    );
}
