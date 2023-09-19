export default function Sum(...numbers: number[]) {
  return numbers.reduce((total, number) => total + number, 0);
}
