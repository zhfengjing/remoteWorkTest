const padTwo = (value) => String(value).padStart(2, '0');

const formatTime = (input) => {
  const date = input instanceof Date ? input : new Date(input);

  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const now = new Date();
  const isSameYear = date.getFullYear() === now.getFullYear();
  const isSameDay =
    isSameYear &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (isSameDay) {
    return `${padTwo(date.getHours())}:${padTwo(date.getSeconds())}`;
  }

  if (isSameYear) {
    return `${padTwo(date.getMonth() + 1)}/${padTwo(date.getDate())}`;
  }

  return `${date.getFullYear()}/${padTwo(date.getMonth() + 1)}/${padTwo(
    date.getDate()
  )}`;
};

module.exports = {
  formatTime,
};
