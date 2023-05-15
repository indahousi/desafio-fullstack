import { createBrowserRouter, Outlet } from 'react-router-dom'

import DefaultLayout from '~/components/layout'
import Error404 from '~/pages/404-error'
import HomePage from '~/pages/home'
import PropertyPage from '~/pages/property'
import {
  getProperties,
  getProperty,
} from '~/services/endpoints/properties.service'

import { RequireSeo } from './custom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout render={<Outlet />} />,
    children: [
      {
        index: true,
        element: (
          <RequireSeo title="Housi | Desafio FullStack">
            <HomePage />
          </RequireSeo>
        ),
        loader: async () => {
          const properties = (await getProperties()).data

          return { properties }
        },
      },
    ],
  },
  {
    path: 'properties/:id',
    element: <DefaultLayout render={<Outlet />} />,
    children: [
      {
        index: true,
        element: (
          <RequireSeo title="Housi | Desafio FullStack">
            <PropertyPage />
          </RequireSeo>
        ),
        loader: async ({ params }) => {
          const property = (await getProperty(params?.id as string)).data

          return { property, price: property.price }
        },
      },
    ],
  },
  {
    path: '*',
    element: (
      <RequireSeo title="Erro 404">
        <DefaultLayout render={<Error404 />} />
      </RequireSeo>
    ),
  },
])
