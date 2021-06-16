const url = process.env.NEXT_API_URL;

module.exports = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "adminnextjs.sayanmukherjee.com",
    ],
  },
  env: {
    url: url,
  },
};
