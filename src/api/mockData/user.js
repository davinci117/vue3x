import Mock from "mockjs"
const Random = Mock.Random

const data = []
for (let i = 0; i < 20; i++) {
  let template = {
    name: Random.cname(),
    date: Random.date(),
    addr: Random.county()
  }
  data.push(template)
}
export {
  data
}
Mock.mock('/home/getData', 'get', data)