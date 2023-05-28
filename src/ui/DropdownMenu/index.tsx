import { useState, createContext, useContext } from "react";
import { styled } from "../stitches.config";

export interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ open: false, setOpen: () => null });

const useDropdownContext = () => useContext(DropdownContext);

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <Screen onClick={() => setOpen(false)} open={open} />
      <DropdownMenuRoot>{children}</DropdownMenuRoot>
    </DropdownContext.Provider>
  );
};

interface TriggerProps {
  children: React.ReactNode;
}

const Trigger = ({ children }: TriggerProps) => {
  const { setOpen } = useDropdownContext();
  return (
    <StyledTrigger onClick={() => setOpen((o) => !o)}>{children}</StyledTrigger>
  );
};

interface MenuProps {
  children: React.ReactNode;
  alignRight?: boolean;
}
const Menu = ({ children, alignRight }: MenuProps) => {
  const { open } = useDropdownContext();
  return (
    <StyledMenu open={open} alignRight={alignRight}>
      {children}
    </StyledMenu>
  );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Menu = Menu;

const Screen = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "transparent",
  variants: {
    open: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

const DropdownMenuRoot = styled("div", {
  position: "relative",
});

const StyledTrigger = styled("div", {
  cursor: "pointer",
});

const StyledMenu = styled("div", {
  position: "absolute",
  top: "100%",
  left: 0,
  background: "$grey4",
  variants: {
    open: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
    alignRight: {
      true: {
        right: 0,
        left: "auto",
      },
    },
  },
});
