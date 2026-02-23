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

</script>

<template>
  <Dialog>
    <form>
      <DialogTrigger as-child>
        <Button variant="outline">Add Admin</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[500px] max-h-[95%] overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Add New Admin User</DialogTitle>
          <DialogDescription class="text-gray-100">Create a new administrator account with role-based access control</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4">
          <Field class="grid gap-1">
            <FieldLabel for="fullname">
              Full Name
            </FieldLabel>
            <Input id="fullname" type="text" placeholder="Enter full name here" />
          </Field>
          <Field class="grid gap-1">
            <FieldLabel for="email">
              Work Email
            </FieldLabel>
            <Input id="email" type="email" placeholder="Enter email here" />
          </Field>
          <Field class="grid gap-1">
            <FieldLabel>
              Select Role
            </FieldLabel>
            <Select>
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
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
        </div>
        <DialogFooter class="gap-4">
          <DialogClose as-child>
            <Button variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <NuxtLink to="/admin-invitation">
            <Button>
              Send Invitation
            </Button>
          </NuxtLink>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
