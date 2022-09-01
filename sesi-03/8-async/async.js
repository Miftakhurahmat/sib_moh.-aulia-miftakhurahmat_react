// const response = await fetch ('https://fake-tweets-api.herokuapp.com/posts')
// const tweets = await response.json();
// let tweets = tweets.filter(tweet => tweet.stars > 50);
// tweets = tweets.filter(tweet => tweet.rts > 50);
// console.log(tweets);

// const fetchTweets = async () => {
// 	const response = await fetch ('https://fake-tweets-api.herokuapp.com/posts');
// 	const tweets = await response.json();
// 	let tweets = tweets.filter(tweet => tweet.stars > 50);
// 	tweets = tweets.filter(tweet => tweet.rts > 50);
// 	console.log(tweets);
// }

// fetchTweets();
import fetch from 'node-fetch';

(async () => {
	const response = await fetch ('https://fake-tweets-api.herokuapp.com/posts');
	// let tweets = await response.json();
	// let tweets = tweets.filter(tweet => tweet.stars > 50);
	tweets = tweets.filter(tweet => tweet.rts > 50);
	console.log(tweets.length);
})

fetchTweets();