import React, { createContext, useEffect, useState, useContext } from 'react'
import { useAccount, useSigner } from 'wagmi'
import { AsksV1_2 as AsksV12Interface } from '@chain/typechain/AsksV1_2'
import { AsksV1_2__factory } from '@chain/typechain/factories/AsksV1_2__factory'
import { ZoraModuleManager as ZoraModuleManagerInterface } from '@chain/typechain/ZoraModuleManager'
import { ZoraModuleManager__factory as ModuleManagerFactory } from '@chain/typechain/factories/ZoraModuleManager__factory'
import { ASKS_V12_ADDRESS, MODULE_MANAGER_ADDRESS, defaultProvider } from '@shared'

const defaultModuleManager = ModuleManagerFactory.connect(
  MODULE_MANAGER_ADDRESS,
  defaultProvider
)

const defaultAsksV12 = AsksV1_2__factory.connect(ASKS_V12_ADDRESS, defaultProvider)

export type ContractContext = {
  ModuleManager: ZoraModuleManagerInterface
  AsksV12: AsksV12Interface
  isReadOnly: boolean
}

export const ContractCtx = createContext<ContractContext>({
  ModuleManager: defaultModuleManager,
  AsksV12: defaultAsksV12,
  isReadOnly: true,
})

export function useContractContext(): ContractContext {
  return useContext(ContractCtx)
}

const ContractProvider: React.FC = ({ children }) => {
  const { address } = useAccount()
  const { data: signer } = useSigner()
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false)

  const [ModuleManager, setModuleManager] =
    useState<ZoraModuleManagerInterface>(defaultModuleManager)
  const [AsksV12, setAsksV12] = useState<AsksV12Interface>(defaultAsksV12)

  useEffect(() => {
    if (!signer) {
      return
    }
    if (address && signer) {
      const authorisedModuleManager = ModuleManagerFactory.connect(
        MODULE_MANAGER_ADDRESS,
        signer
      )
      setModuleManager(authorisedModuleManager)
      const authorisedAsksV12 = AsksV1_2__factory.connect(ASKS_V12_ADDRESS, signer)
      setAsksV12(authorisedAsksV12)
      setIsReadOnly(false)
    }
  }, [signer, address])

  useEffect(() => {
    if (!address && !isReadOnly) {
      setModuleManager(defaultModuleManager)
      setAsksV12(defaultAsksV12)
      setIsReadOnly(true)
    }
  }, [address, isReadOnly])

  return (
    <ContractCtx.Provider
      value={{
        ModuleManager,
        AsksV12,
        isReadOnly,
      }}
    >
      {children}
    </ContractCtx.Provider>
  )
}

export { ContractProvider }
