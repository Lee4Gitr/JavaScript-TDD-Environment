import Greeter from '../Greeter';

// This kata demonstrates the problems of static scoped functions and objects.

// All tests should always pass, regardless of environment conditions.

// Write a Greeter class with greet function that receives a name as input and outputs Hello <name>. The signature of greet should not change throughout the kata. You are allowed to construct Greeter object as you please.
// greet trims the input
// greet capitalizes the first letter of the name
// greet returns Good morning <name> when the time is 06:00-12:00
// greet returns Good evening <name> when the time is 18:00-22:00
// greet returns Good night <name> when the time is 22:00-06:00
// greet logs into console each time it is called

const timeOfDay = new Date();
timeOfDay.setHours(14);
const TestGreeter = new Greeter(timeOfDay);

test('An empty string should return "Hello, !"', () => {
  expect(TestGreeter.greet("")).toStrictEqual("Good Afternoon, !")
});

test('A blank character should return "Hello, !"', () => {
  expect(TestGreeter.greet(" ")).toStrictEqual("Good Afternoon, !")
});

test('An empty string at the beginning of the string will be removed', () => {
  expect(TestGreeter.greet(" test")).toStrictEqual("Good Afternoon, Test!")
});

test('The Greeter will capitalize the first letter if it is not capitalized already', () => {
  expect(TestGreeter.greet("test")).toStrictEqual("Good Afternoon, Test!");
});

test('The Greeter will greet with "Good Morning" between the hours of 0:00 and 11:59', () => {

  for (let i = 0; i < 12; i++) {
    timeOfDay.setHours(i);
    const MorningGreeter = new Greeter(timeOfDay);
    expect(MorningGreeter.greet("Aubrey")).toStrictEqual("Good Morning, Aubrey!");
  }
});

test('The Greeter will greet with "Good Afternoon" between the hours of 12:00 and 17:59', () => {

  for (let i = 12; i < 18; i++) {
    timeOfDay.setHours(i);
    const MorningGreeter = new Greeter(timeOfDay);
    expect(MorningGreeter.greet("Aubrey")).toStrictEqual("Good Afternoon, Aubrey!");
  }
});

test('The Greeter will greet with "Good Evening" between the hours of 18:00 and 23:59', () => {

  for (let i = 18; i < 24; i++) {
    timeOfDay.setHours(i);
    const MorningGreeter = new Greeter(timeOfDay);
    expect(MorningGreeter.greet("Aubrey")).toStrictEqual("Good Evening, Aubrey!");
  }
});