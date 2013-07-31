# Three Color Icon Font

A proof-of-concept at creating a font that will semantically deliver three color icons with an icon font. The basic markup is very simple:

```
<span class="icon-font">html</span>
```

The font will use ligatures and ```:before``` and ```:after``` pseudo elements which are each offset so all the elements align. Because the extra colors are done in pseudo elements, they won't be read by screen-readers. And as the main element is a ligature, it can be very semantic.

## Using Icomoon

To modify your generated font, use the *dev.svg* file, located in the *fonts* folder in this package. You can import this dev.svg file to the IcoMoon app. All the tags (class names) and the Unicode points of your glyphs are saved in this file.

See the documentation for more info on how to use this package: http://icomoon.io/#docs/font-face