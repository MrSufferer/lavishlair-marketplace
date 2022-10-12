import Link from 'next/link'
import { Label, Button, Box } from '@zoralabs/zord'
import { docsLink } from './Header.css'
import { LAIR_ICON } from 'utils/env-vars'

export function DocsLink() {
  return (
    <Link href="/docs" passHref>
      <Button as="a" variant="secondary" className={docsLink}>
        <Box h="x7" w="x7" position="relative">
          <Box
            w="100%"
            h="100%"
            inset="x0"
            as="img"
            borderRadius="curved"
            src={LAIR_ICON}
          />
        </Box>
        <Label size="sm">Docs</Label>
      </Button>
    </Link>
  )
}
