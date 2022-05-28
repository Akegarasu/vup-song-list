module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': {page: "/"},
      '/404': {page: "/404"}
    }
  },
  images: {
    loader: "custom"
  }
};
