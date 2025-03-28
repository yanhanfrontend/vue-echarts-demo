<template>
  <el-menu mode="horizontal" router :default-active="$route.path" class="nav-menu">
    <el-menu-item index="/caiZhengZiJinChengJieFenXi">财政资金承接分析</el-menu-item>
    <el-menu-item index="/caiZhengYeWuKeHuYingXiaoFenXi">财政业务客户营销分析</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
.nav-menu {
  padding: 0 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>