<script setup lang="ts">

const selectedFile = ref<File | null>(null)

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
                Upload Your Residential Address
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="address">
                Address
            </FieldLabel>
            <Input id="address" type="text" placeholder="Enter address here" />
        </Field>
        <FileUpload 
            label="Proof of Address (Light or Sewage)"
            :fileName="selectedFile?.name"
            @select="handleFile" 
            accept=".pdf,.jpeg,.jpg,.png"
            desc="PDF, JPEG, PNG ≤ 2MB"
        />
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
