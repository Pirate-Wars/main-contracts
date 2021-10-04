// const Cifi_Token = artifacts.require("Cifi_Token");
const ARGH_Token = artifacts.require("ARGH_Token");

module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  await deployer.deploy(ARGH_Token, { from: accounts[0], overwrite: true });
};
