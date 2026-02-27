<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const selectedIdType = ref<'NIN' | 'BVN' | null>(null)

</script>

<template>
    <FieldGroup>
        <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold">
                Enter your BVN or NIN
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="bvn">
              Select Verification Type
            </FieldLabel>
            <Select v-model="selectedIdType">
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a verification type" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>Verification Types</SelectLabel>
                        <SelectItem value="BVN">
                            BVN
                        </SelectItem>
                        <SelectItem value="NIN">
                            NIN
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field class="grid gap-1" v-if="selectedIdType === 'NIN'">
            <FieldLabel for="nin">
                NIN
            </FieldLabel>
            <Input id="nin" type="number" placeholder="Enter 11-Digits NIN" />
        </Field>
        <Field class="grid gap-1" v-if="selectedIdType === 'BVN'">
            <FieldLabel for="bvn">
                BVN
            </FieldLabel>
            <Input id="bvn" type="number" placeholder="Enter 11-Digits BVN" />
        </Field>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" @click="$emit('next')">
                Continue
            </Button>
        </Field>
        <Field class="max-w-72 mx-auto">
            <NuxtLink to="/dashboard/parent">
                <Button type="submit" variant="outline" class="w-full">
                    Verify Later
                </Button>
            </NuxtLink>
        </Field>
    </FieldGroup>
</template>
