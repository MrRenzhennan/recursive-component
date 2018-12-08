<template>
    <div>
        <div v-for="(value,key,index) in MenuList" :key="index">
            <div v-if="value.children">
                <el-submenu :index="value.index">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>
                            <router-link :to="value.url">{{value.title}}</router-link>
                        </span>
                    </template>
                    <MenuChild :MenuList="value.children"></MenuChild>
                </el-submenu>
            </div>
            <div v-else-if="!value.children">
                <el-menu-item :index="value.index">
                    <!-- <i class="el-icon-location"></i> -->
                    <span>
                        <router-link :to="value.url">{{value.title}}</router-link>
                    </span>
                </el-menu-item>
                <MenuChild :MenuList="value.children"></MenuChild>
            </div>
        </div>
    </div>
</template>
<script>
import MenuChild from "./menuChild.vue";
export default {
    name: "MenuChild",
    props: {
        MenuList: Array
    }
};
</script>
