# Takashi Murakami DOP-Eye (work in progress)

## Table of Content

-   [THE PROJECT](#the-project)
-   [LIVE DEMO](#live-demo)
-   [DEVELOPER ROADMAP](#roadmap)

## The Project <a name="the-project"></a>

During the first week of the Coding Bootcamp at SPICED, I became curious about the possibilities of the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) and the use of div elements or svgs as [vector graphics](https://en.wikipedia.org/wiki/Vector_graphics). As an artist I use vector graphics very often because of the advantages of scaling the graphic and I didn't work with an svg in the context of HTML yet. I also want to demonstrate my knowledge of pre-[ES6](https://www.w3schools.com/js/js_es6.asp) JavaScript. So I came up with the idea of ​​recreating a responsive version of [Takashi Murakmie's](https://en.wikipedia.org/wiki/Takashi_Murakami) jelly fish eyes (see photos).

<img src="https://fineartmultiple.de/media/product/6f4/jellyfish-eyes-tmu-43-1501160216-300-dbd.jpg" width="250"> <img src="https://d16kd6gzalkogb.cloudfront.net/__sized__/auction_artwork_images/Takashi-Murakami-Jellyfish-Eyes-Painting-2000-thumbnail_webp-9999x9999.webp" width="250"> <img src="https://www.kollerauktionen.ch/CatCache/catcache.3/pictures/446492/446492_m_1.jpg" width="250">

The eye is composed of div and svg elements and reacts to user clicks. In the case of a click, a random RGB code is created and the respective element is colored accordingly. Two arrays monitor the user's steps in the background. In the event of five seconds of inactivity, the steps will be played back and the eye colors will be reset to their origin. That's it.

Nonetheless, I'd like to expand the eye in the future with more ways to play around with it. For example, I would like to offer the possibility to scroll through your own steps by holding the left mouse button or to download the result as an image. I could also imagine a second post-ES6 version of the eye to showcase that I know about the differences.
<a name="live-demo"></a>
Visit the [life demo](https://codepen.io/sirpixiejerry/pen/eYVXRLW) to try it yourself.

### DEVELOPER ROADMAP <a name="roadmap"></a>

-   [x] main feature to click the eyes eements and change it's color
-   [x] array that keeps track of the users steps
-   [x] rewind after five seconds to the origin colors
-   [ ] add a pop-up that explains the functionality
-   [ ] possibility to scroll through the steps taken
-   [ ] possibility to download the result

### DEVELOPER NOTES

-   explore the possibilities of hsl instead of rgb
-   in case of a rewind a variable to chancel setTimeout is needed. The array needs to be deleted and a variable needs to be set to count through the array
