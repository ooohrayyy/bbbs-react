import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

export default function parsedDate(date) {
  const parseDate = parseISO(date);
  const month = format(parseDate, 'LLLL', { locale: ru });
  const dayWeek = format(parseDate, 'EEEE', { locale: ru });
  const time = format(parseDate, 'kk:mm', { locale: ru });
  const dayMonth = format(parseDate, 'dd', { locale: ru });
  const year = format(parseDate, 'yyyy', { locale: ru });
  return { month, dayWeek, time, dayMonth, year };
}
