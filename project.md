# Three Color Icons

01. Scalability
02. High Pixel Density Displays
03. Multi-color Power
04. Semantic as HELL
05. Flexible color options.
06. Tiny file size for what you get

## The Context
The icon font is recognized and widely used for it's ability to bring small images to the web - easily improving previous methods of populating a website with a set of images.The icon font uses the power of the font rendering to replace letterforms with our own images. There are a lot of really fantastic resources that explain why icon fonts are so awesome in more depth. 

[ Find links here ]

## Problems with the Icon Font
The main problem with icon fonts is that their necessarily monochromatic: you can change the color with the same ease as changing the color of your type, but you're stuck with that one color. This method of creating a set of icons removes that barrier, letting you create sets of icons with three colors a piece. Creating the set of icons is a little more involved than a single color icon set, but with most of the work happening before you even generate the font, it's simple enough to get it done.

## The Technique 
We'll be using fantastic IcoMoon to generate our font, which happily supports ligatures. For each icon, we create three layers, and using IcoMoon map each of those layers to a ligature. Then, using :before and :after pseudo elements, we can  tie the three layers of the icon together into a single element.  By giving each pseudo element the a negative margin of 1em, we can align each layer with itself perfectly, since each layer of the icon is drawn on a square canvas - exactly 1em tall and 1em wide no matter what it's drawn font size. We can then define the color for each layer of the icon, and even create class selectors to easily change the primary or even secondary color of each icon. 

Example: http://nikolaswise.github.io/three-color-icons/

## The Walkthrough
We'll walk through the entire process of creating a three color icon with the Esri logo - going through each step. 
01. Color Separations
02. Generating the Font
03. Define the Icon Style
04. Define Color Options
05. Implement that sucker.

### Step One - Color Separations for your Icon
Proper color separation is essential for making the final multi-color icon seamlessly look like it's one coherent image. We can use some old color separation tricks from the age of print to ensure proper rendering, but the main thing to keep in mind is the order of the three layers. The :before element will be our bottom layer, the :after element will be our top layer, with the third layer living between the two. That middle layer is the one that gets printed in the DOM tree, so it's good to have that one able to live on it's own - having that layer do the heavy lifting in terms of defining the image, and using the other two layers to get your colors. For the Esri logo, our background color will be the blue of the oceans, the our middle layer will be the green of the landmasses, and our top layer will be the black of the coordinate grid. This will minimize the amount of clipping we'll have to deal with, though the order has examined for each icon individually. 

#### The Background Layer
Pick the color that has the broadest coverage, and with the most shapes going over it. Our background layer will be blue circle -   we don't have to cut out the shapes of the landmass, since it's a layer that will be sitting on top of the blue. Having the bottom color extend below the layers that will come on top of it is called "trapping", and smart use of trapping is essential on more complicated logos, especially ones that contain negative space. This will be our :before element.

### The Central Layer
Luckily, the Esri logo has some really simple layering. Our central layer is the green landmasses, sandwiched neatly between our other two layers. In general having the central layer make sense on it's own could be a bonus, but it's hardly a hard and fast rule. As long as the layer makes sense, things will work out. This will be the main icon rendered by the font.

### The Top Layer
Finally, the black coordinate lines sit on top of the whole thing. This will be our :after element.

### Step Two - Generating the Font
After doing the layer separations, put each of the layers into it's own art board. This will give us a set of .svg files, one for each layer shape. Head over to IcoMoon and start a new project. Import each .svg icon shape, and generate a font. Enable ligatures, and name each layer of the icon something semantic. We're naming our central layer "esri", our foreground "esrifront" and our background "esriback". Generate the font file and we're ready to go. 

### Define the Icon style 
Using the three color icon font is identical to using any other icon font - bring it in and import the font file using font-face. IcoMoon's generated css files work really well for this, though I'm bringing it into SASS for added control. 

The first thing we do is define the class ".icon", and tell it to apply our icon font, adding in the options to enable ligatures (not shown here, again IcoMoon's CSS is a fantastic resource for getting this right).

---
.icon {
  font-family: 'esri-logo';
}
---

Create a span with the class of "icon", and drop your semantic ligature in there.

---
<span class="icon">esri</span>	
---

Now we have your basic, one-color semantic icon. Time to get tricky with it. In a file called "layers", we'll define the three colors of our icon.

---
$green: #bad045;
$blue: #c4dff4;
$black: #000000;
---

Next, we bring in our other layers. Creating another class called .esri-logo, we bring in our other two shapes by filling the content with their ligatures.

---
.esri-logo {
	&:after {content:"esrifront"}
	&:before {content:"esriback"}
}

<span class="icon esri-logo">esri</span>	
---

Apply the correct color to each of the icon layers.

---
.esri-logo {
	color: $green;
	&:after {content:"esrifront"; color: $black}
	&:before {content:"esriback"; color: $blue}
}
---

And give each pseusdo-element a negative margin of 1em to align each piece in top of the other. 

---
.esri-logo {
	color: $green;
	&:after {content:"esrifront"; color: $black; margin-left: -1em;}
	&:before {content:"esriback"; color: $blue; margin-right: -1em;}
}
---

And there it is. A three color, semantic icon built from a single icon font. 


