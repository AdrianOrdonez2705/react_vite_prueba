import "./App.css"
import {
  Container,
  Heading,
  Group,
  Drawer,
  Button,
  Portal,
  Dialog,
  CloseButton,
  Input,
  Popover,
  Text,
  Menu,
  Badge,
  Avatar,
  HStack,
} from "@chakra-ui/react"

import {
  HiStar,
  HiOutlineSwitchVertical,
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineVideoCamera,
  HiDocumentText,
} from "react-icons/hi"

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc"

import Dock from "./react-bits/Dock"
import { toaster } from "./components/ui/toaster-instance"
import { Toaster } from "./components/ui/toaster"

import { Link } from "react-router-dom"
import { useState } from "react"

function App() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => console.log("hola pepe"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () =>
        toaster.create({
          description: "You are not connected to the Internet...",
          type: "error",
        }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => setOpen(true),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () =>
        toaster.create({
          description: "Opening settings...",
          type: "warning",
        }),
    },
  ]

  const [open, setOpen] = useState(false)

  return (
    <>
      <Container py={3} minH="100vh" display="flex" flexDirection="column">
        <HStack gap={3}>
          <Avatar.Root>
            <Avatar.Fallback name="Admin"></Avatar.Fallback>
          </Avatar.Root>
          <Heading size="md">Admin</Heading>
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                Open Drawer
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>This is a Drawer</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      <Button variant="outline">Cancelar</Button>
                    </Drawer.ActionTrigger>
                    <Drawer.ActionTrigger>
                      <Button>Guardar</Button>
                    </Drawer.ActionTrigger>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button size="sm" variant="outline">
                Click me
              </Button>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Body>
                    <Popover.Title fontWeight="medium">
                      Naruto Form
                    </Popover.Title>
                    <Text my="4">
                      Naruto is a Japanese manga series written and illustrated
                      by Masashi Kishimoto.
                    </Text>
                    <Input placeholder="Your fav. character" size="sm" />
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Menu.Root>
            <Menu.Trigger asChild>
              <Button size="sm">
                <HiDocumentText />
                File
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt">New Text File</Menu.Item>
                  <Menu.Item value="new-file">New File...</Menu.Item>
                  <Menu.Item value="new-win">New Window</Menu.Item>
                  <Menu.Item value="open-file">Open File...</Menu.Item>
                  <Menu.Item value="save">Save as</Menu.Item>
                  <Menu.Item value="export">Export</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          <Link to="/landing-page">
            <Button variant="surface" size="sm">
              Landing Page
            </Button>
          </Link>

          <Group attached>
            <Button
              onClick={() =>
                toaster.create({
                  description: "You have no apps installed yet",
                  type: "error",
                })
              }
            >
              <HiOutlineViewGrid></HiOutlineViewGrid>
              Apps
            </Button>
            <Button
              onClick={() =>
                toaster.create({
                  description: "Try creating a new group first...",
                  type: "info",
                })
              }
            >
              <HiOutlineUsers></HiOutlineUsers>
              Groups
            </Button>
            <Button
              onClick={() =>
                toaster.create({
                  description: "Starting a new call...",
                  type: "loading",
                })
              }
            >
              <HiOutlineVideoCamera></HiOutlineVideoCamera>
              Calls
            </Button>
          </Group>

          <Group attached>
            <Badge variant="surface" colorPalette="blue" size="md">
              <HiStar />
              Stars
            </Badge>
            <Badge variant="surface" colorPalette="purple" size="md">
              <HiOutlineSwitchVertical></HiOutlineSwitchVertical>
              Pull Requests
            </Badge>
            <Badge colorPalette="green" size="md">
              Verified
            </Badge>
            <Badge colorPalette="red" size="md">
              0 Errors
            </Badge>
          </Group>

          <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Save</Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </HStack>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
        <Toaster></Toaster>
      </Container>
    </>
  )
}

export default App
