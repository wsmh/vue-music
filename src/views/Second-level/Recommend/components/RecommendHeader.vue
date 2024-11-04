<script setup>
    import { ref } from 'vue';
    const input = ref('')

</script>

<template>
    <div class="header">
        <img src="@/components/png/menu.png" class="menu-icon">
        <div class="search-con">
            <div class="input-con">
                <el-icon class="input-icon-search"><Search /></el-icon>
                <input type="text" placeholder="后来 刘若英" v-model="input">
                <el-icon class="input-icon-2d"><FullScreen /></el-icon>
            </div>
        </div>
        <el-icon class="voice-icon"><Microphone /></el-icon>
    </div>
</template>

<style scoped lang="scss">
    .header{
        display: flex;
        align-items: center;
        height: 50px;
        .menu-icon{
            width: 25px;
            height: 30px;
            margin:0 20px 0 0 ;
        }
        .input-con{
            display: flex;
            align-items: center;
            background-color: rgba(214, 212, 212, 0.482);
            width: 310px;
            height: 35px;
            border-radius: 18px;
            input{
                background-color: rgba(0, 0, 0, 0);
                border: none;
                height: 100%;
                width: 78%;
                text-indent: 1em;
                &:focus{
                    outline: none;
                }
            }
            .input-icon-search{
                margin-left: 15px;
                color: rgb(155, 155, 155);
            }
            .input-icon-2d{
                color: rgb(155, 155, 155);
            }
        }
        .voice-icon{
            transform: scale(1.4);
            margin-left: 10px;
        }
    }
</style>
