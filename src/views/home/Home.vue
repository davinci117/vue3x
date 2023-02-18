<template>
  <!-- <h1>我是home组件!</h1> -->
  <div style="display: flex;">
    <div id="echart1" class="echart1"></div>
    <div id="echart2" class="echart2"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { nextTick } from 'vue'

nextTick(() => {
  var myChart1 = echarts.init(document.getElementById('echart1'))
  myChart1.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        // smooth:true
      }
    ]
  })
  //当数据量过大时，如果数据没有获取完成就开始setOption就会出现报错：因此延时处理setOption
  // setTimeout(() => {
  //   myChart.setOption({
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         data: [150, 230, 224, 218, 135, 147, 260],
  //         type: 'line'
  //       }
  //     ]
  //   })
  // }, 100)

  //表2
  //获取dom元素
  var myChart2 = echarts.init(document.getElementById('echart2'))
  myChart2.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  })
})
</script>

<style lang="less">
.echart1 {
  // margin: 10px 0 0 10px;
  margin-left: 8px;
  width: 700px;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 5px;
}

.echart2 {
  margin-left: 10px;
  width: 580px;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 5px;
}
</style>