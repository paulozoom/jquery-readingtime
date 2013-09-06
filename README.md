# jQuery Reading Time

jQuery Plugin to estimate the reading time of any element.

## Installation

- Raw source: [original](https://raw.github.com/paulozoom/jquery-readingtime/master/jquery.readingtime.js) / [minified](https://raw.github.com/paulozoom/jquery-readingtime/master/jquery.readingtime.min.js)
- [Download repository as .zip](https://github.com/paulozoom/jquery-readingtime/archive/master.zip)
- Bower: `bower install jquery-readingtime`

## Usage

Call `.readingtime()` on any element, and it **returns an integer** with the estimated reading time in **minutes**.  

**Note:** When called on multiple elements, it calculates reading time for the first element in the set.


## Examples

Reading time on a **single** element.
```javascript
$("article:first").readingtime();
```

Since the plugin only calculates the reading time for the first element, you can simply do:
```javascript
$("article").readingtime();
```

To calculate reading time for multiple elements, just iterate:
```javascript
$("article").each(function() {
  $(this).readingtime();
});
```


## Options

Reading Time takes an options object, with two options.

- `wpm`: integer, reading speed in *words per minute*. Default: `250`.
- `round`: string, `Math` method to call for rounding. Default: `'round'`

Example:

```javascript
$("article:first").readingtime({wpm: 300, round: 'ceil'});
```


## Real-life example

How to use it to add an estimated reading time to every blog post:

```javascript
// For each blog post
$("article").each(function(){

  // Calculate Reading Time
  var ert = $(this).readingtime();

  // Append it to post header if not zero
  if (ert > 0) {
    $(this).find('> header').append('<p>' + ert + ' min reading time</p>');
  }
});
```
