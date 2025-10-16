// import the install service
const installService = require("../services/install.service");
// create a function to handle the install route
async function install(req, res) {
  const installMessage = await installService.install();
  if (installMessage.status === 200) {
    res.status(200).json(installMessage);
  } else {
    res.status(500).json(installMessage);
  }
}
// export the install function
module.exports = {
  install,
};
