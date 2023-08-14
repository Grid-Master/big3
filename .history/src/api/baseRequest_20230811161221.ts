import { IRequestBaseBody } from '../common/interfaces/IRequestBaseBody';
import store from '../configs/redux/store';

const base = process.env.REACT_APP_API;
const token: any = store.getState().AuthorizationReducer.token;

const request = async (url: string, data: IRequestBaseBody) => {
  const headersForToken = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  const headerForMultiPart =
    typeof data.body === 'string'
      ? {
          'Content-Type': 'application/json;charset=utf-8',
        }
      : {};
  const response = await fetch(url, {
    ...data,
    //@ts-ignore
    headers: {
      accept: 'application/json',
      ...headersForToken,
      ...headerForMultiPart,
    },
  });
  if (response.ok) {
    if (response.headers.get('Content-Length') === '0') {
      return true;
    }
    const typeResponse = response.headers.get('Content-Type');
    let result;
    if (typeResponse === 'application/text') {
      result = await response.text();
      return result;
    }
    result = await response.json();
    return result;
  }

  throw { isCustomError: true, status: response.status };
};

export const get = (url: string) => request(`${base}${url}`, { method: 'GET' });

export function post(url: string, body: string | FormData | object) {
  return request(`${base}${url}`, { method: 'POST', body });
}

export const remove = (url: string) => request(`${base}${url}`, { method: 'DELETE' });

export function put(url: string, body: string | FormData | object) {
  return request(`${base}${url}`, { method: 'PUT', body });
}
