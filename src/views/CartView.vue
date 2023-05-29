<template>
    <div class="cart">
        <div class="tips" v-if="tipShow">
            <p>
                尊敬的顾客您好，我们店铺是不会泄露您的消费信息的，请放心。另外我们也不会要求获取、收集、使用任何与消费者金融消费类（如：信用卡）信息，如果接到以上信息电话，是属于诈骗电话，请勿相信，以防钱财损失。如您对订单有疑问，请联系在线客服。
            </p>
            <i class="closeTip" @click="tipShow = false"></i>
        </div>
        <div class="mian-container">
            <div class="con-progress">
                <ul>
                    <li>
                        <a>我的购物车</a
                        ><i :class="descBlack[0] ? 'descblack' : ''"></i>
                    </li>
                    <li>
                        <a>请填写订单信息</a
                        ><i :class="descBlack[1] ? 'descblack' : ''"></i>
                    </li>
                    <li>
                        <a>成功提交订单</a
                        ><i :class="descBlack[2] ? 'descblack' : ''"> </i>
                    </li>
                    <div class="line"></div>
                </ul>
            </div>
            <div class="shopcart-title-box">
                <p>您的购物车：{{ shoplist.length }}件商品</p>
            </div>
            <div class="checked-goods-box">
                <div class="checkall">
                    <input
                        @click="checkAllFn"
                        type="checkbox"
                        :checked="allChecked"
                    />
                    <span>全选</span>
                    <p>
                        您已选中<span>{{ checkedCount }}</span
                        >件商品
                    </p>
                </div>
            </div>
            <div class="shopcart-list-content">
                <div
                    class="shopcart-list"
                    v-for="item in shoplist"
                    :key="item.cartid"
                >
                    <div class="shopcart-info-change">
                        <input
                            :checked="item.flag"
                            class="shopitem-check"
                            type="checkbox"
                            @click="checkOneFn(item.cartid,!item.flag)"
                        />
                        <div @click="delOneShopFn(item.cartid)" class="remove">删除</div>
                    </div>
                    <div class="goods-box">
                        <div class="goods-img">
                            <a>
                                <img :src="item.img1" alt="" />
                            </a>
                        </div>
                        <div class="goods-detail">
                            <h4>{{ item.proname }}</h4>
                            <p>品牌：{{ item.brand }}</p>
                            <p>类别：{{ item.category }}</p>
                            <p class="shopdesc">描述：{{ item.desc }}</p>
                        </div>
                        <div class="goods-price">
                            <del>¥{{ item.originprice.toFixed(2) }}</del>
                            <p>
                                <span>优惠价</span>¥{{
                                    (
                                        item.originprice *
                                        item.discount *
                                        0.1
                                    ).toFixed(2)
                                }}
                            </p>
                            <div class="shopcart-num">
                                <label>数量</label>
                                <div class="calculate-num">
                                    <div class="shopReduce" @click="changeShopNumFn(item.cartid,item.num,false)">-</div>
                                    <div class="shopNum">{{ item.num }}</div>
                                    <div class="shopAdd" @click="changeShopNumFn(item.cartid,item.num,true)">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checked-goods-box">
                <div class="checkall">
                    <input
                        @click="checkAllFn"
                        type="checkbox"
                        :checked="allChecked"
                    />
                    <span>全选</span>
                    <p>
                        您已选中<span>{{ checkedCount }}</span
                        >件商品
                    </p>
                </div>
            </div>
            <div class="buyItem">
                <div class="item-left">
                    <div class="helpbox">
                        <h4>需要帮助吗？</h4>
                        <ul>
                            <li>如何确保订单安全？</li>
                            <li>我可以使用什么付款方式？</li>
                            <li>如何进行退换货？</li>
                            <li>更多帮助</li>
                        </ul>
                    </div>
                    <div class="toshopping" @click="$router.push('/')">
                        继续购物
                    </div>
                </div>
                <div class="item-right">
                    <div class="summary-info">
                        <div class="moneydiv allmoney">
                            <label>小计</label>
                            <span>￥ {{ allMoney.toFixed(2) }}</span>
                        </div>
                        <div class="moneydiv youhui">
                            <label>优惠</label>
                            <span
                                >￥
                                {{ (allMoney - deAllMoney).toFixed(2) }}</span
                            >
                        </div>
                        <div class="moneydiv deallmoney">
                            <label>总价</label>
                            <span>￥ {{ deAllMoney.toFixed(2) }}</span>
                        </div>
                        <div class="tip">
                            <span>*</span>不含运费及优惠券折扣
                        </div>
                        <div class="buy">结算</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getCartList, selectAllShop, selectOneShop ,changeShopNum,removeOneShop} from "@/api/cart";
// 提示框是否显示
const tipShow = ref(true);
// 进度条的圆点
const descBlack = ref([true, false, false]);
// 商品列表
const shoplist = ref([]);

// 暂时不需要登陆功能，故设定一个固定的用户id
const userId = ref("user_a341c119-28b3-46f6-bc2e-73eee3568932");

onMounted(() => {
    getCartData();
});
// 初始化页面数据
const getCartData = () => {
    getCartList(userId.value).then((res) => {
        shoplist.value = res.data;
    });
};
// 是否全选
const allChecked = computed(() => {
    return shoplist.value.every((value) => {
        return value.flag == true;
    });
});

// 已选的数量
const checkedCount = computed(() => {
    return shoplist.value.reduce((prev, current) => {
        if (current.flag) {
            prev++;
        }
        return prev;
    }, 0);
});

// 总价
const allMoney = computed(() => {
    return shoplist.value.reduce((prev, current) => {
        if (current.flag) {
            return prev + current.originprice * current.num;
        } else {
            return prev;
        }
    }, 0);
});

// 优惠总价
const deAllMoney = computed(() => {
    return shoplist.value.reduce((prev, current) => {
        if (current.flag) {
            return (
                prev +
                current.originprice * current.discount * current.num * 0.1
            );
        } else {
            return prev;
        }
    }, 0);
});

// 全选的切换
const checkAllFn = (e) => {
    // console.log(e.target.checked)
    selectAllShop(userId.value, e.target.checked).then((res) => {
        // 更新数据
        getCartData();
    });
};

// 单选的切换
const checkOneFn = (cartid, flag) => {
    // console.log(cartid,flag)
    selectOneShop(cartid,flag).then(res=>{
        // 更新数据
        getCartData();
    })
};

// 商品加减
const changeShopNumFn = (cartid,num,type)=>{
    if(type){
        num++
    }else if(num>0){
        num--
    }
    // console.log(cartid,num,type);
    changeShopNum(cartid,num).then(res=>{
        // console.log(res)
        // 更新数据
        getCartData();
    })
}

// 删除单个商品
const delOneShopFn = (cartid)=>{
    // console.log(cartid)
    removeOneShop(cartid).then(res=>{
        // 更新数据
        getCartData();
    })

}

</script>

<style lang="scss" scoped>
.tips {
    cursor: pointer;
    background-color: #eee;
    height: 72px;
    position: relative;
    p {
        width: 1000px;
        margin: 0 auto;
        padding-top: 20px;
        font-size: 12px;
        color: #000;
        line-height: 16px;
        padding-bottom: 20px;
    }
    .closeTip {
        position: absolute;
        width: 30px;
        height: 30px;
        background: url("https://image.converse.com.cn/images/X-copy.png")
            no-repeat;
        top: 20px;
        right: 20px;
    }
}
.mian-container {
    width: 1000px;
    margin: 0 auto;

    .con-progress {
        position: relative;
        width: 486px;
        padding: 0;
        margin: 40px auto 34px;
        height: 46px;
        ul {
            width: 100%;
            position: relative;
            z-index: 1;
            clear: both !important;
            display: flex;
            justify-content: space-between;
            height: 100%;
            li {
                z-index: 2;
                position: relative;
                i {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url("https://image.converse.com.cn/images/shoppingcart-2/null-gress.png")
                        no-repeat center center;
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                }
                .descblack {
                    background: url("https://image.converse.com.cn/images/shoppingcart-2/gress.png")
                        no-repeat;
                }
            }
            &::after {
                z-index: 1;
                content: "";
                display: block;
                position: absolute;
                left: 39px;
                bottom: 9px;
                background-color: #b7b7b7;
                height: 1px;
                width: 329px;
            }
        }
    }
    .shopcart-title-box {
        font-size: 26px;
        color: #333;
        margin-bottom: 26px;
    }
    .checked-goods-box {
        margin-bottom: 8px;
        .checkall {
            height: 34px;
            align-items: center;
            display: flex;
            input {
                border: 1px solid #000;
                background-color: #fff;
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
            span {
                margin-left: 10px;
            }
            p {
                margin-left: 20px;
                span {
                    font-size: 14px;
                    color: #b63330;
                    margin: 0 3px;
                }
            }
        }
    }
    .shopcart-list-content {
        border-top: 1px solid #b7b7b7;
        border-bottom: 1px solid #b7b7b7;
        padding: 0 29px;
        & .shopcart-list:last-child {
            border-bottom: none;
        }
        .shopcart-list {
            border-bottom: 1px dashed #605f5f;
            .shopcart-info-change {
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .shopitem-check {
                    border: 1px solid #000;
                    background-color: #fff;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                }
                .remove {
                    cursor: pointer;
                    padding-left: 26px;
                    line-height: 28px;
                    height: 28px;
                    background: url("https://image.converse.com.cn/images/cartcheck/cart-sprite1.png")
                        no-repeat scroll -24px -112px transparent;
                }
            }
            .goods-box {
                height: 188px;
                padding-bottom: 28px;
                display: flex;
                .goods-img {
                    width: 160px;
                    height: 160px;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                .goods-detail {
                    flex: 1;
                    padding-left: 30px;
                    padding-top: 20px;
                    h4 {
                        font-weight: normal;
                        font-size: 18px;
                        color: #333;
                        line-height: 18px;
                        padding-bottom: 30px;
                    }
                    p {
                        font-size: 14px;
                        color: #333;
                        // line-height: 14px;
                        // padding-bottom: 10px;
                    }
                    .shopdesc {
                        width: 500px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .goods-price {
                    width: 143px;
                    text-align: right;
                    del {
                        padding-top: 6px;
                        font-size: 14px;
                        color: #2a2a2a;
                    }
                    p {
                        padding-top: 20px;
                        font-weight: bold;
                        font-size: 18px;
                        color: #b63330;
                        // text-align: left;
                        span {
                            display: inline-block;
                            height: 20px;
                            padding: 0 5px;
                            font-size: 10px;
                            font-weight: 600;
                            color: #999;
                            line-height: 20px;
                            background: #f4f4f4;
                            margin-right: 10px;
                            position: relative;
                        }
                    }
                    .shopcart-num {
                        display: flex;
                        align-items: center;
                        margin-top: 15px;
                        justify-content: right;
                        .calculate-num {
                            width: 92px;
                            height: 25px;
                            margin-left: 9px;
                            position: relative;
                            border: 1px solid #bcbcbc;
                            display: flex;
                            div {
                                width: 25px;
                                cursor: pointer;
                                text-align: center;
                                line-height: 23px;
                                font-size: 20px;
                            }
                            & div:nth-child(2) {
                                cursor: text;
                                flex: 1;
                                font-size: 16px;
                                color: #9c9c9c;
                                border-left: 1px solid #bcbcbc;
                                border-right: 1px solid #bcbcbc;
                            }
                        }
                    }
                }
            }
        }
    }
    .buyItem {
        height: 335px;
        display: flex;
        justify-content: space-between;
        .item-left {
            .helpbox {
                width: 300px;
                height: 155px;
                padding: 20px;
                border: 1px solid #b2b2b2;
                margin-bottom: 10px;
                h4 {
                    font-size: 16px;
                    color: #333;
                    line-height: 18px;
                    margin-bottom: 10px;
                    font-weight: normal;
                }
                ul {
                    padding-left: 20px;
                    li {
                        list-style: disc;
                        cursor: pointer;
                    }
                }
            }

            .toshopping {
                width: 300px;
                height: 50px;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                border: 1px solid #b2b2b2;
                text-align: center;
                line-height: 50px;
                font-size: 18px;
                color: #333;
                cursor: pointer;
                transition: 0.3s;
                &:hover {
                    background-color: #000;
                    color: #fff;
                }
            }
        }
        .item-right {
            .summary-info {
                width: 242px;
                .moneydiv {
                    display: flex;
                    justify-content: space-between;
                    font-size: 18px;
                    color: #333;
                    line-height: 28px;
                }
                // .allmoney {
                // }
                .youhui {
                    span {
                        color: #b63330;
                    }
                }
                .deallmoney {
                    font-size: 24px;
                    margin-top: 20px;
                    span {
                        color: #b63330;
                    }
                }
                .tip {
                    margin-top: 5px;
                    span {
                        color: #b63330;
                    }
                }
                .buy {
                    width: 198px;
                    height: 50px;
                    color: #fff;
                    font-size: 18px;
                    text-align: center;
                    line-height: 50px;
                    background: #b63330;
                    border: 1px solid #b63330;
                    position: relative;
                    right: -44px;
                    margin-top: 37px;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        border: 1px solid #b63330;
                        background-color: #fff;
                        color: #b63330;
                    }
                }
            }
        }
    }
}
</style>
