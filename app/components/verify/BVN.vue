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

const selectedFile = ref(null)

const handleFile = (event: any) => {
  const file = event.target.files[0]
  if (!file) return

  // PAGE SPECIFIC LOGIC: 1MB limit here
  if (file.size > 1 * 1024 * 1024) {
    return alert("Too big for Page A!")
  }

  selectedFile.value = file
  // Start upload...
}

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
            <Select>
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
        <FileUpload 
            label="Proof of Address (Light or Sewage)"
            :fileName="selectedFile?.name"
            @select="handleFile" 
            accept=".pdf,.jpeg,.jpg,.png"
            desc="PDF, JPEG, PNG ≤ 2MB"
        />
        <Field class="max-w-72 mx-auto">
            <Button type="submit">
                Continue
            </Button>
        </Field>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" variant="outline">
                Verify Later
            </Button>
        </Field>
    </FieldGroup>
</template>
