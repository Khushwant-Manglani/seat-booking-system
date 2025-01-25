import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Coach from "./components/Coach";
import NextBox from "./components/NextBox";
import Heading from "./components/Heading";

function App() {
  const [seats, setSeats] = useState([]);
  const [selectSeatNumbers, setSelectSeatNumbers] = useState([]);
  const [seatBookedResponse, setSeatBookedResponse] = useState({success: false, message: ""});

  useEffect(() => {
    function fetchData() {
      fetch("/api", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },  
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then((data) => setSeats(data.seats))
      .catch((error) => console.error('Error:', error));
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="h-dvh flex flex-col justify-around mx-28">
        <Heading />
        <Coach seats={seats} setSelectSeatNumbers={setSelectSeatNumbers} />
        <NextBox selectSeatNumbers={selectSeatNumbers} setSeatBookedResponse={setSeatBookedResponse} />
        <div className="absolute">
          <Outlet context={[seatBookedResponse]} />
        </div>
      </div>
    </>
  )
}

export default App
