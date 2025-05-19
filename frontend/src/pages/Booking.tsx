import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useSearchContext } from "../contexts/SearchContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingDetailsSummary from "../components/BookingDetailSummary";
import { Elements } from "@stripe/react-stripe-js";
import { useAppContext } from "../contexts/AppContext";

const Booking = () => {
  const { stripePromise } = useAppContext();
  const search = useSearchContext();
  const { parkingId } = useParams();

  const [numberOfHours, setNumberOfHours] = useState<number>(0);

  useEffect(() => {
    if (search.checkInTime && search.checkOutTime) {
      const hours =
        Math.abs(search.checkOutTime.getTime() - search.checkInTime.getTime()) /
        (1000 * 60 * 60 );

      setNumberOfHours(Math.ceil(hours));
    }
  }, [search.checkInTime, search.checkOutTime]);

  const { data: paymentIntentData } = useQuery(
    "createPaymentIntent",
    () =>
      apiClient.createPaymentIntent(
        parkingId as string,
        numberOfHours.toString()
      ),
    {
      enabled: !!parkingId && numberOfHours > 0,
    }
  );

  const { data: parking } = useQuery(
    "fetchParkingByID",
    () => apiClient.fetchParkingById(parkingId as string),
    {
      enabled: !!parkingId,
    }
  );

  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  if (!parking) {
    return <></>;
  }

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <BookingDetailsSummary
        checkInTime={search.checkInTime}
        checkOutTime={search.checkOutTime}
        slotType={search.slotType}
        numberOfHours={numberOfHours}
        parking={parking}
      />
      {currentUser && paymentIntentData && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: paymentIntentData.clientSecret,
          }}
        >
          <BookingForm
            currentUser={currentUser}
            paymentIntent={paymentIntentData}
          />
        </Elements>
      )}
    </div>
  );
};

export default Booking;