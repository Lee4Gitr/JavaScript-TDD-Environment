
class Greeter {
  constructor(timeOfDay = new Date().getHours()) {
    this.greeting = this._getGreeting(timeOfDay.getHours());
    this.numberOfTimesCalled = 0;
  }

  _getGreeting(timeOfDay) {
    if (timeOfDay >= 0 && timeOfDay < 12) {
      return "Good Morning";
    }
    else if (timeOfDay >= 12 && timeOfDay < 18) {
      return "Good Afternoon";
    }
    else {
      return "Good Evening";
    }
  }
  greet(string) {
    // console.log("Number of times called: ", ++this.numberOfTimesCalled);
    const trimmedString = string.trim();
    return `${this.greeting}, ${trimmedString.trim().charAt(0).toUpperCase() + trimmedString.slice(1)}!`
  }
}

export default Greeter;