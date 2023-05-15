import * as c from '@chakra-ui/react'
import { DineroObject } from 'dinero.js'
import { useLoaderData } from 'react-router-dom'

import { PropertiesShowLoaderInterface } from '~/interfaces/property/property.interface'
import { convertToMoney } from '~/utils/convert-to-money'

export default function Booking() {
  const { property } = useLoaderData() as PropertiesShowLoaderInterface

  return (
    <c.Box
      bg="black.0"
      p="16px"
      w="full"
      h="fit-content"
      maxW="400px"
      rounded="8px"
    >
      <c.Heading fontSize={20} fontWeight={700} color="black.500">
        {`Housi: ${property.name}`}
      </c.Heading>
      <Pricing />
      <Submit />
    </c.Box>
  )
}

export const style = {
  content: "' '",
  display: 'inline-block',
  verticalAlign: 'middle',
  borderTop: '1px solid #E0E0E0',
  width: '100%',
  margin: 'auto 5px',
}

function Pricing() {
  const { price } = useLoaderData() as PropertiesShowLoaderInterface

  return (
    <c.Flex mt="12px" direction="column" gap={2}>
      <c.Text
        fontSize={14}
        fontWeight={500}
        color="black.500"
        display="flex"
        whiteSpace="nowrap"
        w="100%"
        _before={style}
        _after={style}
        my="12px"
      >
        Valores na assinatura
      </c.Text>

      <PriceLabel label="Aluguel" value={price.netAmount} />
      <PriceLabel label="Condomínio" value={price.feesAmount} />
      <PriceLabel label="IPTU" value={price.feesAmount} />
      <PriceLabel label="TV/Internet" value={price.feesAmount} />
      <TotalPrice label="Total mensal" value={price.grossAmount} />
    </c.Flex>
  )
}

interface PriceLabelProps {
  value: DineroObject
  label: string
}

function PriceLabel({ label, value }: PriceLabelProps) {
  return (
    <c.Flex justifyContent="space-between">
      <c.Text fontSize="14px" color="black.400" fontWeight={700}>
        {label}
      </c.Text>
      <c.Text fontSize="14px" color="black.400" fontWeight={700}>
        {convertToMoney(value)}
      </c.Text>
    </c.Flex>
  )
}

function TotalPrice({ label, value }: PriceLabelProps) {
  return (
    <c.Flex mt="12px" justifyContent="space-between">
      <c.Text fontSize="18px" color="black.500" fontWeight={700}>
        {label}
      </c.Text>
      <c.Text fontSize="18px" color="black.500" fontWeight={700}>
        {convertToMoney(value)}
      </c.Text>
    </c.Flex>
  )
}

function Submit() {
  return (
    <c.Flex mt="32px">
      <c.Button
        color="black.0"
        fontSize="16px"
        fontWeight={700}
        py={2.5}
        px={4}
        minH="44px"
        w="full"
        bg="primary.400"
        transition="all 0.2s ease"
        _hover={{
          bg: 'primary.500',
        }}
      >
        Reservar
      </c.Button>
    </c.Flex>
  )
}
