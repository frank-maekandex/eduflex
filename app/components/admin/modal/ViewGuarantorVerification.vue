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
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'

</script>

<template>
  <Dialog>
    <form>
      <DialogTrigger as-child>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent class="max-w-[700px] max-h-[95%] bg-white overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Verification Details -  PRT-00411</DialogTitle>
        </DialogHeader>
        <div>
            <div class="rounded-lg p-3 bg-background w-full">
                <h3 class="font-semibold text-sm mb-2">Personal Information</h3>
                <div class="space-y-2">
                    <div class="flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center justify-between">
                        <h2 class="text-gray-100">Full Name:</h2>
                        <h2>Michael Owodunmi</h2>
                    </div>
                    <div class="flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center justify-between">
                        <h2 class="text-gray-100">Email:</h2>
                        <h2>michaelowo@gm.com</h2>
                    </div>
                    <div class="flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center justify-between">
                        <h2 class="text-gray-100">Phone:</h2>
                        <h2>+234 801 243 5678</h2>
                    </div>
                    <div class="flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center justify-between">
                        <h2 class="text-gray-100">Date Joined:</h2>
                        <h2>15-Feb-2026</h2>
                    </div>
                    <div class="flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center justify-between">
                        <h2 class="text-gray-100">Last Login:</h2>
                        <h2>15-Feb-2026 00:00</h2>
                    </div>
                </div>
            </div> 
          <div class="mt-4">
            <div class="grid gap-6">
                <Field class="rounded-lg bg-emerald-100 p-4 space-y-2">
                    <h3 class="font-semibold text-sm">
                        Auto-Validation Result: Full Match
                    </h3>

                    <ul class="list-disc pl-5 space-y-1 text-sm">
                        <li>BVN verified via Mono API - Name, DOB, Phone match</li>
                        <li>NIN verified via Okra API - Full identity confirmed</li>
                        <li>Cross-reference check passed</li>
                    </ul>
                </Field>
              <Field class="grid gap-2">
                <FieldLabel>
                  Uploaded Documents
                </FieldLabel>
                <div class="flex flex-col md:flex-row gap-4">
                    <button class="border border-gray-border rounded-lg px-4 py-2 min-w-44 text-sm hover:bg-gray-50 flex items-center gap-2">
                        <Icon name="solar:download-linear" class="text-primary text-lg" />
                        <div class="flex flex-col items-start">
                            <p class="font-medium">ID Card</p>
                            <p class="text-xs">2.4MB</p>
                        </div>
                    </button>
                    <button class="border border-gray-border rounded-lg px-4 py-2 min-w-44 text-sm hover:bg-gray-50 flex items-center gap-2">
                        <Icon name="solar:download-linear" class="text-primary text-lg" />
                        <div class="flex flex-col items-start">
                            <p class="font-medium">ID Card</p>
                            <p class="text-xs">2.4MB</p>
                        </div>
                    </button>
                </div>
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="email">
                  Admin Review & Remarks
                </FieldLabel>
                <Textarea placeholder="Enter verification remarks, discrepancies, or additional notes..." class="h-28"/>
              </Field>
            </div>
          </div>
        </div>
        <DialogFooter class="gap-4">
            <div class="flex gap-3">
                <Button variant="outline">Decline</Button>
                <Button>Accept</Button>
            </div>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
