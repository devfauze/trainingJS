const Author = require("./Author");

const fauze = new Author("Fauze")

const post = fauze.writePost("Titulo", "Lorem ipsem dolor sic...")

post.addComment("Mariana", "Legal!")