class Airplane {
  constructor(seatsCapacity = 50) {
    this.seats = [];
    
    for(let capacity = 0 ; capacity < seatsCapacity ; ++capacity) {
      this.seats.push(false);
    }
  }

  getSeats() {
    return this.seats;
  }

  bookSeats(bookedSeats) {
    let alreadyBookedSeats = [];
    
    bookedSeats.forEach((seatNumber) => {
      if(this.seats[seatNumber]) {
        alreadyBookedSeats.push(seatNumber);
      }
    });

    if(alreadyBookedSeats.length === 0) {
      // we can book the seats
      bookedSeats.forEach((seatNumber) => {
        this.seats[seatNumber] = true;
      });
    }

    return alreadyBookedSeats;
  }
}

const airplane = new Airplane();
export default airplane;