const { formatTime } = require('./formatter');

describe('formatTime', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-06-15T08:09:10Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('formats dates outside the current year as YYYY/MM/DD', () => {
    expect(formatTime('2023-11-05T00:00:00Z')).toBe('2023/11/05');
  });

  it('formats dates within the current year as MM/DD', () => {
    expect(formatTime('2024-04-02T00:00:00Z')).toBe('04/02');
  });

  it('formats today as HH:ss', () => {
    expect(formatTime('2024-06-15T23:59:07Z')).toBe('23:07');
  });

  it('throws on invalid dates', () => {
    expect(() => formatTime('invalid-date')).toThrow('Invalid date');
  });
});
