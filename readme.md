# For Fit Sake

### A jQuery `object-fit` polyfill for Internet Explorer and Edge

**For Fit Sake** is a pollyfill for browsers that [do not support](http://caniuse.com/#feat=object-fit) the CSS property `object-fit`. Inspired by [this Medium post](https://medium.com/@primozcigler/neat-trick-for-css-object-fit-fallback-on-edge-and-other-browsers-afbc53bbb2c3), currently the only requirement is **jQuery**.

The plugin will only currently `object-fit` images (we've yet to encounter a use case where it would be anything else). It already includes the `Modernizr` check, so no extra libraries are needed.

It works by applying the image as a background image in unsupported browsers to it's parent so you can use `background-size`. 

### Configuration

`forFitSake` has only two configuration options:

| Parameter          | Default           | Description                                                                                           |
|--------------------|-------------------|-------------------------------------------------------------------------------------------------------|
| `class`            | `'hasForFitSake'` | The class applied to the element if it does not support `object-fit` (without the `.`)                |
| `includeDetection` | `true`            | Whether to include the Modernizr detection (only set to false if you have already included Modernizr) |

e.g.

```
$('div').forFitSake({
	class: 'hasForFitSake',
	includeDetection: true
});
```

### Example

HTML:

```
<div class="parent">
	<img src="path/to/image">
</div>
```

CSS:

```
.parent {
	width: 12rem;
	height: 12rem;
	background: center no-repeat;
	background-size: cover; /* Should match the object-fit prop */
}
.parent img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.hasForFitSake img {
	visibility: hidden;
}
```

JS:

_The selector is the parent containing the image_

```
$('.parent').forFitSake();
```
