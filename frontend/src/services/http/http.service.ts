import axios from 'axios'
import qs from 'qs'

interface RequestNoData {
  url: string
}

interface RequestWithData<Data> extends RequestNoData {
  data: Data
}

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_GATEWAY_URL,
  paramsSerializer: {
    encode: (params) =>
      qs.stringify(params, { arrayFormat: 'repeat', encodeValuesOnly: true }),
  },
})

instance.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  }
})

export const get = async <Response>({ url }: RequestNoData) => {
  return await instance.get<Response>(url)
}

export const post = async <Response, Data>({
  url,
  data,
}: RequestWithData<Data>) => {
  return await instance.post<Response>(url, data)
}

export const patch = async <Response, Data>({
  url,
  data,
}: RequestWithData<Data>) => {
  return await instance.patch<Response>(url, data)
}
