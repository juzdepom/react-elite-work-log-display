export function calculateTotalMinutesWorked(entries){ // will return a string
    //note: entries will be an object
    if(entries.length > 0){ //note: this method isn't async so it's called when entries object is still empty; this if statement takes care of that
      let minutes = 0
      entries.forEach((entry) => { 
        minutes += entry.fields.minutes
      })
      //convert minutes to hours and minutes
      let hours = minutes / 60 
      let remainderMinutes = minutes % 60
      let string = `${hours} hours ${remainderMinutes} min`
      return string
    }
  }
  