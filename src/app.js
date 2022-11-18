const cors = require("cors");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");



const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URL;
try{mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});}catch(err) {
  console.log(err);
  process.exit()
}


const connection = mongoose.connection;
connection.once("open",() => {
  console.log("MongoDB Datbase connection established successfully.");
});

const repositories = [];

//Middlewares

function logRequests(request,response,next){

  const { method, url } = request;  

  const logLabel = `Method: [${method.toUpperCase()}]- Route: ${url}`

  console.time(logLabel)

  next();

  console.timeEnd(logLabel)

}

function validateRepositoryId(request,response, next){
  
  const { id } = request.params;

  if(!isUuid(id)){
    return response.status(400).json({ error: 'Invalid Repository Id.'})
  }

  return next();
}

app.use(logRequests);

app.use('/repositories/:id',validateRepositoryId);

app.get("/repositories", (request, response) => { 

  return response.json(repositories)

});

app.post("/repositories", (request, response) => {
  const { login,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    likes} = request.body;

  const repository = {
    login,
    id: uuid(),
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    likes
  }
  repositories.push(repository)

  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params

  const {login,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    likes} = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id)

  if(repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found'})
  }
  
  const repository = {
    login,
    id,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    likes: repositories[repositoryIndex].likes
  }
  repositories[repositoryIndex] = repository

  return response.json(repository)
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id == id)

  if(repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found' })
  }

  repositories.splice(repositoryIndex,1)
  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  if(repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found' })
  }

  repositories[repositoryIndex].likes++

  return response.json(repositories[repositoryIndex])

});

module.exports = app;
