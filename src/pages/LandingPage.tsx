import { Glass } from "@samasante/liquid-glass"
import Strands from "@/react-bits/Strands"

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Code,
  Container,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  Link as ChakraLink,
  Progress,
  Separator,
  SimpleGrid,
  Switch,
  Text,
  Textarea,
  VStack,
  Checkbox,
} from "@chakra-ui/react"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { Link as ReactLink } from "react-router-dom"

export default function LandingPage() {
  const center: [number, number] = [40.7128, -74.006]
  return (
    <>
    <Box bg="gray.950" color="gray.100" minH="100vh">
      {/* Navbar */}
      <Box
        bg="gray.900"
        borderBottomWidth="1px"
        borderColor="whiteAlpha.200"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <HStack gap={3}>
              <Avatar.Root size="sm">
                <Avatar.Fallback name="Acme" />
              </Avatar.Root>

              <Heading size="md">Acme</Heading>
            </HStack>

            <HStack gap={6}>
              <ChakraLink href="#" color="gray.300">
                Features
              </ChakraLink>

              <ChakraLink href="#" color="gray.300">
                Pricing
              </ChakraLink>

              <ReactLink to="/">
                <ChakraLink color="gray.300">
                  Contact
                </ChakraLink>
              </ReactLink>

              <Button colorPalette="blue">Get Started</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Container maxW="7xl" py={24}>
        <VStack gap={6} textAlign="center">
          <Badge colorPalette="blue" px={3} py={1} rounded="full">
            Version 3.36
          </Badge>

          <Heading size="6xl" maxW="900px" lineHeight="1.1">
            Build beautiful React interfaces with Chakra UI
          </Heading>

          <Text maxW="700px" fontSize="lg" color="gray.400">
            A clean, modern landing page using only components exported from{" "}
            <Code>@chakra-ui/react</Code>.
          </Text>

          <HStack gap={4}>
            <Button colorPalette="blue" size="lg">
              Start Building
            </Button>

            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </HStack>

          <Box w="420px" maxW="100%" pt={8}>
            <Progress.Root value={80}>
              <Progress.Track bg="gray.800">
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>

            <Text mt={3} color="gray.500" fontSize="sm">
              80% developer happiness
            </Text>
          </Box>
        </VStack>
      </Container>

      {/* Features */}
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {[
            {
              title: "Fast",
              text: "Composable components with excellent performance and sensible defaults.",
            },
            {
              title: "Accessible",
              text: "Built around accessibility best practices out of the box.",
            },
            {
              title: "Flexible",
              text: "Powerful styling system with semantic design tokens.",
            },
          ].map((feature) => (
            <Card.Root
              key={feature.title}
              bg="gray.900"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
            >
              <Card.Body gap={5}>
                <Heading size="md">{feature.title}</Heading>

                <Separator />

                <Text color="gray.400">{feature.text}</Text>

                <Button variant="ghost" colorPalette="blue" alignSelf="start">
                  Learn More
                </Button>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>

      {/* Contact */}
      <Container maxW="3xl" py={20}>
        <Card.Root bg="gray.900" borderWidth="1px" borderColor="whiteAlpha.200">
          <Card.Header>
            <Heading size="lg">Join the Waitlist</Heading>

            <Text color="gray.400">
              We'll let you know when new features become available.
            </Text>
          </Card.Header>

          <Card.Body>
            <VStack gap={5}>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input
                  bg="gray.800"
                  borderColor="whiteAlpha.200"
                  placeholder="John Doe"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input
                  bg="gray.800"
                  borderColor="whiteAlpha.200"
                  type="email"
                  placeholder="john@example.com"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea
                  bg="gray.800"
                  borderColor="whiteAlpha.200"
                  placeholder="Tell us about your project..."
                />
              </Field.Root>

              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Subscribe to updates</Checkbox.Label>
              </Checkbox.Root>

              <HStack justify="space-between" w="full">
                <Text color="gray.300">Enable beta features</Text>

                <Switch.Root>
                  <Switch.HiddenInput />
                  <Switch.Control />
                </Switch.Root>
              </HStack>

              <Button colorPalette="blue" width="full" size="lg">
                Submit
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Container>

      <Box position="relative" w="600px" h="450px">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <Marker position={[40.7128, -74.006]}>
          <Popup>New York City</Popup>
        </Marker>
          </MapContainer>
      </Box>

      <Glass>
        <Button variant="subtle" size="lg">Save</Button>
      </Glass>
      <Button variant="surface" size="lg">Save</Button>

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Strands
          colors={["#F97316","#7C3AED","#06B6D4"]}
          count={3}
          speed={0.5}
          amplitude={1}
          waviness={1}
          thickness={0.7}
          glow={2.6}
          taper={3}
          spread={1}
          intensity={0.6}
          saturation={2}
          opacity={1}
          scale={1.5}
          glass={false}
          refraction={1}
          dispersion={1}
          glassSize={1}
          hueShift={0}
      />
      </div>

      </Box>
    </>
  )
}
