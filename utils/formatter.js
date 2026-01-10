function padTwo(value) {
  return String(value).padStart(2, '0');
}

function formatTime(input) {
  const date = input instanceof Date ? input : new Date(input);

  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date input');
  }

  const now = new Date();
  const sameYear = date.getFullYear() === now.getFullYear();
  const sameDay =
    sameYear &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (sameDay) {
    return `${padTwo(date.getHours())}:${padTwo(date.getSeconds())}`;
  }

  if (sameYear) {
    return `${padTwo(date.getMonth() + 1)}/${padTwo(date.getDate())}`;
  }

  return `${date.getFullYear()}/${padTwo(date.getMonth() + 1)}/${padTwo(
    date.getDate()
  )}`;
}

module.exports = {
  formatTime,
};
