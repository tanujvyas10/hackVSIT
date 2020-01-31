import Web3 from 'web3'
let web3;


if(typeof window !=='undefined' && typeof window.web3!=='undefined'){
   //we are in the browser and meta mast is running
   web3 = new Web3(window.web3.currentProvider);

}else{
    //we are on the brweose or the user is not running metamask
     const provider = new Web3.providers.HttpProvider(
         'https://rinkeby.infura.io/v3/d81441b5d16d46a79dcc2f691d06f94e'
     )

     web3 = new Web3(provider);
     
}

export default web3;