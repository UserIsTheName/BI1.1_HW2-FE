import useFetch from "./useFetch";
const ShowHotelByName = ({ name }) => {
  const { data, loading, error } = useFetch(
    "https://bi1-1-hw2-be-sut4.onrender.com/",
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!data || data.length === 0) {
    return <p>Hotels is not found</p>;
  }
  if (error) {
    return <p>an error oquired</p>;
  } else {
    const hotelInfo = data?.find((d) => d.name === name);
    return (
      <>
        <h2>{hotelInfo.name}</h2>
        <strong>Location:</strong> {hotelInfo.location}
        <br />
        <b>Rating:</b>
        {hotelInfo.rating}
        <br />
        <b>Price Range: $$</b>({hotelInfo.pricePerNight})
      </>
    );
  }
};
export default ShowHotelByName;
