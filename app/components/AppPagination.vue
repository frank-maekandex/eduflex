<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

// Props for reusability
const props = defineProps<{
  total: number
  itemsPerPage?: number
  defaultPage?: number
  ellipsisIndex?: number
}>()

const emit = defineEmits<{
  (e: 'update:page', page: number): void
}>()
</script>

<template>
  <Pagination
    :items-per-page="props.itemsPerPage || 10"
    :total="props.total"
    :default-page="props.defaultPage || 1"
    v-slot="{ page }"
  >
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious class="[&>span]:hidden border p-2 border-gray-100 rounded-md hover:bg-gray-50" />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
          @click="() => emit('update:page', item.value)"
          :class="[
            'border rounded-md transition-colors',
            item.value === page 
              ? 'bg-primary border-primary text-white hover:bg-primary hover:text-white' 
              : 'border-gray-100 text-black hover:bg-gray-50'
          ]"
        >
          {{ item.value }}
        </PaginationItem>
      </template>

      <PaginationEllipsis :index="props.ellipsisIndex || 4" />

      <PaginationNext class="[&>span]:hidden border p-2 border-gray-100 rounded-md hover:bg-gray-50" />
    </PaginationContent>
  </Pagination>
</template>
