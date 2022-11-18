by using postman app you can perform action like this 

method (post):-   http://localhost:3001/repositories  you can fetch this link in frontend part like this :- 
                   var response = await axios.get('http://localhost:3001/repositories') then 
 you can perform the all operation post , get , create etc.


  put the data in body like :-etc..
  
  {
  "login": "mohit",
  "id": 244154,
  "node_id": "MDQ6VXNlcjI0NDE1NA==",
  "avatar_url": "https://avatars.githubusercontent.com/u/244154?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mohit",
  "html_url": "https://github.com/mohit",
  "followers_url": "https://api.github.com/users/mohit/followers",
  "following_url": "https://api.github.com/users/mohit/following{/other_user}",
  "gists_url": "https://api.github.com/users/mohit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mohit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mohit/subscriptions",
  "organizations_url": "https://api.github.com/users/mohit/orgs",
  "repos_url": "https://api.github.com/users/mohit/repos",
  "events_url": "https://api.github.com/users/mohit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mohit/received_events",
  "type": "User",
  "site_admin": false,
  "name": "mohit",
  "company": "Clever",
  "blog": "http://mohitgupta.me",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 45,
  "public_gists": 14,
  "followers": 44,
  "following": 30,
  "created_at": "2010-04-14T20:56:35Z",
  "updated_at": "2021-09-28T18:33:18Z"
}
