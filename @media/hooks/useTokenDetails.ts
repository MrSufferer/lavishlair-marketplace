import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'

import ipfsReplacer from '../utils/ipfsReplacer'

export const useTokenDetails = ({ id = '', tokenURI = '' } = {}) => {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (tokenURI) {
      fetch(ipfsReplacer(tokenURI)).then(
        async (response) => {
          const text = await response.text()
          try {
            const json = JSON.parse(text)
            setName(json.name)
            setImage(ipfsReplacer(json.image || json.image_url))
          } catch (error) {
            console.warn(error)
            setImage(text)
          }
        },
        async (reason) => {
          // Try through API to circumvent CORS
          const response = await fetch(`/api/metadata/${id}`)
          const text = await response.text()

          try {
            const json = JSON.parse(text)
            setName(json.name)
            setImage(ipfsReplacer(json.image || json.image_url))
          } catch (error) {
            setImage(text)
          }
        },
      )
    }
  }, [tokenURI])

  return { name, image }
}
