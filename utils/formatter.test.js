const { formatTime } = require('./formatter');

describe('formatTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('formats a date from another year as YYYY/MM/DD', () => {
    jest.setSystemTime(new Date('2024-05-20T10:20:30Z'));
    const input = new Date('2023-12-09T02:03:04Z');

    expect(formatTime(input)).toBe('2023/12/09');
  });

  it('formats a date from this year as MM/DD', () => {
    jest.setSystemTime(new Date('2024-05-20T10:20:30Z'));
    const input = new Date('2024-03-08T02:03:04Z');

    expect(formatTime(input)).toBe('03/08');
  });

  it('formats a date from today as HH:ss', () => {
    jest.setSystemTime(new Date('2024-05-20T10:20:30Z'));
    const input = new Date('2024-05-20T09:04:07Z');

    expect(formatTime(input)).toBe('09:07');
  });

  it('throws an error for invalid dates', () => {
    expect(() => formatTime('not-a-date')).toThrow('Invalid date input');
  });
});
