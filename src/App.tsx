import "./App.css"
import {
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
} from "@chakra-ui/react"

import { toaster } from "./components/ui/toaster-instance"
import { Toaster } from "./components/ui/toaster"

import { Link } from "react-router-dom"
import Dock from "./react-bits/Dock"
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc"
import { useState } from "react"

function App() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
                <Text my="4">
                  Naruto is a Japanese manga series written and illustrated by
                  Masashi Kishimoto.
                </Text>
                <Input placeholder="Your fav. character" size="sm" />
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new-txt">New Text File</Menu.Item>
              <Menu.Item value="new-file">New File...</Menu.Item>
              <Menu.Item value="new-win">New Window</Menu.Item>
              <Menu.Item value="open-file">Open File...</Menu.Item>
              <Menu.Item value="export">Export</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
      <Badge colorPalette="green" size="lg">
        Success
      </Badge>
      <Badge colorPalette="red" size="lg">
        Danger
      </Badge>

      <Button
        variant="subtle"
        size="lg"
        onClick={() =>
          toaster.create({
            description: "Project created successfully!",
            type: "info",
          })
        }
      >
        Show Toaster
      </Button>

      <Link to="/land">
        <Button variant="subtle" size="lg">
          Landing Page
        </Button>
      </Link>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <Toaster></Toaster>
    </>
  )
}

export default App
