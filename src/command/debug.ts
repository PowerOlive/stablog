import Base from '~/src/command/base'
import MBlog from '~/src/model/mblog'
import fs from 'fs'
// import path from 'path'
// import jsPDF from '~/src/library/pdf/jspdf.node.js'
// import { BrowserWindow } from 'electron'
// import CommonUtil from '~/src/library/util/common'
// import { TypeTransConfigPackageList } from './generate/trans_config'
// import imageSize from 'image-size'

// const outputUri = path.resolve('F:/www/share/github/stablog/缓存文件/pdf_debug_1.pdf')
// /**
//  * 单张页面渲染时间不能超过20秒
//  */
// const Const_Render_Html_Timeout_Second = 20
// /**
//  * 渲染webview最大高度(经实验, 当Electron窗口高度超过16380时, 会直接黑屏卡死, 所以需要专门限制下)
//  */
// const Const_Max_Webview_Render_Height_Px = 5000

// // 硬编码传入
// // let globalSubWindow: InstanceType<typeof BrowserWindow> = null
// const Const_Default_Webview_Width = 760;
// const Const_Default_Webview_Height = 10;


class CommandDebug extends Base {
  static get signature() {
    return `
    debug
     `
  }

  static get description() {
    return '专业Debug'
  }

  async execute() {
    // let configUri = path.resolve("F:/www/share/github/stablog/缓存文件/pdf_html_config.json")
    // let content = fs.readFileSync(configUri).toString()


    // let weiboDayConfigList = JSON.parse(content)
    // this.generatePdf([
    //   ...weiboDayConfigList,
    //   ...weiboDayConfigList,
    //   ...weiboDayConfigList,
    //   ...weiboDayConfigList,
    //   ...weiboDayConfigList,
    //   ...weiboDayConfigList,
    // ])
    // let result = await MBlog.autoUpdate()
    // this.log(`debug it`)
    // console.log(result)
  }

  // async generatePdf(weiboDayList: TypeTransConfigPackageList) {

  //   let doc = new jsPDF({
  //     unit: 'px',
  //     format: [Const_Default_Webview_Width, 500],
  //     orientation: "landscape"
  //   })
  //   // let fontUri = path.resolve(__dirname, '../../public/font/alibaba_PuHuiTi_Regular.ttf')
  //   // let fontContent = fs.readFileSync(fontUri)
  //   // let fontName = "alibaba_PuHuiTi_Regular"

  //   // doc.addFileToVFS(`${fontName}.ttf`, fontContent.toString("base64"))
  //   // doc.addFont(`${fontName}.ttf`, fontName, "normal")
  //   // doc.setFont(fontName, "normal");
  //   // doc.setFontSize(32)

  //   // demo =>  yaozeyuan93-微博整理-第1/2卷-(2011-07-07~2012-01-25)
  //   let rawBooktitle = 'yaozeyuan93-微博整理-第1/2卷-(2011-07-07~2012-01-25)'//this.bookname
  //   let contentList = rawBooktitle.split(`-微博整理-`)
  //   let accountName = contentList[0]

  //   let timeRangeStartAt = contentList[1].indexOf('(')
  //   let timeRangeEndAt = contentList[1].indexOf(')')
  //   let timeRangeStr = contentList[1].slice(timeRangeStartAt + '('.length, timeRangeEndAt)

  //   let columnStartAt = contentList[1].indexOf('第')
  //   let columnEndAt = contentList[1].indexOf('卷')
  //   let columnStr = ''
  //   if (columnStartAt >= 0) {
  //     // 先把关键语句提取出来, 后续根据需要再处理
  //     columnStr = contentList[1].slice(columnStartAt + '第'.length, columnEndAt)
  //     columnStr = `-第${columnStr}卷`
  //   }


  //   let lineAt = 0
  //   let lineHeight = 40
  //   let paddingLeft = Const_Default_Webview_Width / 2

  //   function addLine(content: string) {
  //     lineAt = lineAt + 1
  //     doc.text(content, paddingLeft, lineHeight * lineAt, {
  //       align: 'center',
  //     })
  //   }
  //   function addLink(content: string) {
  //     lineAt = lineAt + 1
  //     doc.setTextColor("blue")
  //     doc.textWithLink(content, paddingLeft, lineHeight * lineAt, {
  //       align: 'center',
  //       url: content
  //     })
  //   }
  //   addLine("")
  //   addLine(accountName)
  //   addLine(`微博整理${columnStr}`)
  //   addLine(timeRangeStr)
  //   addLine("")
  //   addLine("该文件由稳部落自动生成")
  //   addLine("")
  //   addLine("项目主页")
  //   addLink("https://www.yaozeyuan.online/stablog")


  //   let currentPageNo = 2
  //   let outlineConfigList: {
  //     title: string,
  //     pageNo: number,
  //   }[] = []
  //   let debugCounter = 0
  //   // 先加一页, 避免出现空白页
  //   let dayIndex = 0
  //   for (let weiboDayRecord of weiboDayList) {
  //     dayIndex++
  //     this.log(`将页面${weiboDayRecord.title}(第${dayIndex}/${weiboDayList.length}项)添加到pdf文件中`)
  //     let weiboIndex = 0
  //     outlineConfigList.push({
  //       title: weiboDayRecord.title,
  //       pageNo: currentPageNo,
  //     })

  //     for (let weiboRecord of weiboDayRecord.configList) {
  //       debugCounter++
  //       weiboIndex++
  //       this.log(
  //         `[${debugCounter}]正在添加页面${weiboDayRecord.title}(第${dayIndex}/${weiboDayList.length}项)下,第${weiboIndex}/${weiboDayRecord.configList.length}条微博`,
  //       )
  //       let imgUri = weiboRecord.imageUri
  //       if (fs.existsSync(imgUri) === false) {
  //         // 图片渲染失败
  //         this.log(`第${weiboIndex}/${weiboDayRecord.configList.length}条微博渲染失败, 自动跳过`)
  //         continue
  //       } else {
  //         let imageBuffer = fs.readFileSync(imgUri)

  //         let size = await imageSize.imageSize(imageBuffer)
  //         let { width, height } = size
  //         if (!width || width <= 0 || !height || height <= 0) {
  //           this.log(`第${weiboIndex}/${weiboDayRecord.configList.length}条微博截图捕获失败, 自动跳过`)
  //           continue
  //         }

  //         doc.addPage([width, height], width > height ? "landscape" : "portrait")
  //         doc.addImage(
  //           {
  //             imageData: imageBuffer,
  //             x: 0,
  //             y: 0,
  //             width: width,
  //             height: height
  //           })
  //         doc.setFontSize(0.001)
  //         doc.text(weiboRecord.htmlContent, 0, 0, {
  //           // align: 'center',
  //         })
  //         currentPageNo = currentPageNo + 1
  //       }
  //     }
  //   }

  //   this.log("开始创建导航栏")

  //   // 开始补充导航栏
  //   var node = doc.outline.add(null, '首页', { pageNumber: 1 });
  //   // 通过hack的方式, 生成年月日三级目录
  //   type Type_Node = {
  //     node: any,
  //     pageNo: number,
  //     children: {
  //       [key: string]: Type_Node
  //     }
  //   }

  //   let node_map: {
  //     [year: string]: Type_Node
  //   } = {}
  //   for (let outlineConfig of outlineConfigList) {
  //     let [year, month, day] = outlineConfig.title.split('-');
  //     if (node_map[year] === undefined) {
  //       // 初始化年份
  //       let yearNode = doc.outline.add(node, year, { pageNumber: outlineConfig.pageNo });
  //       node_map[year] = {
  //         node: yearNode,
  //         pageNo: outlineConfig.pageNo,
  //         children: {}
  //       }
  //       let monthNode = doc.outline.add(yearNode, `${year}-${month}`, { pageNumber: outlineConfig.pageNo });
  //       node_map[year] = {
  //         node: yearNode,
  //         pageNo: outlineConfig.pageNo,
  //         children: {
  //           [month]: {
  //             node: monthNode,
  //             pageNo: outlineConfig.pageNo,
  //             children: {}
  //           }
  //         }
  //       }
  //       let dayNode = doc.outline.add(monthNode, `${year}-${month}-${day}`, { pageNumber: outlineConfig.pageNo });
  //       node_map[year] = {
  //         node: yearNode,
  //         pageNo: outlineConfig.pageNo,
  //         children: {
  //           [month]: {
  //             node: monthNode,
  //             pageNo: outlineConfig.pageNo,
  //             children: {
  //               [day]: {
  //                 node: dayNode,
  //                 pageNo: outlineConfig.pageNo,
  //                 children: {}
  //               }
  //             }
  //           }
  //         }
  //       }
  //       continue;
  //     }
  //     if (node_map[year]['children'][month] === undefined) {
  //       // 初始化月份
  //       let yearNode = node_map[year]['node']
  //       let monthNode = doc.outline.add(yearNode, `${year}-${month}`, { pageNumber: outlineConfig.pageNo });
  //       node_map[year]['children'][month] = {
  //         node: monthNode,
  //         pageNo: outlineConfig.pageNo,
  //         children: {}
  //       }
  //       let dayNode = doc.outline.add(monthNode, `${year}-${month}-${day}`, { pageNumber: outlineConfig.pageNo });
  //       node_map[year]['children'][month]['children'][day] = {
  //         node: dayNode,
  //         pageNo: outlineConfig.pageNo,
  //         children: {}
  //       }
  //       continue;
  //     }
  //     // 否则, 添加日期节点
  //     let yearNode = node_map[year]['node']
  //     let monthNode = node_map[year]['children'][month]['node']
  //     let dayNode = doc.outline.add(monthNode, `${year}-${month}-${day}`, { pageNumber: outlineConfig.pageNo });
  //     node_map[year]['children'][month]['children'][day] = {
  //       node: dayNode,
  //       pageNo: outlineConfig.pageNo,
  //       children: {}
  //     }
  //   }

  //   this.log("开始输出文件")
  //   await doc.save(outputUri, { returnPromise: true })
  //   this.log(`pdf输出完毕`)
  // }

}

export default CommandDebug