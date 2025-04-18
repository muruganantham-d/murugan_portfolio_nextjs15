import { format, parseISO} from 'date-fns';

type FormatOptions = {
  // Define your own options here if needed
  locale?: any;
  timeZone?: string;
};

export class Formaters {
  static formatDate(
    date: Date | string | number,
    {
      pattern = 'PPPP',
      options,
    }: {
      pattern?: string
      options?: FormatOptions
    } = {},
  ): string {
    return format(parseISO(date.toString()), pattern, options)
  }
  static capitalizeFirstLetter(string: string | string[]): string {
    if (string.length === 0) return ''
    if (Array.isArray(string)) {
      return string
        .map((str) => {
          return str.charAt(0).toUpperCase() + str.slice(1)
        })
        .join(' ')
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
