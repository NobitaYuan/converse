import request from '@/utils/request'
// 获取购物车列表
export const getCartList = (userid)=>{
    return request.post('/proapi/cart/list',{userid})
}

// 商品的全选
export const selectAllShop = (userid,flag = false)=>{
    return request.post('/proapi/cart/selectall',{userid,flag})
}
// 商品的单选
export const selectOneShop = (cartid,flag = false)=>{
    return request.post('/proapi/cart/selectone',{cartid,flag})
}
// 更新商品数量
export const changeShopNum = (cartid,num = 1)=>{
    return request.post('/proapi/cart/updatenum',{cartid,num})
}
// 删除单个商品
export const removeOneShop = (cartid)=>{
    return request.post('/proapi/cart/remove',{cartid})
}