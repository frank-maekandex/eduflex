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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
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
      <DialogContent class="sm:max-w-[550px] max-h-[95%] overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Loan Details</DialogTitle>
        </DialogHeader>
        <div>
          <div class="flex gap-4 py-4 border-b border-gray-border">
            <Avatar class="bg-background size-28 border border-gray-border">
              <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="P" />
              <AvatarFallback class="text-primary font-bold text-2xl">P</AvatarFallback>
            </Avatar>

            <div class="grid grid-cols-2 gap-2 flex-1">
              <div>
                <Label class="text-gray-100 font-normal">First Name</Label>
                <h2 class="font-semibold">Ojiego</h2>
              </div>
              <div>
                <Label class="text-gray-100 font-normal">Last Name</Label>
                <h2 class="font-semibold">Michael</h2>
              </div>
              <div>
                <Label class="text-gray-100 font-normal">School Name</Label>
                <h2 class="font-semibold">Sunrise Academy</h2>
              </div>
              <div>
                <Label class="text-gray-100 font-normal">Age</Label>
                <h2 class="font-semibold">10 years</h2>
              </div>
            </div>
          </div>
          <div class="py-4 border-b border-gray-border">
            <Label class="font-semibold text-lg mb-2">Loan Details</Label>

            <div class="grid grid-cols-3 gap-2 flex-1">
              <div>
                <Label class="text-gray-100 font-normal">Loan Amount</Label>
                <h2 class="font-semibold">{{ displayCurrency(Number(50000), 'NGN') }}</h2>
              </div>
              <div>
                <Label class="text-gray-100 font-normal">Tenure</Label>
                <h2 class="font-semibold">6 months</h2>
              </div>
              <div>
                <Label class="text-gray-100 font-normal">Loan ID</Label>
                <h2 class="font-semibold">EDFX-DA-2025-001</h2>
              </div>
              <div>
                <Label class="text-gray-100 font-normal">Approved Date</Label>
                <h2 class="font-semibold">01-09-2025</h2>
              </div>
              <div class="col-span-2">
                <Label class="text-gray-100 font-normal">Next Pay Due</Label>
                <h2 class="font-semibold">30th November, 2025</h2>
              </div>
            </div>
          </div>

          <Card class="bg-white p-4 rounded-2xl  min-h-[226px] my-4 border border-gray-border">
            <div class="w-full flex flex-row gap-2 items-center justify-between">
              <h3 class="font-bold self-start">Loan Progress</h3>
              <StudentStatus :status="'Active'" />
            </div>
    
            <div class="w-full flex items-center justify-between gap-4">
            
                <div class="flex flex-col gap-2 items-start max-w-[150px]">
                    <p class="text-[10px] leading-tight text-gray-100">
                    You’ve repaid 70% of your current loan.
                    </p>
                    <div class="mt-1">
                    <p class="text-sm text-gray-500">Remaining Balance:</p>
                    <p class="font-bold text-base">{{ displayCurrency(Number(50000), 'NGN') }}</p>
                    </div>
                </div>

                <div class="p-2 flex-shrink-0">
                    <ve-progress
                        :progress="70" 
                        :size="130" 
                        color="#10b981"
                        empty-color="#f1f5f9"
                        :thickness="12"
                        empty-thickness="12"
                        :line="'butt'"
                    >
                        <span class="text-xl font-bold text-[#1C274D]">
                            70%
                        </span>
                    </ve-progress>
                </div>
            </div>
            <div class="flex gap-2">
              <Button size="sm">
                Complete Payment
              </Button>
              <Button variant="outline" size="sm">
                Loan History
              </Button>
            </div>
          </Card>

        </div>
      </DialogContent>
    </form>
  </Dialog>
</template>
