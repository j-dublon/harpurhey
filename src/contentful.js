const client = require("contentful").createClient({
  space: "882nad0fg965",
  accessToken: "CFPAT-zC_mPQi6w0JMVXHjulXQFzYJqUrH8YrbiT82L8z0KIU",
});

const getBlogPosts = () =>
  client.getEntries().then((response) => response.items);

const getSinglePost = (id) =>
  client
    .getEntries({
      "fields.id": id,
      content_type: "blogPost",
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };
