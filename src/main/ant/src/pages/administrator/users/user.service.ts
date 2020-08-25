import { request } from 'umi';

export async function queryRule() {
  return request('/api/users');
}
