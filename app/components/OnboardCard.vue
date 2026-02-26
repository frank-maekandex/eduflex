<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

defineProps({
  title: { type: String },
  subtitle: { type: String },
  imageSrc: { type: String },
  link: { type: String }
});

</script>

<template>
  <Card class="w-full bg-white flex flex-col items-center">
    <CardHeader class="pb-2">
        <div class="flex size-20 items-center justify-center mx-auto rounded-full bg-background">
          <NuxtImg 
              :src="imageSrc" 
              alt="Background" 
              class="size-12"
          />
        </div>
      <CardTitle class="text-center text-2xl">{{ title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-center text-gray-100">{{ subtitle }}</p>
    </CardContent>
    <CardFooter>
        <NuxtLink :to="link">
            <Button variant="outline">Continue</Button>
        </NuxtLink>
    </CardFooter>
  </Card>
</template>
