# Etch-A-Sketch
The classic pixel-based drawing game to around with and doddle nonsense that might be funny!

> [!TIP]
> <h3>Do not open this on mobile!</h3>
> The layout is messed up, and touch doesn't work. Will be fixed!

## Table of Contents
- <a href="#components">Components</a>
- *Planning (COMING SOON)*
- *Pseudocode (COMING SOON)*
- <a href="#conclusion">Conclusion</a>

## Components
1) <a href="#grid">Grid</a>
2) <a href="#controls">Controls</a>
    - <a href="#drawing-tool">Drawing Tool</a>
    - <a href="#eraser-tool">Eraser Tool</a>
    - <a href="#clear-tool">Clear Tool</a>
    - <a href="#re-size-tool">Re-size Tool (Grid Size)</a>
3) <a href="#pallete">Color Pallete</a>

### Grid
By default it would 16x16 'pixels' divided across a 900px space from the page.

Only by user input <a href="">*(Re-size Tool)*</a> can how the grid be divided is changed, a limit of 100 'pixels' is set.

### Controls
1) ### Drawing Tool
    Allows the user to make color changes onto the grid.
    Saves the color chosen by the color <a href="#pallete">*pallete*</a>, and uses it to alter a pixel's color in the grid.

    **Desktop Only**: Hovering over a pixel in the grid with your mouse pointer shows a lighter tone of the same color you have selected with the color <a href="#pallete">*pallete*</a>.

2) ### Eraser Tool 
    > [!NOTE]
    > **COMING SOON**

3) ### Clear Tool
    Refreshes entire grid, erasing altered pixels in the process.

4) ### Re-size Tool
    On click, a prompt is displayed to receive a number input between 1 and 100. *(Outside of this range defaults to 16)*

    Grid is regenerated using the new number entered as width and height. 16X16 px.

### Pallete
Visible on the left-side of the grid, the *color* pallete contains a number of different colors with the sole function of changing the <a href="#drawing-tool">*drawing tool*</a>'s color based on the user's choice.

## Conclusion
This was a project made for the Foundations Course hosted by [The Odin Project](https://theodinproject.com).