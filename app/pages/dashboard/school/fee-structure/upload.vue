<template>
  <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Fee Structure" desc="Upload CSV File"/>

    <div class="w-full flex-1 flex flex-col items-center overflow-x-auto">
        <div class="w-full max-w-[700px] min-h-96">

            <FileUpload 
                :fileName="selectedFile?.name"
                @select="handleFile" 
                accept=".csv"
                desc="CSV ≤ 2MB"
                class="h-full"
            />
        </div>
    </div> 
  </div>

</template>

<script lang="ts" setup>

definePageMeta({
    layout: "school-dashboard",
    title: 'Upload Fee Structure'
})

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