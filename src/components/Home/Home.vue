<template>
    <div class="home">
        Home
    </div>
</template>
<script>
import { getUserInfo } from 'api/user'
export default {
    data() {
        return {
            
        }
    },
    created() {
        //this._getUserInfo()
    },
    methods: {
        _getUserInfo(){
            getUserInfo()
        }
    },
}
</script>
