# timusoid
Circular representations of time. These are useful for graphically representing the periodicity of time or representing time-dependent input behaviour in deep neural networks. This was inspired by [@ItsIanLondon](https://twitter.com/ItsIanLondon)'s article ["Encoding Cyclical Features in 24 Hour Time"](https://ianlondon.github.io/blog/encoding-cyclical-features-24hour-time/).

<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

## 🚀 Getting Started

Using [`npm`]():

```bash
npm install --save timusoid
```

Using [`yarn`]():

```bash
yarn add timusoid
```

## ✍️ Usage

```javascript
import moment from 'moment';
import { timusoid } from 'timusoid';

const { sin, cos, tan, progress } = timusoid(
  moment('2020-01-04T14:19:03.201Z'),
  'yearly', // oneOf(['hourly', 'daily', 'weekly', 'monthly', 'yearly'])
);

sin(); // 0.061703628813687975
cos(); // 0.9980945156603269
tan(); // 0.061821428577699
progress(); // 0.009826679853832305 (%)
```

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="https://www.buymeacoffee.com/cawfree">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy @cawfree a coffee!" width="232" height="50" />
  </a>
</p>
