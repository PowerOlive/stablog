declare namespace TaskConfig {
  type imageQuilty = 'default' | 'none' | 'raw' | 'hd'
  type maxBlogInBook = number // 自动分卷: 单本电子书中最大问题/文章数量
  type Record = {
    uid: string
    rawInputText: string
    comment: string // 备注
  }

  // 自定义抓取
  type Customer = {
    configList: Array<Record>
    imageQuilty: imageQuilty // 图片质量
    pdfQuilty: 50 | 60 | 70 | 90 | 100 // pdf输出质量(默认60, 质量体积平衡点)
    bookTitle: string // 书名
    comment: string // 备注
    /**
     * 微博排序方式: 按发布事件升序排列, 按发布时间降序排列
     */
    postAtOrderBy: 'desc' | 'asc'
    /**
     * 开始抓取的页码数, 默认为0(方便抓取区间数据)
     */
    fetchStartAtPageNo: number
    /**
     * 结束抓取的页码数, 默认为10000(方便抓取区间数据)
     */
    fetchEndAtPageNo: number
    /**
     * 输出微博时间段-开始时间(毫秒)
     */
    outputStartAtMs: number
    /**
     * 输出微博时间段-结束时间(毫秒)
     */
    outputEndAtMs: number
    /**
     * 是否跳过备份阶段
     */
    isSkipFetch: boolean
    /**
     * 是否跳过pdf输出阶段
     */
    isSkipGeneratePdf: boolean
    /**
     * 是否重新生成将html转为pdf的图片
     */
    isRegenerateHtml2PdfImage: boolean
    /**
     * 是否只看微博文章(微博文章一定是原创, 转发微博不算原创)
     */
    isOnlyArticle: boolean
    /**
     * 是否只看原创
     */
    isOnlyOriginal: boolean
    /**
     * 电子书分卷依据
     */
    volumeSplitBy: 'single' | 'year' | 'month' | 'count'
    /**
     * 若按单本电子书内微博总数进行分卷, 单卷最大微博数
     */
    volumeSplitCount: number
  }
}

export default TaskConfig
