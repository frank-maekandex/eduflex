<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const submit = () => {
  navigateTo('/school-otp')
}

</script>

<template>
  <form :class="cn('flex flex-col gap-6', props.class)">
    <FieldGroup>
      <div class="flex flex-col items-center gap-1 text-center">
        <h1 class="text-2xl font-bold">
          Let’s Get Started
        </h1>
      </div>
      <Field class="grid gap-1">
        <FieldLabel for="email">
          School Name
        </FieldLabel>
        <Input id="name" type="text" placeholder="Enter school name here" required />
      </Field>
      <Field class="grid gap-1">
        <FieldLabel for="email">
          School Email Address
        </FieldLabel>
        <Input id="email" type="email" placeholder="Enter a valid email address here" required />
      </Field>
      <Field class="grid gap-1">
        <FieldLabel for="phone" class="font-semibold">
          Official Phone Number
        </FieldLabel>
        
        <div class="flex items-center gap-2 px-3 py-2 rounded-md border border-input bg-transparent ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          
          <div class="flex items-center gap-1 pr-2 border-r border-gray-200">
            <Icon name="twemoji:flag-nigeria" class="size-5" />
          </div>

          <input 
            id="phone" 
            type="tel" 
            placeholder="Enter official phone number here" 
            class="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            required 
          />
        </div>
        
        <p class="text-[10px] italic text-muted-foreground">
          An OTP would be sent to this number for verification
        </p>
      </Field>
      <Field class="grid gap-1">
        <FieldLabel for="email">
          Password
        </FieldLabel>
        <Input id="password" type="password" placeholder="Enter password here" required />
      </Field>
      <Field class="grid gap-1">
        <FieldLabel for="email">
          Confirm Password
        </FieldLabel>
        <Input id="confirm-password" type="password" placeholder="Re-enter password here" required />
      </Field>
      <FieldDescription class="flex flex-row items-start gap-2">
        <Checkbox />
        <p class="-mt-1">
          I agree to the <NuxtLink to="/" class="text-primary">Terms & Conditions</NuxtLink>
          and <NuxtLink to="/" class="text-primary">Privacy Policy</NuxtLink>.
        </p>
      </FieldDescription>
      <Field>
        <Button type="submit" @click.prevent="submit">
          Continue
        </Button>
        <FieldDescription class="text-center">
          Already have an account? <NuxtLink to="/login" class="text-primary font-semibold">Sign in</NuxtLink>
        </FieldDescription>
      </Field>
    </FieldGroup>
  </form>

</template>
