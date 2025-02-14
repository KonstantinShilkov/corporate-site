import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface IndexContextType {
  selectedIndex: string;
  setSelectedIndex: (index: string) => void;
}

const IndexContext = createContext<IndexContextType | undefined>(undefined);

const fetchIndices = async (): Promise<string> => {
  const response = await fetch("/");
  const data = await response.json();
  return data.defaultIndex || "default-index";
};

export const IndexProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: initialIndex } = useQuery({
    queryKey: ["indices"],
    queryFn: fetchIndices,
    initialData: "default-index",
  });

  const [selectedIndex, setSelectedIndex] = useState<string>(
    initialIndex || "default-index"
  );

  return (
    <IndexContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      {children}
    </IndexContext.Provider>
  );
};

export const useIndex = (): IndexContextType => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error("useIndex must be used within an IndexProvider");
  }
  return context;
};
