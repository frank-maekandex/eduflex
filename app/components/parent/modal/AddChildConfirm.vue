<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'

const props = defineProps<{
  child: {
    name: string;
    school: string;
    class: string;
    age: string;
    [key: string]: any;
  }
}>()

const isOpen = ref(false)
const showSuccess = ref(false)

// Create a function to handle the transition
const handleConfirm = () => {
  isOpen.value = false      // This closes the "Your Child" modal
  showSuccess.value = true  // This opens the "Success" alert
}

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  showSuccess.value = false
}

defineExpose({ openModal })
</script>

<template>
  <Dialog v-model:open="isOpen">
    <form>
      <DialogContent class="sm:max-w-[425px] max-h-[95%] overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Your Child</DialogTitle>
        </DialogHeader>
        <div class="grid gap-4">
          <div>
            <Label class="text-gray-100 font-normal">Full Name</Label>
            <h2 class="font-semibold">{{ child.name }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Age</Label>
            <h2 class="font-semibold">{{ child.age }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">School</Label>
            <h2 class="font-semibold">{{ child.school }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Class</Label>
            <h2 class="font-semibold">{{ child.class }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Academic Term</Label>
            <h2 class="font-semibold">First</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Date Added</Label>
            <h2 class="font-semibold">{{ child.date }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Loan Status</Label>
            <h2 class="font-semibold">{{ child.loanStatus }}</h2>
          </div>
        </div>
        <DialogFooter class="gap-4">
          <Button type="submit" @click.prevent="handleConfirm">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
  <AlertModal
    v-model="showSuccess"
    title="Child Added Successfully!"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full rounded-full" @click="closeModal">
      Add Another Child
    </Button>
    <NuxtLink to="/dashboard/parent/children">
      <Button class="w-full mt-4" variant="outline">
        View All Children
      </Button>
    </NuxtLink>
  </AlertModal>

</template>
