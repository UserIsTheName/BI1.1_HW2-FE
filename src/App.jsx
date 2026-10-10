import AllHotelHandler from "./allHotels";
import ShowHotelByName from "./ShowHotelByName";
const App = () => {
  return (
    <div>
      <AllHotelHandler />
      <ShowHotelByName name="Bansara Royale" />
    </div>
  );
};
export default App;
