<script lang="ts" setup>
import { Switch } from '@/components/ui/switch'
</script>

<template>
    <div class="border border-gray-border rounded-lg p-6 mb-7">
        <h1 class="font-bold mb-4 text-sm">Paystack Integration</h1>
        <div class="flex flex-col gap-4 w-full">
            <AdminSettingCard
                title="Enforce 2FA for all admin users"
                description="Require two-factor authentication for enhanced security"
            >
                <!-- <Switch class="bg-white border border-gray-border data-[state=checked]:bg-primary [&>span]:bg-gray-100"/> -->
                <Switch
                    class="
                        bg-white
                        border border-gray-border
                        data-[state=unchecked]:[&>span]:bg-gray-100
                        data-[state=checked]:bg-primary
                        data-[state=checked]:border-primary
                        transition-colors
                        [&>span]:bg-white
                    "
                />
            </AdminSettingCard>
            <AdminSettingCard
                title="Session timeout"
                description="Automatically log out inactive users"
            />
        </div>
    </div>

    <div class="border border-gray-border rounded-lg p-6 w-full">
        <div class="mb-4">
            <h1 class="font-bold text-sm">Audit Logs</h1>
            <p class="text-gray-100 text-xs">Track all administrative actions and system changes</p>
        </div>
        <div class="flex flex-col gap-4 w-full">
            <AdminSettingCard
                title="Loan Approved - LN-2024-1234"
                description="By: Finance Admin (Amina Hassan) | 2026-01-30 00:45:10"
            />
            <AdminSettingCard
                title="Platform Fee Configuration Changed"
                description="By: Super Admin (Oluwaseun Adebayo) | 2026-01-30 00:45:10"
            />
            <AdminSettingCard
                title="Role Permissions Updated - Support Admin"
                description="By: Super Admin (Oluwaseun Adebayo) | 2026-01-30 00:45:10"
            />
            <AdminSettingCard
                title="Platform Fee Configuration Changed"
                description="By: Super Admin (Oluwaseun Adebayo) | 2026-01-30 00:45:10"
            />
        </div>
    </div>
</template>