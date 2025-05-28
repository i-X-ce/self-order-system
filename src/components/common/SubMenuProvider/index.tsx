import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type SubMenuType = "seasonal" | "set" | "alacarte";
const SubMenuContext = createContext<{
  subMenu: SubMenuType;
  setSubMenu: Dispatch<SetStateAction<SubMenuType>>;
} | null>(null);

const SubMenuProvider = ({ children }: { children: ReactNode }) => {
  const [subMenu, setSubMenu] = useState<SubMenuType>("alacarte");
  const value = { subMenu, setSubMenu };
  return (
    <SubMenuContext.Provider value={value}>{children}</SubMenuContext.Provider>
  );
};

export default SubMenuProvider;

export function useSubMenu() {
  const context = useContext(SubMenuContext);
  if (!context)
    throw new Error("useSubMenu must be used within a SubMenuProvider");
  return context;
}
