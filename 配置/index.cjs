/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd20e218b23b6cd32',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ed3dbc0933b04c73852068770d8c622a',

  PROVINCE: '河南',
  CITY: '禹州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '胡文梦',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJcPa6bSIsq1RwsOCYCoAMS8IOEc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'a7KdNt1rqQy351TVPBBNOUhbw-Yh3VdTm4mWce3KXCA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*2001-06-28', name: '胡文梦宝贝', year: '2001', date: '06-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*1999-06-05', name: '刘钰敖', year: '1999', date: '06-05',
        },
        {
          type: '2022-06-18', name: '我们在一起已经', year: '2022', date: '06-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: '我们在一起已经有', date: '2022-06-18' },

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'a7KdNt1rqQy351TVPBBNOUhbw-Yh3VdTm4mWce3KXCA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJcPa6bSIsq1RwsOCYCoAMS8IOEc',
    }
  ],

}

module.exports = USER_CONFIG

