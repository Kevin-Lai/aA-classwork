class Clock {
    constructor() {
      // 1. Create a Date object.
        // new Date()


        let currentTime = new Date();
        
        // 2. Store the hours, minutes, and seconds.
      // Date.now()

        this.hours = currentTime.getHours(); 
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

      // 3. Call printTime.
      
        this.printTime();

      // 4. Schedule the tick at 1 second intervals.
        // probably use setinterval here

        this._tick = this._tick.bind(this);
        setInterval(this._tick, 1000);
        // setInterval(function () {console.log(this);}, 800);

    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
        let timeStr = this.hours + ":" + this.minutes + ":" + this.seconds;
        console.log(timeStr);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
    
        console.log(this);
        this.seconds += 1;

        if (this.seconds == 60) {
            this.seconds = 0;
            this.minutes += 1;
        }

        if (this.minutes == 60) {
            this.minutes = 0;
            this.hours += 1;
        }

        if (this.hours == 24)
            this.hours = 0;

        this.printTime();
    }
  }
  
//   const clock = new Clock();
