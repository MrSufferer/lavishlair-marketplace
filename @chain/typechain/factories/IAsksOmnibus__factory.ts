/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAsksOmnibus, IAsksOmnibusInterface } from "../IAsksOmnibus";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "cancelAsk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "_expiry",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "_askPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_sellerFundsRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_askCurrency",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_findersFeeBps",
        type: "uint16",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "listingFeeBps",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "listingFeeRecipient",
            type: "address",
          },
        ],
        internalType: "struct AsksDataStorage.ListingFee",
        name: "_listingFee",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
        ],
        internalType: "struct AsksDataStorage.TokenGate",
        name: "_tokenGate",
        type: "tuple",
      },
    ],
    name: "createAsk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_askPrice",
        type: "uint256",
      },
    ],
    name: "createAskMinimal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "address",
        name: "_finder",
        type: "address",
      },
    ],
    name: "fillAsk",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_askPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_askCurrency",
        type: "address",
      },
    ],
    name: "setAskPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAsksOmnibus__factory {
  static readonly abi = _abi;
  static createInterface(): IAsksOmnibusInterface {
    return new utils.Interface(_abi) as IAsksOmnibusInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAsksOmnibus {
    return new Contract(address, _abi, signerOrProvider) as IAsksOmnibus;
  }
}