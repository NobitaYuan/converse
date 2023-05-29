import request from '@/utils/request'

// 获取商品分页信息
export const getProList = (limitNum = 8,count = 1)=>{
    return request.get('/proapi/pro/list',{params:{limitNum,count}})
}


// 获取单个商品信息
export const getProDetail = (proid)=>{
    return request.get('/proapi/pro/detail/'+proid)
}

// 添加商品至购物车
export const addPro = (userid,proid,num = 1)=>{
    return request.post('/proapi/cart/add',{userid,proid,num })
}