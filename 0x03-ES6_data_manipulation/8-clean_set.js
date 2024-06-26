export default function cleanSet(set, startString) {
  const res = [];
  set.forEach((value) => {
    if (startString && value.startsWith(startString)) {
      res.push(value.replace(startString, ''));
    }
  });
  return res.join('-');
}
