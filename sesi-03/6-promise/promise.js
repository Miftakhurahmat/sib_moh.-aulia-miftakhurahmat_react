// fetch ('https://fake-tweets-api.herokuapp.com/posts')
// 	.then (Response => {
// 		return Response.json()
// 	}).then(tweets => {
// 		return tweets.filter(tweet => {
// 			return tweet.stars > 50;
// 		})
// 	}).then(tweets => {
// 		return tweets.filter(tweet => {
// 			return tweet.rts > 50;
// 		})
// 	}).catch(err => {
// 		console.error(error);
// 	});
import fetch from 'node-fetch';

fetch ('https://fake-tweets-api.herokuapp.com/posts')
	.then(Response => Response.json())
	// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
	// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
	.then(tweets => {
		let size = tweets.length
		console.log(size)
	})
	.catch(err => {
		console.error(error);
	});