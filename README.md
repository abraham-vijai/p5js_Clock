# Analog Clock Visualization in p5.js

A simple, customizable analog clock built with [p5.js](https://p5js.org/). This clock demonstrates modular coding principles, allowing for easy adjustments to clock features like hand colors, lengths, and tick marks.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Features
- **Analog Design**: Classic circular clock layout with hour, minute, and second hands.
- **Modular Code**: Easily adjustable features for hands, numbers, and tick marks.
- **Dynamic Updates**: Continuously updates to show the current time.
- **Customizable Style**: Change colors, sizes, and tick frequencies in the code.

## Getting Started

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/analog-clock-p5.git
   cd analog-clock-p5

2.  **Open the Project**: Open `index.html` in a web browser to run the code with p5.js included.

Usage
-----

Once you open the project, the clock will start running automatically. The hour, minute, and second hands update in real time, reflecting the current system time.

Customization
-------------

To adjust the clock’s appearance, modify values in `sketch.js`:

*   **Clock Radius**: Adjust `CLOCK_RADIUS` to increase or decrease the clock face size.
*   **Hand Colors and Weights**:
    *   `drawClockHands` function: Modify the `drawHand` calls to set each hand’s color, weight, and length.
*   **Tick Marks**: Customize tick marks by changing the parameters in the `drawTicks` function calls:
    *   **Hour Ticks**: Change frequency and length by editing `NUM_TICKS_HOUR`, `CLOCK_ANGLE`, and tick length.
    *   **Minute Ticks**: Adjust with `NUM_TICKS_MINUTE`, angle, and length.

### Example Customization:

To make the clock hands thicker:

```javascript
drawHand(secondAngle, CLOCK_RADIUS * 0.45, 3, 'red');
drawHand(minuteAngle, CLOCK_RADIUS * 0.4, 5, 'blue');
drawHand(hourAngle, CLOCK_RADIUS * 0.3, 8, 'green');
```

License
-------

This project is licensed under the MIT License.
