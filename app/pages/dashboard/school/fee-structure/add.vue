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
import { Button } from '@/components/ui/button'
import { ref } from 'vue';

definePageMeta({
  layout: "school-dashboard",
  title: 'Add Fee Structure'
})

const showSuccess = ref(false)

// Create a function to handle the transition
const handleSuccess = () => {
  showSuccess.value = true 
}

</script>

<template>
    <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
      <TitleDesc title="Set Up Your Fee Structure" />

      <div>
        <form>
          <FieldGroup>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Field class="grid gap-1">
                <FieldLabel for="session">
                  Academic Session
                </FieldLabel>
                <Input id="session" type="text" placeholder="E.g 2025/2026" />
              </Field>
              <Field class="grid gap-1">
                <FieldLabel>
                    Term
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
                    <FieldLabel>
                        Class Categories
                    </FieldLabel>
                    <Select>
                        <SelectTrigger class="w-full">
                            <SelectValue placeholder="Select class categories" />
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectLabel>class Categories</SelectLabel>
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
                <FieldLabel for="amount">
                  Tuition Fee Amount
                </FieldLabel>
                <Input id="amount" type="number" placeholder="Enter amount here" />
              </Field>
              <Field class="grid gap-1">
                    <FieldLabel for="optional_amount">
                        Optional Fees
                    </FieldLabel>
                    <Input id="optional_amount" type="number" placeholder="PTA, Uniform, etc" required />
                </Field>
            </div>

          

            <Field class="mt-16 max-w-[450px] mx-auto">
              <Button type="submit"  @click.prevent="handleSuccess">
                Add Fee
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
     <AlertModal
        v-model="showSuccess"
        title="Fee Structure Added Successfully!"
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <NuxtLink to="/dashboard/school/fee-structure">
          <Button class="w-full">
            View Fee Structures
          </Button>
        </NuxtLink>
    </AlertModal>
</template>