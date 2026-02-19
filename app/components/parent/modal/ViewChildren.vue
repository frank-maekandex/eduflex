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
      <DialogContent class="sm:max-w-[425px] max-h-[95%] overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Your Child</DialogTitle>
        </DialogHeader>
        <div class="grid gap-4">
          <div>
            <Label class="text-gray-100 font-normal">Full Name</Label>
            <h2 class="font-semibold">{{ children.name }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Age</Label>
            <h2 class="font-semibold">{{ children.age }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">School</Label>
            <h2 class="font-semibold">{{ children.school }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Class</Label>
            <h2 class="font-semibold">{{ children.class }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Academic Term</Label>
            <h2 class="font-semibold">First</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Date Added</Label>
            <h2 class="font-semibold">{{ children.date }}</h2>
          </div>
          <div>
            <Label class="text-gray-100 font-normal">Loan Status</Label>
            <h2 class="font-semibold">{{ children.loanStatus }}</h2>
          </div>
        </div>
        <DialogFooter class="gap-4">
          <!-- <DialogClose as-child>
            <Button variant="outline">
              Close
            </Button>
          </DialogClose> -->
          <Button type="submit">
            Pay Loan Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
