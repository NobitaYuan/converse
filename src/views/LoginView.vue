<template>
    <div class="Login">
        <form class="loginForm">
            <dl>
                <dt>已经成为会员</dt>
                <dd class="username">
                    <span class="indedbox">邮箱 / 手机<i>*</i></span>
                    <input type="text" ref="iptUsername" v-model="username" />
                    <div v-show="errUsernameIsshow" class="err err-username">
                        请输入有效的账户号码！
                    </div>
                </dd>
                <dd class="password">
                    <span class="indedbox">账户密码<i>*</i></span>
                    <input
                        type="text"
                        placeholder="密码至少8个字符"
                        ref="iptPassword"
                        v-model="password"
                    />
                    <div v-show="errPasswordIsshow" class="err err-password">
                        请输入正确的密码
                    </div>
                </dd>

                <dd class="pointChecked">
                    <input
                        ref="iptCheckbox"
                        type="checkbox"
                        v-model="ischecked"
                    />
                    <text
                        >我已经阅读并同意匡威的 《<a>使用规则</a>》 和
                        《<a>隐私政策</a>》</text
                    >
                </dd>

                <dd
                    ref="iptSubmit"
                    @mouseover="hdlcssOver"
                    @mouseleave="hdlcssLeave"
                    class="submitButton"
                    @click="submitFn"
                >
                    立即登陆
                </dd>
                <div v-show="isallowed" style="color: red">请勾选用户协议</div>
            </dl>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import router from "@/router/index";

const username = ref("1900130123");
const password = ref("123456");
const ischecked = ref(false);

// 获取元素
const iptUsername = ref(null);
const iptPassword = ref(null);
const iptCheckbox = ref(null);
const iptSubmit = ref(null);

watch(ischecked, (newValue, oldValue) => {
    if (newValue) {
        iptSubmit.value.className = "submitButton submitButton-clickable";
    } else {
        iptSubmit.value.className = "submitButton";
    }
});

const errPasswordIsshow = ref(false);
const errUsernameIsshow = ref(false);
const isallowed = ref(false);
const submitFn = () => {
    errUsernameIsshow.value = false;
    errPasswordIsshow.value = false;
    isallowed.value = false;
    if (ischecked.value) {
        if (username.value != "1900130123") {
            errUsernameIsshow.value = true;
        }
        if (password.value != "123456") {
            errPasswordIsshow.value = true;
        }
        if (username.value == "1900130123" && password.value == "123456") {
            router.push({ name: "home" });
        }
    } else {
        isallowed.value = true;
    }
};

const hdlcssOver = () => {
    if (ischecked.value) {
        iptSubmit.value.className = "submitButton submitButton-hover";
    }
};
const hdlcssLeave = () => {
    if (ischecked.value) {
        iptSubmit.value.className = "submitButton submitButton-clickable";
    }
};
</script>

<style lang="scss" scoped>
.loginForm {
    box-sizing: content-box;
    width: 390px;
    margin: 60px auto;
    border: 1px solid #000;
    padding: 30px;
    dl {
        dt {
            font-size: 20px;
            line-height: 28px;
            width: 100%;
            text-align: left;
            box-sizing: content-box;
        }
        dd {
            box-sizing: content-box;
            line-height: 38px;
            position: relative;
            width: 100%;
            padding-top: 14px;
            i {
                color: red;
                margin-left: 3px;
            }
            input {
                position: relative;
                z-index: 1;
                background: transparent;
                border: 0;
                border-bottom: 1px solid #000;
                width: 100%;
                height: 30px;
                padding: 0;
                font-size: 14px;
                line-height: 30px;
                box-sizing: border-box;
                font-family: "Proxima Nova", "方正兰亭", "微软雅黑",
                    "Microsoft YaHei", "黑体", "SimHei";
            }
            .err {
                padding-top: 0;
                display: block;
                color: red;
            }
        }

        .pointChecked {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-top: 30px;
            input {
                height: 20px;
                width: 20px;
                cursor: pointer;
                margin-right: 6px;
            }
            a {
                display: inline-block;
                border-bottom: 1px solid;
                line-height: 20px;
            }
        }
        .submitButton {
            box-sizing: content-box;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #ccc;
            border: 1px solid #ccc;
            padding: 0;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
            margin-bottom: 10px;
            // &:hover{
            //     background-color: #fff;
            //     color: #000;
            //     border: 1px solid #000;
            // }
        }
        .submitButton-clickable {
            background-color: #000;
            color: #fff;
        }
        .submitButton-hover {
            background-color: #fff;
            color: #000;
            border: 1px solid #000;
        }
    }
}
</style>
