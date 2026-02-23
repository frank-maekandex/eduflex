<template>
  <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="System Configuration & Access Control" desc="Manage roles, permissions, and platform settings." />

    <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Tabs v-model="activeTab" class="w-full">
            <TabsList class="p-0 shadow-none w-full bg-transparent flex flex-row mb-6">
        
                <TabsTrigger 
                    value="role_management" 
                    class="flex-1 py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                    :class="[
                    activeTab === 'role_management'
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                        : 'text-gray-100 hover:bg-background'
                    ]"
                >
                    <span class="font-semibold text-base tracking-tight">
                        Role Management
                    </span>
                </TabsTrigger>
                <TabsTrigger 
                    value="admin_users" 
                    class="flex-1 py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                    :class="[
                    activeTab === 'admin_users'
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                        : 'text-gray-100 hover:bg-background'
                    ]"
                >
                    <span class="font-semibold text-base tracking-tight">
                        Admin Users
                    </span>
                </TabsTrigger>
                <TabsTrigger 
                    value="platform_settings" 
                    class="flex-1 py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                    :class="[
                    activeTab === 'platform_settings'
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                        : 'text-gray-100 hover:bg-background'
                    ]"
                >
                    <span class="font-semibold text-base tracking-tight">
                        Platform Settings
                    </span>
                </TabsTrigger>
                <TabsTrigger 
                    value="integration_settings" 
                    class="flex-1 py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                    :class="[
                    activeTab === 'integration_settings'
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                        : 'text-gray-100 hover:bg-background'
                    ]"
                >
                    <span class="font-semibold text-base tracking-tight">
                        Integration Settings
                    </span>
                </TabsTrigger>
                <TabsTrigger 
                    value="security" 
                    class="flex-1 py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                    :class="[
                    activeTab === 'security'
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                        : 'text-gray-100 hover:bg-background'
                    ]"
                >
                    <span class="font-semibold text-base tracking-tight">
                        Security
                    </span>
                </TabsTrigger>
            </TabsList>
        
            <TabsContent value="role_management">
               <AdminSettingsRoles />
            </TabsContent>
            <TabsContent value="admin_users">
                <AdminSettingsAdminUsers />
            </TabsContent>
            <TabsContent value="platform_settings">
                <AdminSettingsPlatform />
            </TabsContent>
            <TabsContent value="integration_settings">
                <AdminSettingsIntegration />
            </TabsContent>
            <TabsContent value="security">
                <AdminSettingsSecurity />
            </TabsContent>
        </Tabs>
       
    </div> 
  </div>

</template>

<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const activeTab = ref('role_management')

definePageMeta({
    layout: "admin-dashboard",
    title: 'Settings'
})

</script>