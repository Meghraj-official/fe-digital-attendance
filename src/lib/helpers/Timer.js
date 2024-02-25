 export default function startTimer(durationInSeconds, callback) {
    const startTime = new Date().getTime();
    
    function updateTimer() {
      const currentTime = new Date().getTime();
      const elapsedMilliseconds = currentTime - startTime;
      
      // Calculate remaining time in seconds
      const remainingSeconds = Math.max(0, durationInSeconds - Math.floor(elapsedMilliseconds / 1000));
      
      // Call the callback with the remaining time
      callback(remainingSeconds);
      
      // Check if the timer has reached 0
      if (remainingSeconds > 0) {
        // Schedule the next update after 1000 milliseconds (1 second)
        setTimeout(updateTimer, 1000);
      }
    }
    
    // Initial update
    updateTimer();
  }