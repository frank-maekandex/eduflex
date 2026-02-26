<script lang="ts" setup>
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { DateValue } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ref } from 'vue';
import ParentModalAddChildConfirm from '@/components/parent/modal/AddChildConfirm.vue'


const defaultPlaceholder = today(getLocalTimeZone())
const date = ref() as Ref<DateValue>
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

definePageMeta({
  layout: "parent-dashboard",
  title: 'Add Child'
})

const confirmModalRef = ref<InstanceType<typeof ParentModalAddChildConfirm> | null>(null)

const fileName = ref<string | null>(null);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    fileName.value = target.files[0].name;
  }
};

const child = {
  "id": "std_001",
  "name": "David Michael",
  "age": "10yrs",
  "school": "Sunrise Academy",
  "class": "JSS 1",
  "loanStatus": "Ongoing",
  "loanAmount": 240000,
  "date": "22 Oct 2025",
}


// Logic to open the modal
const handleProcess = () => {
  
  //Programmatically trigger the modal
  confirmModalRef.value?.openModal()
}
</script>

<template>
    <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
      <TitleDesc title="Enter Child Information" />

      <div>
        <form>
          <FieldGroup>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Field class="grid gap-1">
                <FieldLabel for="firstname">
                  First Name
                </FieldLabel>
                <Input id="firstname" type="text" placeholder="Enter first name here" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="middlename">
                  Middle Name
                </FieldLabel>
                <Input id="middlename" type="text" placeholder="Enter middle name here" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="lastname">
                  Last Name
                </FieldLabel>
                <Input id="lastname" type="text" placeholder="Enter last name here" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="lastname">
                  Date of Birth
                </FieldLabel>
                <Popover v-slot="{ close }">
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      :class="cn('w-[240px] justify-start text-left text-black font-normal rounded-md border-gray-border px-3', !date && 'text-gray-100')"
                    >
                      <CalendarIcon />
                      {{ date ? df.format(date.toDate(getLocalTimeZone())) : "Pick a date" }}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-auto p-0 bg-white" align="start">
                    <Calendar
                      v-model="date"
                      :default-placeholder="defaultPlaceholder"
                      layout="month-and-year"
                      initial-focus
                      @update:model-value="close"
                    />
                  </PopoverContent>
                </Popover>
              </Field>
              <Field class="grid gap-1">
                <FieldLabel>
                  Select School
                </FieldLabel>
                <Select>
                  <SelectTrigger class="w-full">
                      <SelectValue placeholder="Select a school" />
                  </SelectTrigger>
                  <SelectContent class="bg-white">
                      <SelectGroup>
                          <SelectLabel>schools</SelectLabel>
                          <SelectItem value="f">
                              federal college
                          </SelectItem>
                          <SelectItem value="b">
                              boys college
                          </SelectItem>
                      </SelectGroup>
                  </SelectContent>
              </Select>
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="class">
                  Class
                </FieldLabel>
                <Input id="class" type="text" placeholder="Enter class here" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="term">
                  Academic Term
                </FieldLabel>
                <Input id="term" type="text" placeholder="Enter term here" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="session">
                  Academic Session
                </FieldLabel>
                <Input id="session" type="text" placeholder="E.g 2025/2026" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel for="photo">
                  Student Photo
                </FieldLabel>
                <div class="w-full">
                  <input 
                    id="photo-upload" 
                    type="file" 
                    class="hidden" 
                    accept="image/png, image/jpeg, image/jpg, .pdf" 
                    @change="handleFileChange"
                  />

                  <label 
                    for="photo-upload" 
                    class="flex flex-col justify-center w-full h-10 py-3 px-3 rounded-md border border-gray-border bg-white cursor-pointer hover:bg-gray-50 transition-all group"
                  >
                    <div class="flex gap-3">
                      <Icon name="lucide:upload" class="size-4 text-gray-100 group-hover:text-primary transition-colors" />
                      
                      <span class="text-xs font-medium text-gray-100 group-hover:text-gray-700">
                        {{ fileName || 'PDF/JPEG ≤ 2MB' }}
                      </span>
                    </div>
                  </label>
                </div>
              </Field>
            </div>

          

            <Field class="mt-16 max-w-[450px] mx-auto">
              <Button type="submit" @click.prevent="handleProcess">
                Add Child
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
    <ParentModalAddChildConfirm 
      ref="confirmModalRef" 
      :child="child" 
    />
</template>