export default function getRegistredEvents(events) {
  return events.filter((i) => i.booked === true);
}
