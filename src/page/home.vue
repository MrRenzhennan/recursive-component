<template>
    <div>
        <div>
            <Top />
        </div>
        <div>
            <Menu />
        </div>
        <div>

        </div>
        <div class="center-box">
            <div class="center">
                <Title />
                <div class="line">

                </div>
                <div>
                    <router-view></router-view>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import Menu from "../components/menu";
import Top from "../components/top";
import Title from "../components/title";
export default {
    name: "Home",
    components: {
        Menu,
        Top,
        Title
    }
};
</script>
<style lang="scss">
.center-box {
    width: 100%;
    height: 900px;
    box-sizing: border-box;
    padding-left: 210px;
    padding-right: 10px;
    margin-top: 60px;
    border: 1px solid #fff;
    .center {
        width: 100%;
        height: 900px;
        overflow-y: auto;
        .line {
            width: 100%;
            height: 1px;
            border-top: 1px solid #999;
        }
    }
}
</style>


