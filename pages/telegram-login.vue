<template>
    <pre>

        {{ user }}
    </pre>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { SERVER_URL } from '~/config'

export default
    {
        setup() {
            const user = ref({})
            return { user }
        },
        mounted() {
            let tgAuthResult = this.$route?.fullPath?.split('#tgAuthResult=')[1]
            if (tgAuthResult) {
                location.hash = ''

                var pad = tgAuthResult.length % 4;
                if (pad > 1) {
                    tgAuthResult += new Array(5 - pad).join('=');
                }
                console.log(JSON.parse(window.atob(tgAuthResult)))

                this.user = JSON.parse(window.atob(tgAuthResult))
                axios.post(SERVER_URL+'/api/user/auth/telegram_login/?dev=1', this.user)
            }
        }
    }
</script>