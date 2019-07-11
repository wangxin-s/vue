<template>
    <div class="element-test">
        <el-container>
            <el-header v-on:click.native="headClick">
                element-ui
                <span>123</span>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    aside
                </el-aside>
                <el-main class="main-box">
                    main
                    <div>
                        <el-radio v-model="radio" label="1">按钮一</el-radio>
                        <el-radio v-model="radio" label="2">按钮二</el-radio>
                    </div>
                    <div>
                        <h5>
                            时间选择器
                        </h5>
                        <el-time-select
                                v-model="time"
                                :picker-options="{
                                    start:'08:30',
                                    step:'00:15',
                                    end:'18:30',
                                }"
                                placeholder="请选择时间"
                        ></el-time-select>
                    </div>
                    <div>
                        <h5>日期选择器</h5>
                        <el-date-picker
                                placeholder="请选择日期"
                                v-model="date1"
                                type="date"
                        ></el-date-picker>
                        <el-date-picker
                                placeholder="请选择日期"
                                v-model="date2"
                                align="right"
                                type="date"
                                :picker-options="pickerOptions"
                        ></el-date-picker>
                    </div>
                    <div>
                        <h5>上传文件</h5>
                        <el-upload
                                action=""
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList"
                        >
                            <el-button size="small" type="primary">点击上传文件</el-button>
                            <div slot="tip" class="el-upload_tip">只能上传jpg、png文件，且不超过500kb</div>
                        </el-upload>
                    </div>
                    <div>
                        <h5>评分组件</h5>
                        <div>
                            <span>不区分颜色</span>
                            <el-rate v-model="elRate1"></el-rate>
                        </div>
                        <div>
                            <span>区分颜色</span>
                            <el-rate v-model="elRate2" :colors="colors"></el-rate>
                        </div>
                    </div>
                    <div>
                        <h5>icon 图标</h5>
                        <div>
                            <i class="el-icon-edit"></i>
                            <i class="el-icon-share"></i>
                            <i class="el-icon-delete"></i>
                            <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        </div>
                    </div>
                    <div>
                        <h5>Link文字链接</h5>
                        <div>
                            <el-link href="https://www.baidu.com">百度</el-link>
                            <el-link type="primary">主要链接</el-link>
                            <el-link type="success">成功链接</el-link>
                            <el-link type="warning">警告链接</el-link>
                            <el-link type="danger">危险链接</el-link>
                            <el-link type="info">信息链接</el-link>
                            <el-link type="info" disabled>禁用--信息链接</el-link>
                        </div>
                    </div>
                    <div>
                        <h5>table</h5>
                        <div>
                            <el-table :data="tableData" style="width:100%">
                                <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="180"
                                ></el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="姓名"
                                    width="180"
                                ></el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="地址"
                                ></el-table-column>
                            </el-table>

                            <el-table :data="tableData" border stripe style="width:100%">
                                <el-table-column
                                        prop="date"
                                        label="日期"
                                        width="180"
                                ></el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="姓名"
                                        width="180"
                                ></el-table-column>
                                <el-table-column
                                        prop="address"
                                        label="地址"
                                ></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div>
                        <h5>tag标签</h5>
                        <el-tag>普通标前</el-tag>
                        <el-tag type="success">成功标签</el-tag>
                        <el-tag type="info">信息标签</el-tag>
                        <el-tag type="warning">警告标签</el-tag>
                        <el-tag type="danger">危险标签</el-tag>
                        <el-tag closable v-if="tagShow" v-on:close="closeFun">可移除标签</el-tag>
                    </div>
                    <div>
                        <h5>进度条</h5>
                        <div>
                            <el-progress :percentage="50"></el-progress>
                            <el-progress :percentage="100" :format="format"></el-progress>
                            <el-progress :percentage="100" status="success"></el-progress>
                            <el-progress :percentage="100" status="warning"></el-progress>
                            <el-progress :percentage="50" status="exception"></el-progress>
                            <el-progress :text-inside="true" :stroke-width="26" :percentage="80"></el-progress>
                            <h5>环形进度条</h5>
                            <el-progress type="circle" :percentage="30"></el-progress>
                        </div>
                    </div>
                    <div>
                        <h5>树形控件</h5>
                        <div>
                            <el-tree
                                :data="data"
                                :props="defaultProps"
                                @node-click="handleNodeClick"
                            ></el-tree>
                        </div>
                    </div>
                    <div>
                        <h5>分页插件</h5>
                        <div>
                            <el-pagination
                                v-on:size-change="handleSizeChange"
                                v-on:current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[10,20,50,100]"
                                :page-size="10"
                                layout="total,sizes,prev,pager,next,jumper"
                                :total="total"
                            ></el-pagination>
                        </div>
                    </div>
                    <div>
                        <h5>Badge 标记</h5>
                        <div>
                            <el-badge :value="12" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge :value="120" :max="99">
                                <el-button size="small">赞</el-button>
                            </el-badge>
                            <el-badge is-dot class="item">
                                <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                            </el-badge>
                        </div>
                    </div>
                    <div>
                        <h5>Avatar头像</h5>
                        <div>
                            <el-avatar :size="50" :src="circleUrl"></el-avatar>
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="demo-fit">
                            <div class="block" v-for="fit in fits" :key="fit" @click="alertFun(fit)">
                                <span class="title">{{fit}}</span>
                                <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
            <el-footer>
                footer
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import './elementUi.scss'

    export default {
        name: "index",
        data: function () {
            return {
                radio: '1',
                time: '',
                date1: '',
                date2: '',
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                fileList: [
                    {
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    },
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ],
                elRate1:0,
                elRate2:0,
                //等同于{2:'#99A9BF',4:{value:'#F7BA2A',excluded:true},5:'#ff9900'}
                colors:['#99A9BF','#F7BA2A','#FF9900'],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tagShow:true,
                data: [
                    {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps:{
                    children:'children',
                    label:'label'
                },
                currentPage4:1,
                total:400,
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                fits:['fill','contain','cover','none','scale-down'],
                url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        },
        methods: {
            headClick: function () {
                alert('路由跳转');
                this.$router.push({path: '/sin'});
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            closeFun:function(){
                this.tagShow=false;
            },
            format:function(val){
                console.log(val);
                return val===100?'满':`${val}%`
            },
            handleNodeClick:function(data){
                console.log(data);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            alertFun:function(fit){
                console.log(fit);
                this.$message({
                    message:'恭喜你，这是一条成功的消息',
                    type:'success'
                })
            }
        },
        computed:{

        }
    }
</script>

<style scoped>

</style>
