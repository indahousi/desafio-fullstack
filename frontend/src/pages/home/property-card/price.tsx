import * as c from '@chakra-ui/react'

import DotIcon from '~/assets/icons/dot.icon'
import { PriceInterface } from '~/interfaces/property/property.interface'
import { convertToMoney } from '~/utils/convert-to-money'

const Price = (props: PriceInterface) => {
  const condo = props.fees.find(
    (fee) => fee.name === 'CONDOMINIO'
  ) as PriceInterface['fees'][0]

  const iptu = props.fees.find(
    (fee) => fee.name === 'IPTU'
  ) as PriceInterface['fees'][0]

  return (
    <c.Flex direction="column" cursor="pointer">
      <c.Flex gap="6px">
        <c.Text fontSize="14px"> Aluguel</c.Text>
        <c.Text fontWeight="bold" fontSize="14px">
          {convertToMoney(props.grossAmount)}
        </c.Text>
      </c.Flex>

      <c.Flex gap="8px" alignItems="center">
        <c.Flex gap="6px">
          <c.Text fontSize="12px" color="black.300">
            Condomínio
          </c.Text>
          <c.Text fontSize="12px">{convertToMoney(condo.amount)}</c.Text>
        </c.Flex>
        <DotIcon />
        <c.Flex gap="6px">
          <c.Text fontSize="12px" color="black.300">
            IPTU
          </c.Text>
          <c.Text fontSize="12px">{convertToMoney(iptu.amount)}</c.Text>
        </c.Flex>
      </c.Flex>
    </c.Flex>
  )
}

export default Price
