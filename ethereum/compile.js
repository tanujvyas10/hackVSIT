const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);//used to remove build folder and everything inside it


const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contracts;


fs.ensureDirSync(buildPath);// ensure if directory exist,if not ,it will create for us


//console.log(output)
for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath,contract.replace(/:/g,'')+'.json'),
        output[contract]
    );
}