import { Box, Container, Text , VStack} from 'native-base';

export default function HomeScreen() {
  return (
    <Box safeArea flex="1" width="100%">
        <VStack space={5} padding={3} alignItems="center">
        {/* First Card */}
        <Box
          width="100%"
          height={150}
          bg="white"
          shadow={2}
          borderRadius="md"
          paddingX={3}
          paddingY={2}
        >
          <Text color="gray.700" fontSize="md">What You Have</Text>
        </Box>

        <Box
          width="100%"
          height={150}
          bg="secondary.400"
          shadow={2}
          borderRadius="md"
          padding={4}
          justifyContent="center"
        >
          <Text color="white" fontSize="lg">Second Full Width Card</Text>
        </Box>
      </VStack>
    </Box>
  );
}

