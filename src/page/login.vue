<template>
    <div>
        <video src="../../public/video/fun.mp4" autoplay="autoplay" width="100%" height="100%" loop="loop">
            您的浏览器不支持 video 标签。
        </video>
        <div class="start">
            <router-link to="/home">
                <span>开始旅程</span>
            </router-link>
        </div>
    </div>

</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    methods: {},
    beforeCreate() {
        console.log("初始化状态创建前");
    },
    created() {
        console.log("初始化状态创建完成");
    },
    beforeMount() {
        console.log("组建挂载前");
        console.log("dom树创建完成，但是dom树中的vue指令没有渲染");
    },
    mounted() {
        console.log("组建挂在结束");
        console.log("dom树创建完成，dom树中的vue指令渲染完成");
    },
    beforeUpdate() {
        console.log("组建更新前");
    },
    updated() {
        console.log("组建更新完成");
    },
    beforeDestroy() {
        console.log("组建销毁前");
    },
    destroyed() {
        console.log("组建销毁完成");
    }
};
</script>
<style lang="scss">
.start {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: linear-gradient(to bottom right, red, blue);
    position: fixed;
    right: 100px;
    bottom: 100px;
    text-align: center;
    line-height: 100px;
    span {
        font-size: 16px;
        color: #fff;
        font-family: cursive;
        font-weight: 700;
    }
}
</style>

