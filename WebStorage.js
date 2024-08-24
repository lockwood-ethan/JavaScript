/* The Web Storage API provides storage objects that allow JavaScript programs to securely store key/value pairs in the web browser.

The Web Storage API supports two storage objects:

sessionStorage - Stores key/value pairs for an origin that are only available for the duration of the session. Closing the browser or browser tab ends the session

localStorage - Stores key/value pairs for an origin that are stored indefinitely

An origin is a combination of scheme, hostname, and port number in a URL. 

Examples of different origins:

http://example.com/
http://www.example.com/
https://www.example.com/
http://www.example.com:8080/

The browser stores the data for each origin separately and does not share the data between origins */

// The localStorage and sessionStorage objects provide methods for storing data, retrieving data, and removing data
setItem(key, value) // Stores the key string and associated value string in storage
getItem(key) // Returns the value associated with the key in storage or null if the key does not exist
removeItem(key) // Removes the key and associated value from storage
clear() // Removes all keys and associated values from storage

