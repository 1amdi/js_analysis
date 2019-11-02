1. items 商品基本参数获取
      scrapy crawl adidas_items_old -a func=test_items
      item_dict['item_code'] = item['c']
      item_dict['item_id'] = item['id']
      item_dict['item_img'] = item['img']
      item_dict['item_name'] = item['t']
 
 
2. proxyip配置
      scrapy crawl zhima_proxy -a func=test_proxy


3. login 登陆
     a. 普通登录
      post 'https://www.adidas.com.cn/ping.json'，获取token
      post 'https://www.adidas.com.cn/member/login.json',提交用户名密码登录
      
     b. 新版登录
      post 'https://www.adidas.com.cn/ping.json', 获取token
      post 'https://www.adidas.com.cn/member/login', 获取v_token,login_url
      post 'https://www.adidas.com.cn'+login_url',form_data[用户名,密码,v_token]
      
    登录获取session_id, 解析页面获取s,t,ct三个参数的值
      

4. 获取用户地址
     post  address_url = 'https://www.adidas.com.cn/myAccount/address',带着用户的session_id
获取第一个地址，给用户地址信息赋值

5. 请求购买
    登录状态下保持cookie
    post 'https://request.adidas.com.cn/hl/buyingnow.json', formdata[s,ct,t]，s为商品对应的md5
    
6. 进入排队 
   登录状态下保持cookie
   post  'https://hype.adidas.com.cn/hp/transaction/queue?locale=zh_CN'

7. 查询排队状态
   登录状态下保持cookie
   post  'https://hype.adidas.com.cn/hl/getQueueStatu.json'

8. 创建订单
   登录状态下保持cookie
   post  'https://hype.adidas.com.cn/hl/createOrder.json'
   data:账号支付信息
   
9. 确认订单
   post 'https://hype.adidas.com.cn/hp/showOrderConfirm'
   


   
   
   

    
   


      

    
 
 