<template>
  <!-- <div class="box">
    <p>hhhh</p>
  </div> -->
  <div style="display: flex;">
    <div id="echart1" class="echart1"></div>
    <div id="echart2" class="echart2"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { nextTick } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

nextTick(() => {
  //汽车数据
  const list = store.state.cars.tableData
  const seriesData = []
  const xAxisData = []
  const seriesValue = []
  for (let i = 0; i < list.length; i++) {
    const sd = { value: '', name: '', }
    sd.name = list[i].name,
    sd.value = list[i].count
    seriesData.push(sd)
    xAxisData.push(list[i].name)
    seriesValue.push(list[i].price)
  }

  //汽车销量的渲染
  var myChart1 = echarts.init(document.getElementById('echart1'))
  myChart1.setOption(
    {
      title: {
        text: '比亚迪-王朝系列',
        subtext: '销售表',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  )
  //获取dom元素
  var myChart2 = echarts.init(document.getElementById('echart2'))
  myChart2.setOption({
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: seriesValue,
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
.box {
  p{
    line-height: 50px;
  }
  width: 100%;
  height: 50px;
  background-color: pink;
  margin-bottom: 10px;
}
.echart1 {
  margin-left: 8px;
  width: 600px;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 5px;
}
.echart2 {
  margin-left: 10px;
  width: 680px;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 5px;
}


</style>