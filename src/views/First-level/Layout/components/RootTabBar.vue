<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    labelList:{
        type:Array
    }
  })
  const activeTab = ref(1);


</script>

<template>
    <ul class="tabs">
        <li v-for="item in props.labelList" :key="item.id" class="tab-pane" :value="activeTab" >
            <router-link active-class="active" :to="item.path" class="router-content" @click="activeTab = item.id">
                <div class="to-page">
                    <div class="page-icon">
                        <img :src="item.imgUrl">
                    </div>
                    <div class="page-label">
                        {{item.name}}
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
    
</template>

<style scoped lang="scss">
    .tabs{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .tab-pane{
        @include ul-noDots;
        @include center;
        flex:1;
        height: 100%;
        .router-content{
            .page-label{
                color: rgb(109, 107, 107);
                font-size: 12px;
                margin-top: 5px;
            }
            .page-icon{
                @include center;
                @include circleImg(24px);
                img{
                    @include circleImg(24px);
                }
            }
            
        }
        .active{
            .page-label{
                color: red;
            }
        }
    }

    
    

</style>
