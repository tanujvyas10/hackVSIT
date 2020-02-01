'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xF063eCA272597c4a917EC4D3a1327A929c108387');

exports.default = instance;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUdBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDakIsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBRGlCLFlBRWpCLEFBRmlCLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdGFudWogdnlhcy9EZXNrdG9wL2Jsb2NrY2hhaW4vdHJhbnNhYy1tdW5zaSJ9