import Dinero from 'dinero.js'

export const convertToMoney = (value: Dinero.Options) => {
  return Dinero(value).setLocale('pt-BR').toFormat('$0,0.00')
}
