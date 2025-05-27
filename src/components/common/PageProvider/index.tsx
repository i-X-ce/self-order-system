import React, {
  createContext,
  useContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type PageType = "home" | "menu" | "checkout";
const PageContext = createContext<{
  page: PageType;
  setPage: Dispatch<SetStateAction<PageType>>;
} | null>(null);

const PageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = React.useState<PageType>("home");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;

export function usePage() {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a PageProvider");
  return context;
}
