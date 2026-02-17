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

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const submit = () => {
  navigateTo('/dashboard', {
    replace: true, // Prevents user from going back to the form
    external: false // Set to true if navigating to a different website
  })
}

</script>

<template>
  <form :class="cn('flex flex-col gap-6', props.class)">
    <FieldGroup>
      <div class="flex flex-col items-center gap-1 text-center">
        <h1 class="text-2xl font-bold">
          Login to your account
        </h1>
      </div>
      <Field class="grid gap-1">
        <FieldLabel for="email">
          Email
        </FieldLabel>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </Field>
      <Field class="grid gap-1">
        <div class="flex items-center">
          <FieldLabel for="password">
            Password
          </FieldLabel>
          <NuxtLink
            to="/forgot-password"
            class="ml-auto text-sm text-primary underline-offset-4 hover:underline font-medium"
          >
            Forgot your password?
          </NuxtLink>
        </div>
        <Input id="password" type="password" required />
      </Field>
      <Field>
        <Button type="submit" @click.prevent="submit">
          Login
        </Button>
        <FieldDescription class="text-center">
          Don't have an account? <NuxtLink to="/onboarding" class="text-primary font-semibold">Sign up</NuxtLink>
        </FieldDescription>
      </Field>
    </FieldGroup>
  </form>

</template>
