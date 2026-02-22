<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps<SidebarProps>()

// This is sample data.
const navBar = [
  {
    title: "Dashboard",
    url: "/dashboard/admin/home",
    icon: "streamline-plump:home-1",
    activeIcon: "streamline-plump:home-1-solid",
  },
  {
    title: "Parents",
    url: "/dashboard/admin/parents",
    icon: "mingcute:user-2-line",
    activeIcon: "mingcute:user-2-fill",
  },
  {
    title: "Schools",
    url: "/dashboard/admin/schools",
    icon: "teenyicons:school-outline",
    activeIcon: "teenyicons:school-solid",
  },
  {
    title: "Loans",
    url: "/dashboard/admin/loans",
    icon: "solar:wallet-2-linear",
    activeIcon: "solar:wallet-2-bold",
  },
  {
    title: "Wallet",
    url: "/dashboard/admin/wallet",
    icon: "iconoir:wallet",
    activeIcon: "iconoir:wallet-solid",
  },
  {
    title: "Verifications",
    url: "/dashboard/admin/verifications",
    icon: "mdi:shield-check-outline",
    activeIcon: "mdi:shield-check",
  },
  {
    title: "Disbursements",
    url: "/dashboard/admin/disbursements",
    icon: "solar:cash-out-outline",
    activeIcon: "solar:cash-out-bold",
  },
  {
    title: "Suppport",
    url: "/dashboard/admin/support",
    icon: "bi:question-square",
    activeIcon: "bi:question-square-fill",
  },
  {
    title: "Settings",
    url: "/dashboard/admin/settings",
    icon: "famicons:settings-outline",
    activeIcon: "famicons:settings",
  }
]

const isPageActive = (itemUrl: string) => {
  // If it's the main dashboard, only highlight if the path is exactly that
  if (itemUrl === '/dashboard/parent') {
    return route.path === itemUrl
  }
  
  // For other items, highlight if the path starts with that URL 
  // (e.g., /dashboard/parent/settings/profile keeps 'Settings' active)
  return route?.path?.startsWith(itemUrl)
}

</script>

<template>
  <Sidebar v-bind="props" class="!bg-white border-none">
    <div class="bg-white h-full flex flex-col">
      <SidebarHeader class="h-28 flex flex-col justify-center px-8">
        <Logo />
      </SidebarHeader>

      <SidebarContent class="py-4"> 
        <SidebarMenu class="gap-4"> 
          <SidebarMenuItem v-for="item in navBar" :key="item.title">
            <SidebarMenuButton
              as-child
              :is-active="isPageActive(item.url)"
              class="h-12 px-7 transition-all duration-200 group rounded-none"
              :class="[
                isPageActive(item.url) 
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-l-4 border-primary' 
                  : 'text-gray-100 hover:bg-background'
              ]"
            >
              <NuxtLink :to="item.url" class="flex items-center gap-4 w-full">
                <Icon 
                  :name="isPageActive(item.url) ? item.activeIcon : item.icon" 
                  class="size-6 transition-colors"
                  :class="isPageActive(item.url) ? 'hover:text-white' : 'text-gray-100'" 
                />
                <span class="font-semibold text-base tracking-tight">
                  {{ item.title }}
                </span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <div class="px-8 py-8">
        <Button variant="outline" class="w-full">Log Out</Button>
      </div>
    </div>
  </Sidebar>
</template>
