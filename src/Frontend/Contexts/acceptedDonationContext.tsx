import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

interface DonationContextType {
  donations: any[];
  setDonations: (donations: any) => void;
}

const DonationAppContext = createContext<DonationContextType | null>(null);

export const useDonations = (): DonationContextType => {
  const context = useContext(DonationAppContext);
  if (context === null) {
    throw new Error("useDonations must be used within a DonationsProvider");
  }
  return context;
};

export const DonationsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [donations, setDonations] = useState<any[]>([]);

  const value = {
    donations,
    setDonations,
  };

  return (
    <DonationAppContext.Provider value={value}>
      {children}
    </DonationAppContext.Provider>
  );
};
