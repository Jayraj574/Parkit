import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LatestDestinationCard";

const Home = () => {
  const { data: parkings } = useQuery("fetchQuery", () =>
    apiClient.fetchParkings()
  );

  const topRowParkings = parkings?.slice(0, 2) || [];
  const bottomRowParkings = parkings?.slice(2) || [];

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent desinations added by our hosts</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowParkings.map((parking) => (
            <LatestDestinationCard parking={parking} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowParkings.map((parking) => (
            <LatestDestinationCard parking={parking} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;