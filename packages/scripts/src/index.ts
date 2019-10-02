// import { test } from '@mapbul-pub/common'
import { test } from 'common'
// import { test } from '../../common'
// import { test } from '../../common/src'

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const main = async () => {
  await sleep(500)
  console.log('starting')

  test()
  const t = 70
  console.log(t); console.log(t)
}

main()
// test()
