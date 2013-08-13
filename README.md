JS-URI-Helper
=============

A small JavaScript utility class to bring in a few URI operations I regularly use.

* * *

## Usage

### Including the file
First off include the Javascript file in your application or on your site.
````
<script src="/public/javascript/jm-uri.js"></script>
````

### Methods

#### jm.uri.segment()
This allows you to access a URL segment. For example if you wanted the segment "two" in the url "/one/two/three/four" you can go:

```
var segment2 = jm.uri.segment(2);
// segment2 will be set to "two"
```

#### jm.uri.segment_nth_to_last()
This allows you to get segments relative to the end of the URI. So if you wanted the second to last segment of "/one/two/three/four" you can go:

```
var secondToLastSegment = jm.uri.segment_nth_to_last(2);
// secondToLastSegment will be set to "three"
```

#### jm.uri.segment_array()
This method returns an array of URL segments. Again the URL is "/one/two/three/four".

```
var segments = jm.uri.segment_array();
/*
segments[0] == ""
segments[1] == "one"
segments[2] == "two"
segments[3] == "three"
segments[4] == "four"
*/
```

#### jm.uri.redirect()
A basic wrapper for window.location. You can redirect to a page by going:

```
jm.uri.redirect("/thank-you");
```

#### jm.uri.base_url()
Returns the site root of the current site.

```
// You are on http://mysite.com/some-awesome-category/an-even-more-awesome-page
var base = jm.uri.base_url();
// base is set to http://mysite.com/

```
