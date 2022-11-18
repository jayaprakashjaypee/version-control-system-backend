const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const repositoriesSchema = new Schema({
    login:{
        type: String,
        required: true,
        unique: true
    },

  node_id:{
    type: String,
    required: true,
    unique: true
},
  avatar_url:{
    type: String,
    required: true,
    unique: false
},
  gravatar_id:{
    type: String,
    required: true,
    unique: false
},
  url:{
    type: String,
    required: true,
    unique: true
},
  html_url:{
    type: String,
    required: true,
    unique: true
},
  followers_url:{
    type: String,
    required: true,
    unique: true
},
  following_url:{
    type: String,
    required: true,
    unique: true
},
  gists_url:{
    type: String,
    required: true,
    unique: true
},
  starred_url:{
    type: String,
    required: true,
    unique: true
},
  subscriptions_url:{
    type: String,
    required: true,
    unique: true
},
  organizations_url:{
    type: String,
    required: true,
    unique: true
},
  repos_url:{
    type: String,
    required: true,
    unique: true
},
  events_url:{
    type: String,
    required: false,
    unique: false
},
  received_events_url:{
    type: String,
    required: false,
    unique: false
},
  type:{
    type: String,
    required: true,
    unique: true
},
  site_admin:{
    type: Boolean,
    required: true,
    unique: false
},
  name:{
    type: String,
    required: true,
    unique: false
},
  company:{
    type: String,
    required: false,
    unique: false
},
  blog:{
    type: String,
    required: false,
    unique: false
},
  location:{
    type: String,
    required: false,
    unique: false
},
  email:{
    type: String,
    required: false,
    unique: true
},
  hireable:{
    type: String,
    required: false,
    unique: false
},
  bio:{
    type: String,
    required: false,
    unique: true
},
  twitter_username:{
    type: String,
    required: false,
    unique: true
},
  public_repos:{
    type: Number,
    required: false,
    unique: false
},
  public_gists:{
    type: Number,
    required: false,
    unique: false
},
  followers:{
    type: Number,
    required: false,
    unique: false
},
  following:{
    type: Number,
    required: false,
    unique: false
},
  created_at:{
    type: String,
    required: false,
    unique: false
  },
  updated_at:{
    type: String,
    required: false,
    unique: false
},
likes:{
    type: Number,
    required: false,
    unique: false
},
});
const Repositories = mongoose.model("repositories",repositoriesSchema,"repositories");
module.exports = Repositories;
