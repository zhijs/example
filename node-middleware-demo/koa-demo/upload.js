class Upload {
  test1 () {
    console.log('test1---')
  }
  async handler (ctx, netx) {
    this.test1()
    console.log('handler')
  }
}
module.exports = Upload