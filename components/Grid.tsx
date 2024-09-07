import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';

export default function Grid() {
  const data = [
    { name: 'Meezan', value: '137,361' },
    { name: 'HBL', value: '200,123' },
    { name: 'UBL', value: '156,789' },
    { name: 'Alfalah', value: '99,876' },
    { name: 'MCB', value: '189,345' },
    { name: 'Bank Islami', value: '45,123' },
    // Add more items as needed
  ];

  return (
      <Box marginTop="2" padding={2} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {data.map((item, index) => (
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
            <Text color="gray.700" fontSize="sm">{item.name}</Text>
            <Text color="black" fontSize="sm" fontWeight="medium">{item.value}</Text>
          </Box>
        ))}
      </Box>
  );
}
