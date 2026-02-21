<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { ref } from 'vue'
import { OTPInput } from 'vue-input-otp'

const otpValue = ref('')

const onComplete = (value: string) => {
  console.log('Final OTP:', value)
}

const submit = () => {
  navigateTo('/dashboard/parent', {
    replace: true, // Prevents user from going back to the form
    external: false // Set to true if navigating to a different website
  })
}

</script>

<template>
  <Card class="bg-white border-none">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl">
        Enter verification code
      </CardTitle>
      <CardDescription class="text-gray-100">We sent a 6-digit code to your email.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel for="otp" class="sr-only">
              Verification code
            </FieldLabel>
            <OTPInput
                v-model="otpValue"
                :maxlength="6"
                @complete="onComplete"
                container-class="flex items-center gap-2"
            >
                <template #default="{ slots }">
                <div v-for="(slot, idx) in slots" :key="idx"
                    :class="[
                    'size-14 border border-gray-border rounded-lg flex items-center justify-center text-xl font-bold transition-all',
                    slot.isActive ? 'border-primary ring-2 ring-primary/20' : 'border-input text-muted-foreground'
                    ]"
                >
                    {{ slot.char }}
                    <div v-if="slot.isActive && !slot.char" class="w-0.5 h-6 bg-primary animate-pulse" />
                </div>
                </template>
            </OTPInput>
            <FieldDescription class="text-center">
              Enter the 6-digit code sent to your email.
            </FieldDescription>
          </Field>
          <Button type="submit" @click.prevent="submit">
            Verify
          </Button>
          <FieldDescription class="text-center text-gray-100">
            Resend code in <span class="text-primary font-medium">00:99</span>
          </FieldDescription>
          <FieldDescription class="text-center text-gray-100">
            Didn't receive the code? <button class="text-primary font-medium">Resend</button>
          </FieldDescription>
        </FieldGroup>
      </form>
    </CardContent>
  </Card>
</template>
