<template>
    <el-container>
        <el-header>
            <span @click="chooseTag(index)"
                  v-for="(item,index) in tagOpts"
                  :key="index">
                <el-tag style="cursor: pointer;" :class="{'chooseTag':item.actived}">{{item.value}}</el-tag>
            </span>
            <!--<span @click="initEchart(dateRange,viewTimes.value)">-->
            <!--<el-tag style="cursor: pointer;" >浏览时长</el-tag>-->
            <!--</span>-->
            <el-select v-model="selectDate.value"
                       @change="selectDateRange"
                       placeholder="请选择"
                       style="float: right">
                <el-option
                        v-for="item in selectDate.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-header>
        <el-container>
            <el-aside width="150px" style="border-right: 1px solid #ebeef5;border-left: 1px solid #ebeef5;">
                <el-collapse v-model="activeNames" style="overflow: hidden;">
                    <el-collapse-item title="总体数据" name="1" style="text-align: center;">

                    </el-collapse-item>
                    <el-collapse-item title="首页" name="2" style="text-align: center;">

                    </el-collapse-item>
                    <el-collapse-item title="榜单" name="3" style="text-align: center;">
                        <div>一级榜单</div>
                        <div>二级榜单</div>
                    </el-collapse-item>
                    <el-collapse-item title="专栏" name="4" style="text-align: center;">

                    </el-collapse-item>
                    <el-collapse-item title="评论" name="5" style="text-align: center;">

                    </el-collapse-item>
                    <el-collapse-item title="漏斗" name="6" style="text-align: center;">
                        <div>漏斗1</div>
                        <div>漏斗2</div>
                        <div>漏斗3</div>
                    </el-collapse-item>
                </el-collapse>

            </el-aside>
            <el-main>
                <div class="chart" style="height: 100%;"></div>
            </el-main>
        </el-container>

    </el-container>
</template>

<script>
    import {timeFormat} from '../../utils/utils'

    export default {
        data() {
            return {
                tagOpts: [
                    {
                        value: '打开次数',
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        actived: true
                    },
                    {
                        value: '浏览时长',
                        data: [820, 932, 9, 934, 1, 1330, 1320],
                        actived: false
                    }
                ],
                activeNames: ['1'],
                selectDate: {
                    value: '1',
                    options: [
                        {
                            value: '1',
                            label: '最近7天'
                        },
                        {
                            value: '2',
                            label: '最近30天'
                        }
                    ]
                },
                dateRange: [],
                EchartValue: []
            }
        },
        created() {

        },
        computed: {},
        mounted() {
            this.$nextTick(function () {
                //初始化设置默认值
                this.chooseTag(0)
            })
        },
        methods: {
            chooseTag(index) {
                for (let i = 0; i < this.tagOpts.length; i++) {
                    this.tagOpts[i].actived = false;
                }
                this.tagOpts[index].actived = true;
                this.EchartValue = this.tagOpts[index].data;
                this.initEchart();
            },
            selectDateRange(e) {
                let mapArr = [];
                //选择日期范围
                if (e == '1') {
                    //最近7天
                    mapArr = [6, 5, 4, 3, 2, 1, 0]
                }
                if (e == '2') {
                    for (let i = 0; i < 30; i++) {
                        mapArr.unshift(i)
                    }
                }
                this.dateRange = mapArr.map(item => {
                    let ms = new Date()
                    ms = ms.getTime()
                    let d = item * 1000 * 3600 * 24
                    let time = ms - d
                    let str = timeFormat('-', time);
                    str = str.slice(6, 10);
                    return str
                })
            },
            initEchart() {
                const box = $('.chart')[0];
                const myChart = this.echarts.init(box);
                const data = {
                    xAxis: {
                        type: 'category',
                        data: this.dateRange
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 1500
                    },
                    series: [{
                        data: this.EchartValue,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                label: {show: true}
                            }
                        },
                    }]
                }
                myChart.setOption(data)
            }
        },
        watch: {
            'dateRange.length'(n, o) {
                if (n != o) {
                    this.initEchart()
                } else {
                    return
                }
            }
        }
    }

</script>

<style scoped>
    .chooseTag {
        border: 1px solid #f60;
        border-radius: 0;
    }
</style>