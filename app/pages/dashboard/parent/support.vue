<template>
  <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <div class="max-w-[500px] flex flex-col mx-auto">
      <TitleDesc title="How can we help you?" desc="Get answers, resolve issues, and contact our support team anytime." />
    
      <div class="w-full grid gap-6">
        <Search
          v-model="search"
          class="border border-gray-border bg-white w-full" 
          placeholder="Search help topics..."
        />

        <div class="grid grid-cols-3 gap-3 max-w-[400px] mx-auto">
          <div class="rounded-2xl border px-2 py-4 border-gray-border flex flex-col items-center justify-center">
            <Icon name="circum:square-question" class="size-6 text-gray-100" />
            <h3 class="font-semibold text-xs text-center">Frequently Asked Questions</h3>
          </div>
          <div class="rounded-2xl border px-2 py-4 border-gray-border flex flex-col items-center justify-center">
            <Icon name="circum:square-question" class="size-6 text-gray-100"/>
            <h3 class="font-semibold text-xs text-center">Integration Guides</h3>
          </div>
          <div class="rounded-2xl border px-2 py-4 border-gray-border flex flex-col items-center justify-center">
            <Icon name="hugeicons:customer-support" class="size-6 text-gray-100"/>
            <h3 class="font-semibold text-xs text-center">Contact Support</h3>
          </div>
        </div>
      
      </div>

      <div class="mt-10">
        <h2 class="font-bold text-xl mb-4">Submit Ticket</h2>
        <form class="flex flex-col gap-4">
          <FieldGroup class="gap-4">
            <Field class="grid gap-1">
              <FieldLabel for="email">
                Title
              </FieldLabel>
              <Input id="name" type="text" placeholder="Enter title here" required />
            </Field>
            <Field class="grid gap-1">
              <FieldLabel for="email">
                Description
              </FieldLabel>
              <Textarea placeholder="Enter description here." class="h-28"/>
            </Field>
            <Field class="w-fit ml-auto">
              <Button type="submit" @click.prevent="submit">
                Send
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'

import { ref } from 'vue'
const search = ref('') 

  definePageMeta({
    layout: "parent-dashboard",
    title: 'Support'
  })

  const add = () => {
    console.log('Fetching branches...')
  }

  const submit = () => {

  }

  const currentPage = ref(1)
  const totalPages = ref(1000)

  const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    console.log('Page changed to', newPage)
    // Fetch new data here based on the page
  }

  const childrens = [
    {
      "id": "std_001",
      "name": "David Michael",
      "age": "10yrs",
      "school": "Sunrise Academy",
      "class": "JSS 1",
      "loanStatus": "Ongoing",
      "loanAmount": 240000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_002",
      "name": "Blessing Michael",
      "age": "14yrs",
      "school": "Victory High School",
      "class": "JSS 1",
      "loanStatus": "Pending",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_003",
      "name": "Samuel Michael",
      "age": "11yrs",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "loanStatus": "No Loan",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_004",
      "name": "Peace Michael",
      "age": "11yrs",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "loanStatus": "No Loan",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    }
  ]

</script>