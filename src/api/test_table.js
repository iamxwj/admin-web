import request from '@/utils/test_request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
