import { RouterProvider } from 'react-router-dom'

import DefaultLayout from '~/components/layout'

import { routes } from './routes'

export const Main = () => {
  return (
    <RouterProvider
      fallbackElement={<DefaultLayout render={<p>Carregando...</p>} />}
      router={routes}
    />
  )
}
