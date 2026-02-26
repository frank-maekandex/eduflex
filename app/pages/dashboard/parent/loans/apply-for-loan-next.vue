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
  title: 'Apply For Loan'
})

const confirmModalRef = ref<InstanceType<typeof ParentModalAddChildConfirm> | null>(null)

const showSuccess = ref(false)

// Create a function to handle the transition
const handleSuccess = () => {
  showSuccess.value = true 
}

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

</script>

<template>
    <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
      <TitleDesc title="Apply for School Fee Loan" />

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
                    <FieldLabel for="amount">
                        Amount
                    </FieldLabel>
                    <Input id="amount" type="number" placeholder="Enter amount here" required />
                </Field>
                <Field class="grid gap-1">
                    <FieldLabel>
                        Repayment Frequency
                    </FieldLabel>
                    <Select>
                        <SelectTrigger class="w-full">
                            <SelectValue placeholder="Select a repayment frequency" />
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectLabel>Repayment Frequency</SelectLabel>
                                <SelectItem value="3 months">
                                    3 months
                                </SelectItem>
                                <SelectItem value="6 months">
                                    6 months
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <Field class="grid gap-1">
                    <FieldLabel>
                        Tenure
                    </FieldLabel>
                    <Select>
                        <SelectTrigger class="w-full">
                            <SelectValue placeholder="Select a tenure" />
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectLabel>Tenure</SelectLabel>
                                <SelectItem value="first term">
                                    First Term
                                </SelectItem>
                                <SelectItem value="second term">
                                    Second Term
                                </SelectItem>
                                <SelectItem value="third term">
                                    Third Term
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <Field class="grid gap-1">
                    <FieldLabel for="rate">
                        Interest Rate
                    </FieldLabel>
                    <Input id="rate" type="text" placeholder="3%" />
              </Field>
            </div>

          

            <Field class="mt-16 max-w-[450px] mx-auto">
              <Button type="submit"  @click.prevent="handleSuccess">
                Add Child
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
     <AlertModal
        v-model="showSuccess"
        title="Loan Application Successful!"
        description="We will notify you of your loan status soon!"
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <NuxtLink to="/dashboard/parent">
            <Button class="w-full">
                Go to Dashboard
            </Button>
        </NuxtLink>
    </AlertModal>
</template>