import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
    bg="white"
    borderRadius="10"
    overflow="hidden"
    boxShadow="md"
    spacing={4}
    _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}

    >
     <Image src={imageSrc} alt={title} borderRadius="lg"/>

     <VStack spacing={2} align="start" w="100%" paddingX="10px"
     >
        <Heading as="h3" size="md"
        color="black"
        >
          {title}
        </Heading>
        <Text color="grey"
              overflow="hidden"
              padding="5px"
        >{description}</Text>
      </VStack>
      <HStack justifyContent="flex-start" alignItems="baseline" w="100%" padding="0 10px">
        <Text fontSize="sm" color="black">
          See More
        </Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} />
      </HStack>
    </VStack>
  );
};

export default Card;
