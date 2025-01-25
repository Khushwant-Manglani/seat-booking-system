import express from "express";
import airplane from "./data/Airplane.js";

const app = express();

app.use(express.json());

app.get("/api", (_, res) => {
  res.status(200).json({
    success: true,
    seats: airplane.getSeats()
  });
});

app.post("/api/book-seats", (req, res) => {
  const bookedSeats = req.body.bookedSeats;

  if(!Array.isArray(bookedSeats)) {
    return res.status(400).json({
      success: false,
      message: "bookedSeats is not an array"
    });
  }

  const alreadyBookedSeats = airplane.bookSeats(bookedSeats);
  const seatBookedStatus = alreadyBookedSeats.length === 0;
  const seatBookedStatusCode = seatBookedStatus ? 200 : 409;

  res.status(seatBookedStatusCode).json({
    success: seatBookedStatus,
    message: seatBookedStatus ? "seats are booked successfully" : "seats booking failed, sorry because some seats are already booked by someone",
    bookedSeats: alreadyBookedSeats.length === 0 ? bookedSeats : [],
    alreadyBookedSeats: alreadyBookedSeats,  
  });
})

app.listen(3000, () => {
  console.log(`Server is listening at http://localhost:${3000}`);
})