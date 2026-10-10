import useFetch from "./useFetch.js";

const AllHotelHandler = () => {
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
    return (
      <>
        <h2>All Hotels</h2>
        <ul>
          {data?.map((d) => (
            <li key={d.id}>{d.name}</li>
          ))}
        </ul>
      </>
    );
  }
};
export default AllHotelHandler;
