let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const runnerAge = 20; 

if (runnerAge > 18 && 
  registeredEarly) {
    raceNumber +- 1000;
  }

if (runnerAge > 18 && 
  registeredEarly) {
    console.log(`The race will start at 9:30 am. Your race number is ${raceNumber}.`);
  } else if (runnerAge > 18 && !registeredEarly) {
    console.log(`The race will start at 11:00 am. Your race number is ${raceNumber}.`);
  } else if (runnerAge <  18) {
    console.log(`The race will start at 12:30. Your race number is ${raceNumber}.`);
  } else {console.log('Please see the registration desk.');
  } 
