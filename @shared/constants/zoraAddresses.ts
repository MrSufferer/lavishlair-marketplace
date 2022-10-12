import mainnetV3 from '@chain/addresses/1.json'
import goerliV3 from '@chain/addresses/5.json'
import { NETWORK_CHAIN_ID } from '@shared/utils/connectors'

export const MODULE_MANAGER_ADDRESS =
  NETWORK_CHAIN_ID === 1 ? mainnetV3.ZoraModuleManager : goerliV3.ZoraModuleManager

export const ASKS_V12_ADDRESS =
  NETWORK_CHAIN_ID === 1 ? mainnetV3.AsksV1_1 : goerliV3.AsksV1_2

export const ERC721_TRANSFER_HELPER_ADDRESS =
  NETWORK_CHAIN_ID === 1 ? mainnetV3.ERC721TransferHelper : goerliV3.ERC721TransferHelper

export const ERC20_TRANSFER_HELPER_ADDRESS =
  NETWORK_CHAIN_ID === 1 ? mainnetV3.ERC20TransferHelper : goerliV3.ERC20TransferHelper
