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
      <DialogContent class="sm:max-w-[700px] max-h-[95%] bg-white overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Admin Details</DialogTitle>
        </DialogHeader>
        <div>
          <div class="rounded-lg p-3 bg-background">
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
            <h3 class="font-semibold text-sm mb-2">Role Assignment</h3>
            <div class="grid gap-6">
              <Field class="grid gap-1">
                <FieldLabel>
                  Assigned Role
                </FieldLabel>
                <Select default-value="admin">
                  <SelectTrigger class="w-full">
                      <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent class="bg-white">
                      <SelectGroup>
                          <SelectLabel>Roles</SelectLabel>
                          <SelectItem value="super_admin">
                            Super Admin
                          </SelectItem>
                          <SelectItem value="admin">
                            Admin
                          </SelectItem>
                          <SelectItem value="finance">
                            Finance
                          </SelectItem>
                      </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field class="grid gap-1 rounded-md bg-[#B3C0D3] p-3">
                <FieldLabel for="fullname" class="font-bold">
                  Role Description
                </FieldLabel>
                <p class="font-regular text-sm">Full system access to all modules. Can manage all users, settings, and configurations</p>
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="email">
                  Account Status
                </FieldLabel>
                <RadioGroup default-value="active" class="flex items-center gap-4">
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="active" value="active" />
                    <Label for="active">Active</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="inactive" value="inactive" />
                    <Label for="inactive">Inactive</Label>
                  </div>
                </RadioGroup>
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="email">
                  Reason for Changes
                </FieldLabel>
                <Textarea placeholder="Enter reason for updating this admin user..." class="h-28"/>
              </Field>
            </div>
          </div>
        </div>
        <div class="gap-4 w-full flex items-start flex-col sm:flex-row sm:items-center justify-between">
          <button variant="link" class="text-red-600">Reset Password</button>
          <div class="flex items-center gap-2">
            <DialogClose as-child>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Save Changes</Button>
          </div>
        </div>
      </DialogContent>
    </form>
  </Dialog>
</template>
