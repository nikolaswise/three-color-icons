# Three Color Icons
This is a technique for using [IcoMoon](http://icomoon.io/) to create semantic, [ligature](http://en.wikipedia.org/wiki/Typographic_ligature)-enabled, three color icon fonts.

![Final Three Color Icon](https://raw.github.com/nikolaswise/three-color-icons/master/images/final.png)

http://nikolaswise.github.io/three-color-icons/esri-logo.html

Using IcoMoon icon fonts with ligatures is a great way to bring a large family of icons into your site, with benefits ranging from semantic icon tags, tiny file size, control over color, and the inherent advantages of vector rendering on high pixel density hardware. This technique expands that benefit into multi-color icons, using ``:before`` and ``:after`` elements to create three layers with three colors. 

![Three Layers, Three Colors](https://raw.github.com/nikolaswise/three-color-icons/master/images/three-layers.png)

## Semantic Ligatures
A ligature is a single glyph that replaces a set of characters. Usually, ligatures are for sets of characters like "fi" or "ffi", replacing them with a single glyph that connects the letterforms. With ligatures, we can replace the set of characters "esri" with our logo from the icon font. 

Using IcoMoon, enabling ligatures is simple. When generating the font, go into the "preferences" panel and check the "enable ligatures" box. 

In a normal ligature-enabled icon font, each icon is a single .svg mapped to a single ligature. Our three color icons expand on that idea - each color layer of each icon is a single .svg. 

Our three esri logo ligatures are "esri", "esrifront", and "esriback". Keeping the names of each icon related maintains semantic clarity with multiple layers for multiple icons.

Generate a single font with all the layers of all your icons - there is practically no limit to how many icons you can store, as each one maps to its own unique set of characters. 

## Color Separations
Creating the multi-color icons is a little more complex than single color icons. In a program like illustrator, figure how your icon will layer. For our esri logo, we're going to use the blue circle for the background, the green landforms for the main layer, and the black coordinate lines as the top layer. 

![Layers of an Icon in Illustrator](https://raw.github.com/nikolaswise/three-color-icons/master/images/layers.png)

Save each layer as an individual .svg file. Here is each layer for our logo on its own art board.

![Color Separations in Illustrator](https://raw.github.com/nikolaswise/three-color-icons/master/images/separations.png)

## Implementation
The CSS that IcoMoon includes with the generated font is an ideal place to start. Creating a class called icon, we can call the icon font within a span. Each icon also needs its own class, so we can match each icon with its layers. The ``:after`` pseudo-element is the top layer, and the ``:before`` pseudo-element is the bottom layer. Since each icon layer is drawn on a square, aligning all three layers is as simple as giving each pseudo-element a negative margin of 1em. This will perfectly align each  layer at every font size.

In this same section, we can also define the colors of each layer. The final markup is a span with a class for the icon font, and a class for the right set of layers.

```
<span class="icon esri-logo">esri</span>	
```
The ``.icon`` class applied the icon font.
```
.icon {
  font-family: 'esri-logo';
}
```
The ``.esri-logo`` class sets the colors . . .
```
.esri-logo {color: #bad045;'}
```
pulls in the proper layers, and sets their colors too.
```
.esri-logo:after {content:"esrifront"; color: #000000}

.esri-logo:before {content:"esriback"; color: #c4dff4}
```

For an example of a robust thre color icon font, check out the [Devicon](http://nikolaswise.github.io/devicons/) project, and start using it and adding to it at the [Devicon Repo](https://github.com/nikolaswise/devicons)
