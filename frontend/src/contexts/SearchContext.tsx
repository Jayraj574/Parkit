import React, { useContext, useState } from "react";

type SearchContext = {
  destination: string;
  checkInTime: Date;
  checkOutTime: Date;
  slotType: string;
  hotelId: string;
  saveSearchValues: (
    destination: string,
    checkInTime: Date,
    checkOutTime: Date,
    slotType: string,
  ) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [destination, setDestination] = useState<string>(
    () => sessionStorage.getItem("destination") || ""
  );
  const [checkInTime, setCheckInTime] = useState<Date>(
    () =>
      new Date(sessionStorage.getItem("checkIn") || new Date().toISOString())
  );
  const [checkOutTime, setCheckOutTime] = useState<Date>(
    () =>
      new Date(sessionStorage.getItem("checkOut") || new Date().toISOString())
  );
  const [slotType, setSlotType] = useState<string>(
    () => sessionStorage.getItem("slotType") || ""
  );
  const [hotelId, setHotelId] = useState<string>(
    () => sessionStorage.getItem("hotelID") || ""
  );

  const saveSearchValues = (
    destination: string,
    checkInTime: Date,
    checkOutTime: Date,
    slotType: string,
    hotelId?: string
  ) => {
    setDestination(destination);
    setCheckInTime(checkInTime);
    setCheckOutTime(checkOutTime);
    setSlotType(slotType);
    if (hotelId) {
      setHotelId(hotelId);
    }

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkInTime", checkInTime.toISOString());
    sessionStorage.setItem("checkOutTime", checkOutTime.toISOString());
    sessionStorage.setItem("slotType", slotType.toString());

    if (hotelId) {
      sessionStorage.setItem("hotelId", hotelId);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkInTime,
        checkOutTime,
        slotType,
        hotelId,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
};