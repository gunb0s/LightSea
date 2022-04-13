<collectoin>Contract
<document>
`{ account: "address", metadataURIs : [...] }`

<collection>tokenData
<document>
`{ tokenId metaDataURI metadata contractAddress: owner: salesHistory: [] isSales: }`

1. Client /explore
   API: GET /api/v1/nfts

   "contract" collection으로부터

   [metadataURIs...]

   각 metadataURI에 대하여
   "tokenData" collection으로부터

   `{ image, contractAddress, tokenID, name, sales }`...

   => enhancement

   "tokenData" collection으로부터
   임의의 개수만

   `{ image, contractAddress, tokenID, name, sales }`

2. Client asset/{contract}/{tokenID}
   API: GET /api/v1/{contract}/{tokenID}

   "tokenData" collection으로부터
   contract와 tokenID와 일치하는

   `{ name, description, image, attributes, tokenID, contractAddress, owner, sales }`

3. Client /account/{address}
   API: GET /api/v1/{address}

   "tokenData" collection으로부터
   address와 일치하는

   `{ image, contractAddress, tokenID, name, sales }`
