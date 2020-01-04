import moment from 'moment';
import { timusoid } from '../src';

it('hourly', () => {
  const { sin, cos, tan, progress } = timusoid(
    moment('2020-01-04T14:19:03.201Z'),
    'hourly',
  );
  expect(sin()).toEqual(0.911258628463409);
  expect(cos()).toEqual(-0.41183456879065733);
  expect(tan()).toEqual(-2.212681249996325);
  expect(progress()).toEqual(0.3175559215433115);
});

it('daily', () => {
  const { sin, cos, tan, progress } = timusoid(
    moment('2020-01-04T14:19:03.201Z'),
    'daily',
  );
  expect(sin()).toEqual(-0.5701880484677601);
  expect(cos()).toEqual(-0.8215142052238217);
  expect(tan()).toEqual(0.6940696154029524);
  expect(progress()).toEqual(0.5965648332935745);
});

it('weekly', () => {
  const { sin, cos, tan, progress } = timusoid(
    moment('2020-01-04T14:19:03.201Z'),
    'weekly',
  );
  expect(sin()).toEqual(-0.3542599309537995);
  expect(cos()).toEqual(0.9351469944990516);
  expect(tan()).toEqual(-0.3788280698518128);
  expect(progress()).toEqual(0.9423664053279868);
});

it('monthly', () => {
  const { sin, cos, tan, progress } = timusoid(
    moment('2020-01-04T14:19:03.201Z'),
    'monthly',
  );
  expect(sin()).toEqual(0.666097259309688);
  expect(cos()).toEqual(0.7458648946961657);
  expect(tan()).toEqual(0.8930535061326734);
  expect(progress()).toEqual(0.11601822024940943);
});

it('yearly', () => {
  const { sin, cos, tan, progress } = timusoid(
    moment('2020-01-04T14:19:03.201Z'),
    'yearly',
  );
  expect(sin()).toEqual(0.061703628813687975);
  expect(cos()).toEqual(0.9980945156603269);
  expect(tan()).toEqual(0.061821428577699);
  expect(progress()).toEqual(0.009826679853832305);
});
