/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID:"563930104528-10m1nnb10c5kq7dn5ml9k7jteod1atuc.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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",
    SECRET:"aksnf;dnf;aksndf;asdknfasfdasdfaewew",
    NEXT_APP_YT_API_KEY:"AIzaSyBq1EIztFBZ5AiYvBjYLTDKLKBFGbUiv0s",
    NEXTAUTH_URL:"http://localhost:3000"
  },
  images: {
    domains: ['lh3.googleusercontent.com','i.ytimg.com',"yt3.ggpht.com"],
  },
}

module.exports = nextConfig
