<template>
    <!--  -->
    <header class="header" @mouseleave="handlerIndexLleave">
        <div class="header-left">
            <div class="logo" @click="$router.push('/')">
                <img
                    src="https://image.converse.com.cn/images/icon-v202212/icon-logo.png"
                    alt=""
                />
            </div>
            <ul class="topNav">
                <li
                    @mouseover="handlerIndex(index)"
                    v-for="(items, index) in topNavList"
                >
                    <a>{{ items.listName }}</a>
                </li>
            </ul>
        </div>
        <!-- hover出现的盒子 -->
        <transition-group name="list">
        <div
            class="topNav-showbox"
            v-for="(shopUl, index) in topNavList"
            v-show="selectIndex == index"
            :key="index"
        >
                <ul class="topNav-showbox-ul">
                    <li
                        v-for="(shopLi, index) in shopUl.listChild"
                        :key="index"
                        class="topNav-showbox-ul-li"
                    >
                        <a>
                            <img :src="shopLi.itemUrl" alt="" />
                            <span>{{ shopLi.itemName }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </transition-group>       

        <div class="header-right">
            <div class="login">
                <span><a>注册</a></span>
                <span>|</span>
                <span><a @click="$router.push({name:'login'})">登录</a></span>
            </div>
            <div class="option">
                <div class="opIcon user">
                    <img
                        src="https://image.converse.com.cn/images/icon-v202212/icon-profile.png"
                        alt=""
                    />
                </div>
                <div class="opIcon shopcar" @click="$router.push({name:'cart'})">
                    <img
                        src="	https://image.converse.com.cn/images/icon-v202212/icon-cart.png"
                        alt=""
                    />
                </div>
                <div class="opIcon message">
                    <img
                        src="https://image.converse.com.cn/images/icon-v202212/icon-cs.png"
                        alt=""
                    />
                </div>
            </div>
            <div class="search" :class="clickedClass">
                <input type="text" ref="inputEle"/>
                <div class="shortbox" v-if="!clickedClass">
                    <span class="search-text">搜索</span>
                    <span class="searchicon"
                        ><img @click="handlerInputClick"
                            src="https://image.converse.com.cn/images/icon-v202212/icon-search.png"
                            alt=""
                    /></span>
                </div>
                <div class="longbox" v-else>
                    <span class="searchicon searchicon2"
                        ><img
                            src="https://image.converse.com.cn/images/icon-v202212/icon-search.png"
                            alt=""
                    /></span>
                    <div class="closeicon">
                        <img @click="handlerInputClick"
                            src="https://image.converse.com.cn/images/icon-v202212/icon-close.png"
                            alt=""
                    />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";

const topNavList = ref([
    {
        listName: "五一出游记",
        listChild: [
            {
                itemName: "折扣精选",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230409/womxl2.png?2023040401",
            },
            {
                itemName: "满减特惠",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230409/menxl2.png?2023040401",
            },
        ],
    },
    {
        listName: "夏季新品",
        listChild: [
            {
                itemName: "夏日系列",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230428/xrxl.png?2023040401",
            },
            {
                itemName: "晒出彩系列",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230409/scc2.png?2023040401",
            },
            {
                itemName: "楼花刺绣系列",
                itemUrl:
                    "	https://image.converse.com.cn/static/icon/20230320/cx.png?2023040401",
            },
            {
                itemName: "季节新色",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/jjxs.png?2023040401",
            },
            {
                itemName: "更多新品",
                itemUrl:
                    "https://image.converse.com.cn/resources/product/A01607C001/A01607C001_1B_NEW.png?2023040401",
            },
        ],
    },
    {
        listName: "人气热销",
        listChild: [
            {
                itemName: "男子人气热销",
                itemUrl:
                    "https://image.converse.com.cn/resources/product/A04157C054/A04157C054_1B_NEW.png?2023040401",
            },
            {
                itemName: "女子人气热销",
                itemUrl:
                    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_1B_NEW.png?2023040401",
            },
        ],
    },
    {
        listName: "男子",
        listChild: [
            {
                itemName: "鞋类",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230409/menxl2.png?2023040401",
            },
            {
                itemName: "上装",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/mensz.png?2023040401",
            },
            {
                itemName: "下装",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/menxz.png?2023040401",
            },
            {
                itemName: "配件",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/menpj.png?2023040401",
            },
            {
                itemName: "川久保玲系列",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/mencj.png?2023040401",
            },
            {
                itemName: "经典款",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/220630/%E7%BB%8F%E5%85%B8%E6%AC%BE%E7%94%B7.png?2023040401",
            },
            {
                itemName: "CHUCK 70",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/menchuck70.png?2023040401",
            },
            {
                itemName: "ALL STAR",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/menallstar.png?2023040401",
            },
            {
                itemName: "ONE STAR",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/menonestar.png?2023040401",
            },
            {
                itemName: "RUN STAR",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230409/menrs2.png?2023040401",
            },
        ],
    },
    {
        listName: "女子",
        listChild: [
            {
                itemName: "鞋类",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230409/womxl2.png?2023040401",
            },
            {
                itemName: "上装",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womsz.png?2023040401",
            },
            {
                itemName: "下装",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womxz.png?2023040401",
            },
            {
                itemName: "配件",
                itemUrl:
                    "https://image.converse.com.cn/resources/product/10021005281/10021005281_1B_NEW.png?2023040401",
            },
            {
                itemName: "川久保玲系列",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womcj.png?2023040401",
            },
            {
                itemName: "经典款",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womjd.png?2023040401",
            },
            {
                itemName: "CHUCK 70",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womchuck70.png?2023040401",
            },
            {
                itemName: "ALL STAR",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womallstar.png?2023040401",
            },
            {
                itemName: "ONE STAR",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womonestar.png?2023040401",
            },
            {
                itemName: "RUN STAR",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/womrunstar.png?2023040401",
            },
        ],
    },
    {
        listName: "儿童",
        listChild: [
            {
                itemName: "婴童18-26码",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230113/%E5%A9%B4%E7%AB%A51.png?2023040401",
            },
            {
                itemName: "幼童27-35码",
                itemUrl:
                    "https://image.converse.com.cn/static/icon/20230401/youth.png?2023040401",
            },
            {
                itemName: "大童36-40码",
                itemUrl:
                    "	https://image.converse.com.cn/static/icon/20230113/%E5%A4%A7%E7%AB%A51.png?2023040401",
            },
        ],
    },
]);

const selectIndex = ref(-1);

const handlerIndex = (index) => {
    selectIndex.value = index;
};

const handlerIndexLleave = () => {
    selectIndex.value = -1;
};

const clickedClass = ref('')

const inputEle = ref(null)

const handlerInputClick = () =>{
    // console.log(inputEle.value)
    if(clickedClass.value == 'search-active'){
        clickedClass.value = ''
        inputEle.value.placeholder = ''
    }else{
        clickedClass.value = 'search-active'
        inputEle.value.placeholder = '在此输入你想要搜索的商品'
        inputEle.value.focus()
    }
}

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 61px;
    line-height: 60px;
    box-shadow: 0 -1px 0 0 #e5e5e5 inset;
    border: 1px solid #ccc;
    .header-left {
        display: flex;
        .logo {
            cursor: pointer;
            width: 120px;
            height: 14px;
            margin: 0 45px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .topNav {
            width: 484px;
            display: flex;
            li {
                font-weight: bold;
                margin-right: 35px;
                cursor: pointer;
            }
            li:hover {
                border-bottom: 1px solid #000;
            }
        }
    }
    // hover出现的盒子
    .topNav-showbox {
        width: 100%;
        background-color: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 101;
        box-shadow: 0px 39px 44px 0px rgba(95, 95, 95, 0.6);
        .topNav-showbox-ul {
            padding-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0 20%;
            .topNav-showbox-ul-li {
                width: 100px;
                padding-top: 20px;
                margin-right: 40px;
                span {
                    transition: all 0.5s;
                }
                &:hover span {
                    text-decoration: underline;
                    color: #999999;
                }
                a {
                    display: block;
                    text-align: center;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .header-right {
        display: flex;
        width: 470px;
        font-weight: bold;
        .login {
            margin-right: 16px;
            width: 82px;
            a:hover {
                text-decoration: underline;
            }
            span:nth-child(2) {
                margin: 0 8px;
                position: relative;
                top: -1px;
            }
        }
        .option {
            display: flex;
            .opIcon {
                width: 32px;
                height: 32px;
                margin-right: 16px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .search {
            width: 233px;
            background-color: #000;
            justify-content: space-between;
            padding: 0 45px 0 17px;
            position: absolute;
            right: 0;
            top: 0;
            transition: all .3s;
            input {
                background-color: #000;
                display: block;
                width: 100%;
                height: 60px;
                padding: 20px 45px 20px 39px;
                box-sizing: border-box;
                border: 0;
                outline: 0;
                background: transparent;
                color: #fff;
                position: relative;
                z-index: 1;
            }
            .search-text {
                position: absolute;
                top: 0;
                left: 17px;
                color: #fff;
                display: block;
            }
            .searchicon {
                position: absolute;
                right: 45px;
                top: 0;
                z-index: 2;
                cursor: pointer;
                width: 32px;
                height: 32px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .searchicon2 {
                left: 10px;
            }
            .closeicon {
                position: absolute;
                right: 45px;
                top: 0;
                z-index: 2;
                cursor: pointer;
                width: 32px;
                height: 32px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
}
.header .header-right .search-active{
    width: calc(100% - 189px);
    position: absolute;
    right: 0;
    top: 0;
}
// 缓入缓出
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
//   transform: translateY(30px);
}
</style>
