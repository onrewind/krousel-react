# @onrewind/krousel-react

React wrapper for [krousel](https://github.com/onrewind/krousel/) - a javascript carousel library

[Check the demo here](https://onrewind.github.io/krousel-react/)

## Installation

```bash
npm install --save @onrewind/krousel @onrewind/krousel-react
```

## Features

- Infinite loop
- Change transition speed & type (slide / fade)
- Autoplay & autoplay speed
- Enable / Disable arrows
- Enable / Disable navigation dots
- Show multiple slides at once
- Slide multiple slides at once
- Responsive: change config using breakpoints
- Change where dots and/or arrows will be inserted
- Use custom arrows

## Options

Pass options as properties to Krousel

```jsx
import '@onrewind/krousel/dist/krousel.css';
import Krousel from '@onrewind/krousel-react';

// render
<Krousel infinite={true} slidesToShow={2}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
  <div>Slide 4</div>
  <div>Slide 5</div>
</Krousel>
```

You can find the list of options [here](https://github.com/onrewind/krousel#options)

To customize arrows you can also provide a React component instance to `prevArrow` and `nextArrow` options (see examples)