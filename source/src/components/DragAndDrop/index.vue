<template>
    <div>
        <el-container>
            <el-header>
                Drag and drop
            </el-header>
            <el-main>
                <div draggable="true" class="drag"
                     v-on:dragstart="ondragstart"
                     @drag="ondrag"
                     id="drag"
                ></div>
                <div class="drop"
                     id="drop"
                     v-on:drop="ondrop"
                     v-on:dragover.prevent="ondragover"
                ></div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import './DragAndDrop.scss'

    export default {
        name: "DragAndDrop",
        data: function () {
            return {
                list:[]
            }
        },
        methods: {
            ondrag(ev) {//当拖动元素或选中元素时触发
                console.log('ondrag',ev);
            },
            ondragstart(ev) {//当拖动结束时触发
                console.log('ondragstart',ev);
                ev.dataTransfer.setData("Text",ev.target.id);
                this.list.push({
                    x:ev.x,y:ev.y
                })
            },
            ondragleave() {//当拖动或选中的元素离开一个可是释放的目标时触发
                console.log('ondragleave');
            },
            ondragover() {//当元素或选中的文本被拖到一个可是方目标时触发
                console.log('ondragover');
                //不阻止默认事件无法触发drop方法
            },
            ondragenter() {//当拖动元素或选中的文本到一个可是放目标时
                console.log('ondragenter');
            },
            ondragend() {//拖拽操作结束时触发
                console.log('ondragend');
            },
            ondrop(ev) {//当元素或选中的文本在可释放目标上被释放时触发
                console.log('ondrop',ev);
                console.log(ev.offsetX,ev.offsetY);
                let data=ev.dataTransfer.getData("Text");
                //let data=this.list;
                $('#drag').css('top',ev.offsetY-$('#drag').height()/2+'px');
                $('#drag').css('left',ev.offsetX-$('#drag').width()/2+'px');
                ev.target.appendChild(document.getElementById(data));
            },
        }
    }
</script>

<style scoped>

</style>
