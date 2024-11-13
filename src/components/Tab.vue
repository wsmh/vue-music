<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    type:{
        type: String
    },
    labelList:{
        type:Array
    }
  })
  const activeTab = ref(1);
  const activeTab_s = ref(1);

  function slideChange(){
    return{
        left : `${(10+(activeTab.value-1)*72)}px`
    }
  }


</script>

<template>
    <div class="tab-con" v-if="props.type === 'main'">
        <ul class="tabs">
            <li v-for="item in props.labelList" :key="item.id" class="tab-pane" :value="activeTab" >
                <router-link active-class="active" :to="item.path" class="router-content" @click="activeTab = item.id">{{item.name}}</router-link>
            </li>
        </ul>
        <div class="slide-box" :style="slideChange()"></div>
    </div>

    <ul class="tabs-s" v-if="props.type === 'secondary'">
        <li v-for="item in props.labelList" :key="item.id" class="tab-pane-s" :value="activeTab_s" >
            <router-link active-class="active-s" :to="item.path" class="router-content-s" @click="activeTab_s = item.id">{{item.name}}</router-link>
        </li>
    </ul>
    
</template>

<style scoped lang="scss">
    .tab-con{
        width: 250px;
        height: 50px;
        position: relative;
        .slide-box{
            position: absolute;
            width: 16px;
            background-color: red;
            border-radius: 2px;
            height: 3px;
            bottom: 4px;
            left: 10px;
            transition: all 0.15s;
            z-index: -1;
        }
    }
    .tabs{
        @include center;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .tab-pane{
        @include ul-noDots;
        @include flex-space(40px);
        text-align: center;
        .router-content{
            font-weight: 600;
            color: $info-color;
            white-space: nowrap;
        }
        .active{
            color: black;
        }
    }

    
    .tabs-s{
        display: flex;
        align-items: center;
        width: 340px;
        height: 50px;
        padding-left: 10px;
        scrollbar-width: none;
        overflow-x: scroll;
        .tab-pane-s{
            @include ul-noDots;
            @include flex-space(15px);
            text-align: center;
            .router-content-s{
                color: $info-color;
                white-space: nowrap;
                font-size: 14px;
                padding:6px 12px 6px 12px;
                border-radius: 20px;
            }
    
            .active-s{
                color: rgb(52, 52, 52);
                font-weight: 700;
                background-color: rgba(171, 171, 171, 0.288);
            }
        }
    }

</style>
