// const Cifi_Token = artifacts.require("Cifi_Token");
const ARGH_Token = artifacts.require("ARGH_Token");

module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  await deployer.deploy(ARGH_Token, { from: accounts[0], overwrite: false });
  // const argh_token = await ARGH_Token.deployed();
  // const multisignWallet = "0x49c38843b433FcbA6C5fa5876E98350Bf68E6bE6";
  // await argh_token.mint(multisignWallet, BigInt(10 ** 26), {
  //   from: accounts[0],
  // });
};
