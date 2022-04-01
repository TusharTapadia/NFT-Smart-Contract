import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DragoniaTest',
  tokenName: 'Dragonia Test3',
  tokenSymbol: 'DGTC',
  hiddenMetadataUri: 'ipfs://QmYQKLY2x2k4y2jcvbwWSozwwYJUg2hN1DAy34Xi82chsX/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x1209364D584b8baC34C5955ab24AE6E6531Aa913",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
  royaltyFeesInBips: 300,
};

export default CollectionConfig;
