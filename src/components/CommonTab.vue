<template>
  <div class="tabs">
    <el-tag type="info" class="el-tag" v-for="(item, index) in tags" :key="item.name" :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'" @close="closeTag(item, index)" @click="clickTag(item)">{{
  item.label
      }}</el-tag>
  </div>
</template>
<script>
// import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {

  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const tags = store.state.tabs.tabList
    const clickTag = (item) => {
      router.push({ name: item.name })
    }
    const closeTag = (item, index) => {
      let length = tags.length - 1
      store.commit('delTag', item)
      //如果当前的路由不是所点击的路由，不做跳转操作
      if (item.name !== route.name) {
        return
      }
      //删除的是最后一个
      if (index === length) {
        router.push({ name: tags[index - 1].name })
      } else {
        //删除的中间的一个
        router.push({ name: tags[index].name })
      }

    }
    return {
      tags,
      clickTag,
      closeTag
    }

  },

}

</script>
<style lang="less">
.tabs {
  padding-bottom: 10px;
  width: 860px;
}

.el-tag {
  cursor: pointer;
  margin: 10px 5px 0 7px;
  height: 30px;
  color: #343a40;

}
</style>