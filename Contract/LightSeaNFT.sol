// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LightSeaNFT is ERC721{
    using Counters for Counters.Counter; // Counters 라이브러리 사용
    Counters.Counter private currentTokenId;

    string public baseTokenURI;

    constructor() ERC721("LightSeaNFT","LST"){
        baseTokenURI = "";
    }

    // NFT 를 발행합니다.
    function mintTo(address recipient) public returns (uint256){
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient,newItemId);
        return newItemId;
    }

    // token 에 부여된 URI 를 반환합니다
    function _baseURI() internal view virtual override returns (string memory){
        return baseTokenURI;
    }

    // URI 접두사 설정
    function setBaseTokenURI (string memory _baseTokenURI) public{
        baseTokenURI = _baseTokenURI;
    }

    
}