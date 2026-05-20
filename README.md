# Rating System React Application

An interactive review system built with React that allows users to rate their experience using a 5-star scale with dynamic feedback text. It also features a toggleable modal dialogue box.

## Features

- **Dynamic Star Rating**: Built using the `map()` method to render exactly 5 stars.
- **Interactive State**: Updates the colour of the stars on click.
- **Dynamic Text**: Displays a rating title that corresponds to the selected score.
- **Modular Components**: Structured entirely using React functional components and the useState hook.
- **Dialogue Modal**: A popup dialog box that can be opened and closed.

---

## Component Logic Overview

1. **`StarRating`**: Loops exactly 5 times to create the star group. It evaluates `selected` prop using `currentRating <= rating` to conditionally apply a CSS colour style to the active stars. It also translates numbers into text titles (`Poor` to `Excellent`).
2. **`Star`**: Imported the `FaStar` icon from `react-icons`. It accepts an `onClick` prop passed down from `StarRating`.
3. **`Dialog`**: A pop-up box overlay that accepts a close and open function from `App` to CLOSE AND OPEN.
4. **`App`**: Uses `useState` to manage the visibility (open/close) of the `Dialog` component.

## Technologies Used

* **CSS** – Styling, layout, and responsiveness
* **React:** Comprehensive framework interface layer.
* **JSX:** Declarative markup syntax optimization layout.
* **Node.js & npm:** External dependency management engine.
* **Git & GitHub Pages:** Deployment host systems managing deployment processing.
  
## DEMO
Click [Here](https://pattyruk.github.io/rating/) to test the create App.