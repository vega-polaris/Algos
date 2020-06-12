/* devs are coming from all over country to an event. Event has 2 locations: NY and SF. Devs are distributed between the locations equally (or one has one extra person). Given for each dev the price of bringing them to each of the locations, how to distribute them between the two locations?
 */

const attendees = [
  { name: 'Dan', nyPrice: 100, sfPrice: 50 },
  { name: 'Emma', nyPrice: 0, sfPrice: 700 },
  { name: 'Rose', nyPrice: 720, sfPrice: 0 },
  { name: 'Jane', nyPrice: 500, sfPrice: 500 },
  { name: 'Grace', nyPrice: 200, sfPrice: 100 },
  { name: 'Florence', nyPrice: 500, sfPrice: 800 },
  { name: 'Vanessa', nyPrice: 400, sfPrice: 100 },
];

const distributeDevs = (attendees) => {
  attendees.forEach((attendee) => {
    attendee.difference = attendee.sfPrice - attendee.nyPrice;
  });
  // first sort the array in place according to the movability. Choose one of the towns as positive, the other as negative.
  attendees.sort((attendeeA, attendeeB) => {
    return attendeeA.difference - attendeeB.difference;
  });
  // how many should be in each place?
  const average = Math.round(attendees.length / 2);
  const sfDevs = attendees.splice(0, average);
  const nyDevs = attendees;
  return [nyDevs, sfDevs];
};

distributeDevs(attendees);
