// Coded my solution in this file!
// Function to calculate distance in blocks from headquarters
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Function to calculate distance in feet from headquarters
  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
  }
  
  // Function to calculate distance travelled in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Function to calculate fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  