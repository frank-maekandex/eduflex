<script setup lang="ts">
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
</script>

<template>
  <SidebarProvider>
    <AdminSidebar />
    <SidebarInset class="bg-background mx-2 lg:mx-6">
      <header class="bg-white sticky top-0 flex h-20 shrink-0 items-center gap-2 z-50 px-4 rounded-b-xl">
        <SidebarTrigger class="-ml-1 text-black" />
        <Separator orientation="vertical" class="mr-2 w- h-4 bg-background" />
        <div>
          <h2 class="flex items-center gap-2 font-semibold text-xs md:text-base lg:text-lg">
            <span>{{ $route.meta.title }} {{ $route.meta.userName }}</span>
            <Icon 
              v-if="$route.meta.icon" 
              :name="($route.meta.icon as string)" 
              class="size-5 hidden lg:flex" 
            />
          </h2>
        </div>
        <div class="h-full ml-auto flex items-center gap-4">
          <NuxtLink to="/dashboard/admin/notifications" class="relative">
            <span class="flex size-10 items-center justify-center rounded-full bg-background">
              <Icon name="ph:bell-light" class="text-gray-100 size-6" />
            </span>
          </NuxtLink>
          <NuxtLink to="/dashboard/admin/settings">
            <Avatar class="bg-background">
              <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="P" />
              <AvatarFallback class="text-primary font-bold text-base">P</AvatarFallback>
            </Avatar>
          </NuxtLink>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 px-2 py-6 bg-background">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
