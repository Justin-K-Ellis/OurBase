export default function addNums(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
