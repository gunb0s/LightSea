// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract LightSeaNFTMananger is ERC721URIStorage, Ownable, ERC721Enumerable{

    using Counters for Counters.Counter; // counter 라이브러리 사용, Counter={uint256 _value}
    Counters.Counter private _tokenIds; // 발급하는 토큰의 아이디가 0 부터 시작하여, 발급시마다 1씩 증가한다

    constructor() public ERC721("LightSeaNFT","NFT"){}

    // toeknId 에 해당하는 토큰을 from 에서부터 to 로 전송
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721,ERC721Enumerable){
        super._beforeTokenTransfer(from,to,tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override (ERC721, ERC721Enumerable) returns (bool){
        return super.supportsInterface(interfaceId);
    }

    // token Id 에 해당하는 tokenURI 를 반환합니다.
    function tokenURI(uint256 tokenId) public view override (ERC721, ERC721URIStorage) returns (string memory){
        return super.tokenURI(tokenId);
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256){
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId); // nft 를 민팅후
        _setTokenURI(newItemId, tokenURI); //  토큰의 URI 를 설정하고 있다.
        
        return newItemId; // 민팅한 토큰의 ID 를 반환
    }



}