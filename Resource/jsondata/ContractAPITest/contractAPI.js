const Web3 = require('web3');
const axios = require('axios');
const projectContractList = require('./../contract.json');
const accountList = require('./../account.json');


const JSONRPCProvider = "https://ropsten.infura.io/v3/a1bc0c089cfe453da7dbc031544787c4";
const web3 = new Web3(JSONRPCProvider);

const myAccount = accountList[0].address;

// ethereum 계정의 잔액 확인하기
web3.eth.getBalance(myAccount)
.then((balance)=>{
    let ethereum = web3.utils.fromWei(balance,'ether');
    console.log(`지갑 [${myAccount}] 의 이더리움 개수 : ${ethereum} ETH`);
})


// contract 객체 구하기
let ABI = projectContractList.LightSeaNFTManager.ABI;
let CA = projectContractList.LightSeaNFTManager.CA;

const LightSeaNFTManager = new web3.eth.Contract(ABI,CA);

// NFT 이름 요청하기
LightSeaNFTManager.methods.name().call((err,value)=>{
    if(err){console.log(err)}
    else{
        console.log(`NFT 명칭 : ${value}`);
    }
})

// NFT symbol 요청하기
LightSeaNFTManager.methods.symbol().call((err,value)=>{
    if(err){console.log(err)}
    else{
        console.log(`NFT 심볼 : ${value}`);
    }
})

// NFT 총 발행 개수 요청하기
LightSeaNFTManager.methods.totalSupply().call((err,value)=>{
    if(err){console.log(err)}
    else{
        console.log(`NFT 총 발행개수 : ${value} 개`);
    }
})

let tokenID = 1;

// NFT의 TokenID 에 해당하는 값으로 URI (메타데이터) 요청하기
LightSeaNFTManager.methods.tokenURI(tokenID).call((err,metadataURI)=>{
    if(err){console.log(`입력한 토큰 아이디는 아직 발행하지 않아 존재하지 않는 토큰 Id 입니다`)}
    else{
        console.log(metadataURI);
    }
})

// Account 가 소유하고 있는 NFT 개수 요청하기
LightSeaNFTManager.methods.balanceOf(myAccount).call((err,value)=>{
    if(err){console.log(err)}
    else{
        console.log(`address[${myAccount}] 가 소유한 NFT 개수 : ${value} 개`);
    }
})

// TokenID 로 해당 토큰의 주인 찾기
LightSeaNFTManager.methods.ownerOf(tokenID).call((err,value)=>{
    if(err){console.log(`요청한 토큰 ID 는 유요하지 않아 주인을 찾을수가 없습니다`)}
    else{
        console.log(`tokenID '${tokenID}' 의 주인은 ${value} 입니다.`);
    }
})

//IPFS URI 를 이용하여 데이터 요청하기
async function getDataFromIPFSURI(URI){
    // URI 는 'ipfs://HASH' 의 형태이다. 7번째 자리부터 잘라 baseURI 끝에 붙여 GET 요청할 URI 를 완성합니다.
    let baseURI = "https://ipfs.io/ipfs/";
    let requestURI = baseURI.concat(URI.slice(7)); // metadata

    let response = await axios.get(requestURI);

    return response.data; //promise
}

let metadataURI = 'ipfs://QmX7nyJeHUnYwBYwqFscUuGUiFucuPqkZDGbFP3bpR9kzX';

let metadata = getDataFromIPFSURI(metadataURI);
metadata.then((data)=>{
    console.log(data);
})
