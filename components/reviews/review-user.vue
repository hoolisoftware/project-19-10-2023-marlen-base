<script setup lang="ts">
import { useReviewUser } from '~/hooks/use-query/review';

const { data } = useReviewUser()
</script>

<template>
    
    <review-item v-if="data?.data"
        v-bind="data.data.review"
    />
</template>

<script lang="ts">
import reviewItem from './review-item-new.vue';
</script>
