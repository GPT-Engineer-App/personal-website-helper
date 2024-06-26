import { Container, Text, VStack, Heading, Box, Image, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="150px">
          <Image src="/profile.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="xl">Full Stack Developer</Text>
        <Text textAlign="center">Passionate about building scalable web applications and working with modern web technologies.</Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="Github" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;