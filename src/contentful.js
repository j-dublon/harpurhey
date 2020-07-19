const client = require("contentful").createClient({
  space: "882nad0fg965",
  accessToken: "Mx7PfAL9zOGLereyn68TDP6eFqVJRGYmUwqFtZadzOU",
});

const getBlogPosts = () =>
  client.getEntries().then((response) => response.items);

const getSinglePost = (id) =>
  client.getEntries({
    "fields.id": id,
    content_type: "blogPost",
  });

export { getBlogPosts, getSinglePost };
