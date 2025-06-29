const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_KEY);
const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);

module.exports = {
  getBalance: async () => {
    return await wallet.getBalance();
  },
  sendTransaction: async (to, value) => {
    const tx = {
      to,
      value: ethers.utils.parseEther(value.toString())
    };
    return await wallet.sendTransaction(tx);
  }
};