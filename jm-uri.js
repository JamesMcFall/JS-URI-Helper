/* 
 * JavaScript URI Utility Class
 * 
 * @author James McFall <james@mcfall.geek.nz>
 * @version 1.0
 */
function uri() {


    /**
     * Get a URL segment
     * 
     * This is the same concept as URL segments in CodeIgniter. Getting numbered 
     * chunks from the URL seperated by slashes.
     * 
     * @param <int> Segment number.
     * @return <string|boolean>
     */
    this.segment = function(num) {

        var uri_segments = this.segment_array();

        // Only try to return the segment if it exists.
        if (typeof uri_segments[num] !== "undefined") {
            return uri_segments[num];
        }

        return false;
    }


    /**
     * Get the nth to last url segment (so 1 is last, 2 is second to last etc).
     * 
     * @param <int> Segment number.
     * @return <string|boolean>
     */
    this.segment_nth_to_last = function(num) {

        var uri_segments = this.segment_array().reverse();

        // Take 1 from the num so the positioning is right.
        num -= 1;

        // Only try to return the segment if it exists.
        if (typeof uri_segments[num] !== "undefined") {
            return uri_segments[num];
        }

        return false;
    }


    /**
     * Get all URL segments in an array.
     * 
     * @return <array>
     */
    this.segment_array = function() {
        return window.location.pathname.split('/');
    }


    /**
     * Basic redirect function
     * 
     * @param <string> URL. Can either be simple like "/something" or full url like 
     * "http://www.something.com/something".
     * @return void
     */
    this.redirect = function(url) {
        window.location = url;
    }
    

    /**
     * Get the base url for the current site. 
     * 
     * For example anything on Google would return http://google.com/)
     * 
     * @return <string>
     */
    this.base_url = function() {
        return window.location.origin + "/";
    }
}

/**
 * If the jm var isn't defined, create it. Then add the URI class to it.
 */
if (typeof jm === "undefined") {
    var jm = {}
}
jm.uri = new uri();