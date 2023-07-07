/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: "https://discord.gg/epHmvJHVvt",
        permanent: true,
      },
      {
        source: '/support',
        destination: "https://discord.gg/epHmvJHVvt",
        permanent: true,
      },
      {
        source: '/invite',
        destination: "https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560",
        permanent: true,
      },
      {
        source: '/vote',
        destination: "https://top.gg/bot/1057995097167368222/vote",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
