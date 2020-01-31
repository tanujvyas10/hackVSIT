const HDWalletProvider= require('truffle-hdwallet-provider')
const Web3 = require('web3')
//const {interface, bytecode} = require('./compile')
const compiledFactory= require("./build/CampaignFactory.json")

const provider = new HDWalletProvider(
 'nose quiz tiny camera under elbow twice speed jealous world oppose slow',
 'https://rinkeby.infura.io/v3/d81441b5d16d46a79dcc2f691d06f94e'
);
const web3 = new Web3(provider)

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from accounts",accounts[0])
  
 const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data:compiledFactory.bytecode})
  .send({gas:'1000000',from :accounts[0] })
    console.log(compiledFactory.interface)
  console.log('contract deployed to ',result.options.address)
}

deploy();