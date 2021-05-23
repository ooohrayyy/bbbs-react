import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

export function parsedDate(date) {
  const parseDate = parseISO(date);
  const month = format(parseDate, 'LLLL', { locale: ru });
  const dayWeek = format(parseDate, 'EEEE', { locale: ru });
  const time = format(parseDate, 'kk:mm', { locale: ru });
  const dayMonth = format(parseDate, 'dd', { locale: ru });
  const year = format(parseDate, 'yyyy', { locale: ru });
  return { month, dayWeek, time, dayMonth, year };
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

export function getParsedEventsData(data) {
  return data.map((i) => {
    const { month, dayMonth } = parsedDate(i.startAt);
    return {
      ...i,
      startDayMonth: dayMonth,
      startMonth: month,
    };
  });
}

export function getRotatedMonth(months) {
  const currentMonth = new Date().getMonth();
  const ret = [];
  for (let i = 0; i < months.length; i += 1) {
    ret.push(months[(i + currentMonth) % months.length]);
  }
  ret[0].active = true;
  return ret;
}

export function getFilteredTags(tag, selectedTag) {
  return selectedTag.map((i) => (i.name === tag.name ? tag : i));
}

export function getFilteredData(selectedTags, data, keyObj) {
  const selectedTagsArr = selectedTags.filter((i) => i.active === true);

  if (selectedTagsArr.length === 0) return data;

  const result = [];
  for (let i = 0; i < selectedTagsArr.length; i += 1) {
    for (let a = 0; a < data.length; a += 1) {
      if (data[a][keyObj] === selectedTagsArr[i].value) {
        result.push(data[a]);
      }
    }
  }

  return result;
}
