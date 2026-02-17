<template>
  <div className="w-full min-h-[82vh] bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Company Branches" desc="Here is the details of your children and their financial progress">
      <Button @click="add">
        Add Student
      </Button>
    </ParentTitle>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    layout: "parent-dashboard",
    title: 'My Children'
  })

  const add = () => {
    console.log('Fetching branches...')
  }

</script>