const request = require("supertest");
const app = require("../app");
const { validate: isUuid } = require("uuid");

describe("Repositories", () => {
  it("should be able to create a new repository", async () => {
    const response = await request(app)
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

    expect(isUuid(response.body.id)).toBe(true);

    expect(response.body).toMatchObject({
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
  updated_at: "2021-09-28T18:33:18Z",
      likes: 0
    });
  });

  it("should be able to list the repositories", async () => {
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

    const response = await request(app).get("/repositories");

    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          id: repository.body.id,
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
  updated_at: "2021-09-28T18:33:18Z",
          likes: 0
        }
      ])
    );
  });

  it("should be able to update repository", async () => {
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
  updated_at: "2021-09-28T18:33:18Z",
      });

    const response = await request(app)
      .put(`/repositories/${repository.body.id}`)
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
        updated_at: "2021-09-28T18:33:18Z",
      });

    expect(isUuid(response.body.id)).toBe(true);

    expect(response.body).toMatchObject({
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
  });

  it("should not be able to update a repository that does not exist", async () => {
    await request(app).put(`/repositories/123`).expect(400);
  });

  it("should not be able to update repository likes manually", async () => {
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

    await request(app)
    .post(`/repositories/${repository.body.id}/like`);

    const response = await request(app)
      .put(`/repositories/${repository.body.id}`)
      .send({
        likes: 15
      });

    expect(response.body).toMatchObject({
      likes: 1
    });
  });

  it("should be able to delete the repository", async () => {
    const response = await request(app)
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

    await request(app).delete(`/repositories/${response.body.id}`).expect(204);

    const repositories = await request(app).get("/repositories");

    const repository = repositories.body.find((r) => r.id === response.body.id);

    expect(repository).toBe(undefined);
  });

  it("should not be able to delete a repository that does not exist", async () => {
    await request(app).delete(`/repositories/123`).expect(400);
  });
});