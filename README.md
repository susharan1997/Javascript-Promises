# Javascript-Promises
Examples of JavaScript Promises along with their polyfill methods (.all, .any, .allSettled &amp; .race)

To run any file, enter the followinf command in the terminal prompt:-
node [filename].js

Summary:-

Promise.all(): Use when you need all promises to succeed (e.g., making multiple independent API calls).
Promise.any(): Use when you're interested in the fastest successful response (e.g., querying multiple data sources).
Promise.race(): Use when you want to respond to whichever promise settles first, including cases like timeouts.
Promise.allSettled(): Use when you want to get results from all promises, regardless of whether they succeed or fail (e.g., handling multiple tasks where failures are expected).
