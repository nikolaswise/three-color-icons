# Three Color Icon Font

A proof-of-concept at creating a font that will semantically deliver three color icons with an icon font. The basic markup is very simple:


## Semantic Ligatures

```
<span class="icon spaceship">spaceship</span>
```
Adding the class "icon" enables the icon font, and the class "spaceship" connects to the CSS so we can get the proper color layers.

The font will use ligatures and ```:before``` and ```:after``` pseudo elements which are each offset so all the elements align. Because the extra colors are done in pseudo elements, they won't be read by screen-readers. And as the main element is a ligature, it can be very semantic. 

## Variable Background Colors

Adding a class of "red" or "green" targets the the :before selector, defining a new color for that layer. As such, 
```
<span class="icon spaceship green">spaceship</span>
```
Will output a three color spaceship icon with a green background. 
```
<span class="icon spaceship red">spaceship</span>
```
Is the same icon, with a red background.

## Using Icomoon

To modify your generated font, use the *dev.svg* file, located in the *fonts* folder in this package. You can import this dev.svg file to the IcoMoon app. All the tags (class names) and the Unicode points of your glyphs are saved in this file.

See the documentation for more info on how to use this package: http://icomoon.io/#docs/font-face