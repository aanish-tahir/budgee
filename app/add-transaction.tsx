import { Box, CheckIcon, HStack, Input, Select, Text, FormControl, VStack, Button } from 'native-base'
import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';

const transactionTypes = [
    "income", "expense", "transfer", "person"
]

const categories = [
    { value: '1', label: 'Groceries' },
    { value: '2', label: 'Utilities' },
    { value: '3', label: 'Entertainment' },
    { value: '4', label: 'Transportation' },
    { value: '5', label: 'Health' },
  ];

  const accounts = [
    { value: '1', label: 'Cash' },
    { value: '2', label: 'HBL' },
    { value: '3', label: 'Meezan' }
  ];


const AddTransaction = () => {
    const [selectedType, setSelectedType] = useState("income")
    const [amount, setAmount] = useState("0")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAccount, setSelectedAccount] = useState("")
    console.log(selectedCategory)
  return (
    <VStack >
        <Box bg="primary.600">
            <HStack p={3}  space={3} justifyContent="center">
            {transactionTypes.map(type=> (
                <Box key={type} bg={type=== selectedType? "white": "primary.800"} py={1} px={4} rounded="full" onTouchStart={()=>setSelectedType(type)}>
                <Text color={type=== selectedType? "primary.800": "white"} fontSize="2xs">{type.toUpperCase()}</Text>
            </Box>
            ))}
            </HStack>
            <Input
                borderColor="transparent"
                value={amount }
                onChangeText={setAmount}
                placeholder="Enter Amount"
                placeholderTextColor="white"
                keyboardType="numeric"
                textAlign="center"
                color="white"
                fontSize="lg"
            />
        </Box>

        <Box  p={3}>
            <Text color="black" fontWeight="bold" mb={2}>Select Category</Text>
            <RNPickerSelect
            onValueChange={(value) => setSelectedCategory(value)}
            items={categories}
            />
        </Box>

        <Box  p={3}>
            <Text color="black" fontWeight="bold" mb={2}>Select Account</Text>
            <RNPickerSelect
            onValueChange={(value) => setSelectedAccount(value)}
            items={accounts}
            />
        </Box>
        <Box p={3}>
            <Button>Create Transaction</Button>
        </Box>

    </VStack>
  )
}

export default AddTransaction
