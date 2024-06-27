export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const dataview = new DataView(buff);
  if (position > length - 1) throw new Error('Position outside range');

  dataview.setInt8(position, value);
  return dataview;
}
