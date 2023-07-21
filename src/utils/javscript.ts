import ivm from 'isolated-vm'
// import puppeteer from 'puppeteer'
import _ from 'lodash'

export const parseJSON = (str: string) => {
  let result = {}
  try {
    result = JSON.parse(str)
  } catch (e) {}
  return result
}

export const getVariable = (fragment: string, path: string) => {
	// 创建一个新的虚拟机实例
  const isolate = new ivm.Isolate()
	// 在虚拟机中创建一个上下文
  const context = isolate.createContextSync()
  // 在上下文中编译和运行JavaScript代码
  const script = isolate.compileScriptSync(fragment)
  const result = script.runSync(context)
  console.log(result)
  return _.get(result, path)
}

// export const getVariable1 = async (url: string) => {
//   // 启动一个无头浏览器实例
//   const browser = await puppeteer.launch()
//   // 创建一个新的页面
//   const page = await browser.newPage()
//   // 导航到要获取变量值的网页
//   await page.goto(url)
//   // 在页面中执行Javascript代码并获取变量值
//   const variableValue = await page.evaluate('__INITIAL_STATE__')
//
//   console.log(variableValue)
//
//   // 关闭浏览器实例
//   await browser.close()
// }
