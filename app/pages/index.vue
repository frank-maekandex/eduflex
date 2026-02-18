<template>
  <div>
    <Hero/>
    <ImageCard 
      title="For Parents"
      button-text="Continue as Parent"
      image-src="/parent.png"
      link="/parent"
    />
    <ImageCard 
      title="For Schools"
      subtitle="Built for Schools That Want Reliable Cash Flow"
      button-text="Continue as School"
      image-src="/school.png"
      :features="schoolFeatures" 
      link="/school"
    />
  </div>
</template>

<script lang="ts" setup>

  const schoolFeatures = [
    "Register your school.",
    "Upload your fee structure, and approve student enrollment requests.",
    "Track disbursements, view payment history, and manage your EduFlex wallet seamlessly."
  ];

</script>

