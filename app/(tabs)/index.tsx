import ExpensesCard from '@/components/cards/Expenses';
import Grid from '@/components/Grid';
import { Box,  Text , VStack} from 'native-base';

export default function HomeScreen() {
  return (
    <Box safeArea flex="1" width="100%">
        <VStack space={5} padding={3} alignItems="center">
        {/* First Card */}
        <Box
          width="100%"
          bg="white"
          shadow={2}
          borderRadius="md"
          paddingX={3}
          paddingY={2}
        >
          <Text color="gray.700" fontSize="md">What You Have</Text>
          <Text color="black" fontSize="sm" fontWeight="bold">PKR 137,361</Text>
          <Grid/>

        </Box>

        <ExpensesCard/>
      </VStack>
    </Box>
  );
}

