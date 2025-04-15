const isGithubPages = process.env.DEPLOY_TARGET === "GH_PAGES";

module.exports = {
  output: "export",
  basePath: isGithubPages ? "/g2b-static" : "",
  assetPrefix: isGithubPages ? "/g2b-static/" : "",
  trailingSlash: true,
};
