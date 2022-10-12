import Link from 'next/link'
import { Button } from '@zoralabs/zord'
import { useAccount } from 'wagmi'
import { manageButton } from './Header.css'

export function DAOLink() {

  return (
    <Link href={process.env.NEXT_PUBLIC_DAO_URL || 'https://lavishlairdao.vercel.app/'} passHref>
      <Button
        as="a"
        size="md"
        variant="secondary"
        className={[manageButton, 'zora-manage-link']}
      >
        DAO
      </Button>
    </Link>
  )
}