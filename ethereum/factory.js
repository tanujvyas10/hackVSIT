import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'


const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0xF063eCA272597c4a917EC4D3a1327A929c108387'
);

export default instance;
//import web3 from './web3'
// import CampaignFactory from './build/CampaignFactory.json'
// let web3;
// console.log("-->",window);
// console.log("-->",typeof window.web3);


// if(typeof window.web3 !=='undefined'){
//    //we are in the browser and meta mast is running
//    web3 = new Web3(window.web3.currentProvider);

// }
// else{
//     //we are on the brweose or the user is not running metamask
//      const provider = new Web3.providers.HttpProvider(
//          'https://rinkeby.infura.io/v3/d81441b5d16d46a79dcc2f691d06f94e'
//      )

//      web3 = new Web3(provider);
     
// }

// const instance =web3.eth.Contract(
// JSON.parse(CampaignFactory.interface),
// '0xF063eCA272597c4a917EC4D3a1327A929c108387'
// );

// export default instance;