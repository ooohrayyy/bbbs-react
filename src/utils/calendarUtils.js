import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import getMonth from 'date-fns/getMonth';
import ru from 'date-fns/locale/ru';

export function parsedDate(date) {
  const parseDate = parseISO(date);
  const month = format(parseDate, 'LLLL', { locale: ru });
  const dayWeek = format(parseDate, 'EEEE', { locale: ru });
  const time = format(parseDate, 'kk:mm', { locale: ru });
  const dayMonth = format(parseDate, 'dd', { locale: ru });
  const year = format(parseDate, 'yyyy', { locale: ru });
  const monthGenitive = format(parseDate, 'MMMM', { locale: ru });
  const monthNumber = getMonth(parseDate);

  return { month, dayWeek, time, dayMonth, year, monthGenitive, monthNumber };
}

export function sortEventsByDate(events) {
  events.sort((a, b) => {
    if (a.startAt > b.startAt) {
      return 1;
    }
    if (a.startAt < b.startAt) {
      return -1;
    }

    return 0;
  });
}

export function getParsedEvent(event) {
  const { month, dayMonth, monthNumber, time, dayWeek, monthGenitive } =
    parsedDate(event.startAt);
  const endTime = parsedDate(event.endAt).time;
  return {
    ...event,
    startDayMonth: dayMonth,
    startMonth: month,
    startDayWeek: dayWeek,
    startMonthGenitive: monthGenitive,
    startMonthNumber: monthNumber,
    startTime: time,
    endTime,
    remainSeats: event.remainSeats || event.seats - event.takenSeats,
  };
}

export function getParsedEventsData(data) {
  return data.map((i) => getParsedEvent(i));
}

export function getRotatedMonth(months) {
  const currentMonth = new Date().getMonth();
  const ret = [];
  for (let i = 0; i < months.length; i += 1) {
    ret.push(months[(i + currentMonth) % months.length]);
  }
  return ret;
}

export function getInitialTags(months, events) {
  const flaggedMonths = getRotatedMonth(months).map((i) => ({
    ...i,
    hasInEvents: false,
  }));

  for (let i = 0; i < events.length; i += 1) {
    for (let j = 0; j < flaggedMonths.length; j += 1) {
      if (flaggedMonths[j].value === events[i].startMonthNumber) {
        flaggedMonths[j].hasInEvents = true;
        break;
      }
    }
  }

  const filtered = flaggedMonths.filter((i) => i.hasInEvents);

  if (filtered.length > 0) filtered[0].active = true;

  if (filtered.length <= 1) return [];

  return filtered;
}

export function getFilteredData(selectedTags, data) {
  if (selectedTags.length !== 0) {
    const selectedTagsArr = selectedTags.filter((i) => i.active === true);
    const selectedTag = selectedTagsArr[0];

    return data.filter((i) => i.startMonthNumber === selectedTag.value);
  }
  return data;
}
