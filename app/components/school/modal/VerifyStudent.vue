<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

const props = defineProps<{
  student: {
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

defineExpose({ openModal })

</script>

<template>
  <Dialog v-model:open="isOpen">
    <form>
      <DialogTrigger as-child>
        <Button>Verify</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px] max-h-[95%] overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Verify Student</DialogTitle>
        </DialogHeader>
        <div class="grid gap-4">
          <div>
            <Label class="text-gray-100 font-normal">Student Name</Label>
            <h2 class="font-semibold">{{ student.name }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Age</Label>
            <h2 class="font-semibold">{{ student.age }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">School</Label>
            <h2 class="font-semibold">{{ student.school }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Class</Label>
            <h2 class="font-semibold">{{ student.class }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Academic Term</Label>
            <h2 class="font-semibold">First</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Date Added</Label>
            <h2 class="font-semibold">{{ student.date }}</h2>
          </div>
          <div class="flex flex-row items-end gap-2 justify-between">
            <div>
              <Label class="text-gray-100 font-normal">Student Photo</Label>
              <h2 class="font-semibold">michael.jpg</h2>
            </div>
            <h1 class="text-primary font-semibold">View</h1>
          </div>
        </div>
        <DialogFooter class="gap-4">
          <Button variant="outline" class="w-full">
            Reject
          </Button>
          <Button type="submit" class="w-full" @click.prevent="handleConfirm">
            Verify
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
    <NuxtLink to="/dashboard/school/students">
      <Button class="w-full">
        View All Students
      </Button>
    </NuxtLink>
  </AlertModal>
</template>
