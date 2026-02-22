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
  children: {
    name: string;
    school: string;
    class: string;
    age: string;
    [key: string]: any;
  }
}>()

</script>

<template>
  <Dialog>
    <form>
      <DialogTrigger as-child>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px] lg:max-w-[700px] max-h-[95%] overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Student</DialogTitle>
        </DialogHeader>
        <div class="grid gtid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label class="text-gray-100 font-normal">Full Name</Label>
            <h2 class="font-semibold">{{ children?.name }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Age</Label>
            <h2 class="font-semibold">{{ children?.age }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">School</Label>
            <h2 class="font-semibold">{{ children?.school }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Class</Label>
            <h2 class="font-semibold">{{ children?.class }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Academic Term</Label>
            <h2 class="font-semibold">First</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Date Added</Label>
            <h2 class="font-semibold">{{ children?.date }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Loan Status</Label>
            <h2 class="font-semibold">{{ children?.loanStatus }}</h2>
          </div>
        </div>
        <DialogFooter class="gap-4">
          <DialogClose as-child>
            <Button variant="outline">
              Close
            </Button>
          </DialogClose>
          <NuxtLink :to="`/dashboard/admin/parents/view/${children?.id}/students/${children?.id}`">
            <Button>
              Loan History
            </Button>
          </NuxtLink>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
