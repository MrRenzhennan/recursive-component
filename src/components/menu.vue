<template>
    <div class="menu-box">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu :index="value.index" v-for="(value, key, index) in menuTreeArry" :key="index">
                        <template slot="title">
                            <!-- <i class="el-icon-location"></i> -->
                            <span>{{value.title}}</span>
                        </template>
                        <Menu-child :MenuList="value.children"></Menu-child>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>

</template>
<script>
import mentJSON from "../../public/json/menu.json";
import MenuChild from "./menuChild.vue";
export default {
    components: {
        MenuChild
    },
    data() {
        return {
            isCollapse: true,
            menuTreeArry: mentJSON
        };
    },
    mounted() {
        //菜单高度
        let height = window.outerHeight - 110;
        let menu_box = document.getElementsByClassName("menu-box");
        menu_box[0].style.height = height + "px";
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style lang="scss">
.menu-box {
    position: fixed;
    top: 60px;
    height: 1000px;
    width: 210px;
    overflow-y: auto;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 900px;
    }
    .tac {
        .el-col-12 {
            width: 0px;
        }
    }
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 12px;
    height: 16px;
    background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(84, 92, 100);
}
</style>