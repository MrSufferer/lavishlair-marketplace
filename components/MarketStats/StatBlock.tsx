import { Text, Stack } from '@zoralabs/zord'
import { stat } from 'styles/styles.css'
import { lightFont } from '@shared'

export function StatBlock({
  statType,
  statValue,
  statColor = "secondary",
}: {
  statType: string
  statValue: string | number | null | undefined
  statColor?: string
}) {
  return (
    <Stack
      p="x4"
      borderColor="tertiary"
      borderStyle="solid"
      borderWidth="thin"
      borderRadius="phat"
    >
      <Text
        variant={['heading-xs, heading-xl']}
        color={statColor}
        className={[lightFont, stat]}
      >
        {statType}
      </Text>
      <Text variant="heading-xs" className={[lightFont, stat]}>
        {statValue}
      </Text>
    </Stack>
  )
}
