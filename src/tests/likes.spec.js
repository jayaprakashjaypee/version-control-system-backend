const request = require("supertest");
const app = require("../app");

describe("Likes", () => {
  it("should be able to give a like to the repository", async () => {
    const repository = await request(app)
      .post("/repositories")
      .send({
        login: "mohit",
  id: 244154,
  node_id: "MDQ6VXNlcjI0NDE1NA==",
  avatar_url: "https://avatars.githubusercontent.com/u/244154?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mohit",
  html_url: "https://github.com/mohit",
  followers_url: "https://api.github.com/users/mohit/followers",
  following_url: "https://api.github.com/users/mohit/following{/other_user}",
  gists_url: "https://api.github.com/users/mohit/gists{/gist_id}",
  starred_url: "https://api.github.com/users/mohit/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mohit/subscriptions",
  organizations_url: "https://api.github.com/users/mohit/orgs",
  repos_url: "https://api.github.com/users/mohit/repos",
  events_url: "https://api.github.com/users/mohit/events{/privacy}",
  received_events_url: "https://api.github.com/users/mohit/received_events",
  type: "User",
  site_admin: false,
  name: "mohit",
  company: "Clever",
  blog: "http://mohitgupta.me",
  location: "San Francisco",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 45,
  public_gists: 14,
  followers: 44,
  following: 30,
  created_at: "2010-04-14T20:56:35Z",
  updated_at: "2021-09-28T18:33:18Z"
      });

    let response = await request(app).post(
      `/repositories/${repository.body.id}/like`
    );

    expect(response.body).toMatchObject({
      likes: 1
    });

    response = await request(app).post(
      `/repositories/${repository.body.id}/like`
    );

    expect(response.body).toMatchObject({
      likes: 2
    });
  });

  it("should not be able to like a repository that does not exist", async () => {
    await request(app)
      .post(`/repositories/123/like`)
      .expect(400);
  });
});