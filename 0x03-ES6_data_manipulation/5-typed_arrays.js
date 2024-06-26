export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const int8veiw = new Int8Array(buff);
  if (position > length - 1) throw new Error('Position outside range');

  int8veiw[position] = value;
  return buff;
}
