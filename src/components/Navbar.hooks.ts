import { useState } from "react";

interface UseNavbarHooks {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useNavbar = (): UseNavbarHooks => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer: UseNavbarHooks["openDrawer"] = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer: UseNavbarHooks["closeDrawer"] = () => {
    setIsDrawerOpen(false);
  };

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  };
};
