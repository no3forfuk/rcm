<template>
    <div>
        <y-header></y-header>
        <div class="contanier text-center">
            <img src="" width="200px">
            <p class="h4">欢迎来到RCM</p>
            <div class="input-group">
                <span class="input-group-addon" id="sizing-addon2">用户名</span>
                <input type="text" class="form-control" placeholder="请输入用户名" aria-describedby="sizing-addon2"
                       v-model="username">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon" id="sizing-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
                <input type="password" class="form-control" placeholder="请输入密码" aria-describedby="sizing-addon2"
                       v-model="password">
            </div>
            <br>
            <p class="text-left font-small" v-if="tips">请输入正确的账号或密码</p>
            <button type="button" class="btn btn-success" id="login-btn" @click="loginByName">登陆</button>
            <br><br>
            <p class="text-center text-size12">
                <router-link :to="{name:'login'}">忘记密码了</router-link>
                |
                <router-link :to="{name:'register'}">注册一个新账号</router-link>
            </p>
        </div>
    </div>
</template>
<script>
    import {loginByUsername} from '../../api/api'

    export default {
        data() {
            return {
                username: "",
                password: "",
                tips: false
            };
        },
        created() {
        },
        methods: {
            loginByName() {
                var params = {};
                params.username = this.username
                params.password = this.password
                loginByUsername(params).then(res => {
                    if (res.status == 200 && res.data.status_code == 1) {
                        sessionStorage.setItem('X-Auth-Token', res.data.data.access_token);
                        this.$router.push('home')
                    }

                }).catch(err => {
                    throw err
                })
            }
        }
    };
</script>

<style scoped>
    .contanier {
        width: 300px;
        margin: 0 auto;
    }

    #login-btn {
        width: 300px;
    }

    .text-size12 {
        font-size: 0.8em;
    }

    .font-small {
        font-size: 0.8rem;
        color: rgb(247, 25, 25);
    }
</style>