export default function cleanSet(set, startString) {
  const res = [];

  if (startString && typeof startString === 'string' && (set instanceof Set)) {
    set.forEach((value) => {
      if (startString && value.startsWith(startString)) {
        res.push(value.replace(startString, ''));
      }
    });
  }

  return res.join('-');
}
