/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ERC721TransferHelper,
  ERC721TransferHelperInterface,
} from "../ERC721TransferHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_approvalsManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ZMM",
    outputs: [
      {
        internalType: "contract ZoraModuleManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isModuleApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516105c73803806105c783398101604081905261002f916100b0565b806001600160a01b03811661009e5760405162461bcd60e51b815260206004820152602b60248201527f6d75737420736574206d6f64756c65206d616e6167657220746f206e6f6e2d7a60448201526a65726f206164647265737360a81b606482015260840160405180910390fd5b6001600160a01b0316608052506100e0565b6000602082840312156100c257600080fd5b81516001600160a01b03811681146100d957600080fd5b9392505050565b6080516104c66101016000396000818160a6015261026d01526104c66000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806315dacbea1461005157806372d2769214610066578063d9fc4b611461008e578063e3e606f0146100a1575b600080fd5b61006461005f366004610401565b6100ed565b005b61007961007436600461044c565b61021f565b60405190151581526020015b60405180910390f35b61006461009c366004610401565b6102e0565b6100c87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610085565b826100f78161021f565b610187576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6d6f64756c6520686173206e6f74206265656e20617070726f7665642062792060448201527f757365720000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301528481166024830152604482018490528616906323b872dd906064015b600060405180830381600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b505050505050505050565b6040517f37436c9800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301523360248301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906337436c9890604401602060405180830381865afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da919061046e565b92915050565b826102ea8161021f565b610375576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6d6f64756c6520686173206e6f74206265656e20617070726f7665642062792060448201527f7573657200000000000000000000000000000000000000000000000000000000606482015260840161017e565b6040517f42842e0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301528481166024830152604482018490528616906342842e0e906064016101e6565b803573ffffffffffffffffffffffffffffffffffffffff811681146103fc57600080fd5b919050565b6000806000806080858703121561041757600080fd5b610420856103d8565b935061042e602086016103d8565b925061043c604086016103d8565b9396929550929360600135925050565b60006020828403121561045e57600080fd5b610467826103d8565b9392505050565b60006020828403121561048057600080fd5b8151801515811461046757600080fdfea26469706673582212201ac03ab402f7a01a0b9500b1eb65cddfe65f2a8aa4b9645775c2006fc28ca05f64736f6c634300080a0033";

type ERC721TransferHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721TransferHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721TransferHelper__factory extends ContractFactory {
  constructor(...args: ERC721TransferHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _approvalsManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721TransferHelper> {
    return super.deploy(
      _approvalsManager,
      overrides || {}
    ) as Promise<ERC721TransferHelper>;
  }
  override getDeployTransaction(
    _approvalsManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_approvalsManager, overrides || {});
  }
  override attach(address: string): ERC721TransferHelper {
    return super.attach(address) as ERC721TransferHelper;
  }
  override connect(signer: Signer): ERC721TransferHelper__factory {
    return super.connect(signer) as ERC721TransferHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721TransferHelperInterface {
    return new utils.Interface(_abi) as ERC721TransferHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721TransferHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721TransferHelper;
  }
}