/*
  Task: Create a clock that updates every second and shows time in two formats:
  - HH:MM::SS (24-hour)
  - HH:MM::SS AM/PM (12-hour)
  
  Approach: Use setInterval to get the current date every second and format it.
*/

function startClock() {
  setInterval(() => {
    const now = new Date();
    
    // Format 1: HH:MM:SS (24-hour)
    const hours24 = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // Format 2: HH:MM:SS AM/PM (12-hour)
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
    const formattedHours12 = String(hours12).padStart(2, '0');
    const time12 = `${formattedHours12}:${minutes}:${seconds} ${ampm}`;

    console.clear();
    console.log('24-Hour Format:', time24);
    console.log('12-Hour Format:', time12);
  }, 1000);
}

// startClock(); // Uncomment to run locally
