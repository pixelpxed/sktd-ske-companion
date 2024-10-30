module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dungeon',
        permanent: false,
      }
    ]
  },
}