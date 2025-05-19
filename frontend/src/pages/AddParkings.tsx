import { useMutation } from "react-query";
import ManageParkingForm from "../forms/ManageParkingForm/ManageParkingForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const AddParking = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyParking, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (parkingFormData: FormData) => {
    mutate(parkingFormData);
  };

  return <ManageParkingForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddParking;