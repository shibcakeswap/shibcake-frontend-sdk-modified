import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'

// Values fetched from bitQuery effective 13/8/21
const txCount = 44713126
const addressCount = 2607499

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('Join the Shibcake movement today!')
  const [entrusting] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl">
        {t('The best of both worlds.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Shiba name, Cake rewards.')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('ShibcakeSwap is the platform that allows you to generate even more CAKE rewards in your life with greater earning potential.')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{data ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
        </Text>
      </Flex>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('3 different ways to generate CAKE')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Earn CAKE with pools')}
            bodyText={t('Stake Tokens and get CAKE')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Earn CAKE with farms')}
            bodyText={t('Stake LP Tokens and get CAKE')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Earn CAKE with holding')}
            bodyText={t('Hodl SHIBCAKE and get CAKE')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
