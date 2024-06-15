import { Container, Text, VStack, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useDishes, useAddDish, useUpdateDish, useDeleteDish } from "../integrations/supabase/index.js";

const Dishes = () => {
  const { data: dishes, isLoading, isError } = useDishes();
  const addDish = useAddDish();
  const updateDish = useUpdateDish();
  const deleteDish = useDeleteDish();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading dishes</Text>;
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Dishes</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Country</Th>
              <Th>Size</Th>
              <Th>Type</Th>
              <Th>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dishes.map(dish => (
              <Tr key={dish.id}>
                <Td>{dish.name}</Td>
                <Td>{dish.country}</Td>
                <Td>{dish.size}</Td>
                <Td>{dish.type}</Td>
                <Td>{dish.price}</Td>
                <Td>
                  <Button onClick={() => updateDish.mutate({ ...dish, name: "Updated Dish" })}>Update</Button>
                  <Button onClick={() => deleteDish.mutate(dish.id)}>Delete</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button onClick={() => addDish.mutate({ name: "New Dish", country: "Unknown", size: "Medium", type: "Main", price: 10 })}>Add Dish</Button>
      </VStack>
    </Container>
  );
};

export default Dishes;