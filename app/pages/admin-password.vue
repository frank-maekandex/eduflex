<template>
  <div class="bg-background flex min-h-svh flex-col gap-6 p-6 md:p-10">
    <div class="flex float-left">
      <Logo color-class="text-primary" size-class="text-2xl" />
    </div>
    <div class="flex-1 flex w-full justify-center mx-auto flex-col bg-white p-6 md:p-10 rounded-3xl">
       <div class="flex flex-col gap-8 md:gap-14">
            <div class="flex flex-col gap-2">
                <h2 class="font-bold text-2xl md:text-5xl">Welcome to the Admin Team</h2>
                <p class="text-gray-100 text-base md:text-xl">Set up your secure password to get started</p>
            </div>
            <FieldGroup class="max-w-[500px]">
                <Field class="grid gap-1">
                    <FieldLabel for="new-password">
                        Create Password
                    </FieldLabel>
                    <Input id="new-password" type="password" placeholder="Enter new password here" required />
                </Field>
                <Field class="grid gap-1">
                    <FieldLabel for="confirm-password">
                        Confirm Password
                    </FieldLabel>
                    <Input id="confirm-password" type="password" placeholder="Re-enter new password here" required />
                </Field>
                <Field class="w-fit">
                    <Button type="submit">
                        Continue
                    </Button>
                </Field>
            </FieldGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    layout: false
  })

</script>
