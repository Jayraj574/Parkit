import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageParkingForm from "../forms/ManageParkingForm/ManageParkingForm";
import { useAppContext } from "../contexts/AppContext";

const EditHotel = () => {
  const { parkingId } = useParams();
  const { showToast } = useAppContext();

  const { data: parking } = useQuery(
    "fetchMyParkingById",
    () => apiClient.fetchMyParkingById(parkingId || ""),
    {
      enabled: !!parkingId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyParkingById, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageParkingForm parking={parking} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditHotel;