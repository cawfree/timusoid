import { timusoid } from '../src';

it('should compile', () => {
  const { sin, cos, tan, progress } = timusoid(undefined, 'yearly');
  const x = timusoid(undefined, 'yearly');
  console.log(sin());
  console.log(cos());
  console.log(tan());
  console.log(progress());
  expect(true).toBeTruthy();
});
