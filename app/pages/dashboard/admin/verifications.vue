<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const activeTab = ref('parents')

type LoanStatus = 'Pending' | 'Active' | 'Inactive'

interface Student {
  id: string
  name: string
  school: string
  grade: string
  avatar: string
  loanStatus: LoanStatus
}
const searchTerm = ref('') 

definePageMeta({
    layout: "admin-dashboard",
    title: "Verifications",
})

const parents = [
  {
    "ticketId": "TK-PYT-00411",
    "type": "Payment",
    "owner": "Michael Owodunmi",
    "priority": "Critical",
    "status": "New",
    "slaTimer": "00:00:00"
  },
  {
    "ticketId": "TK-SCH-00411",
    "type": "School",
    "owner": "Sunrise Academy",
    "priority": "Medium",
    "status": "Active",
    "slaTimer": "00:00:00"
  },
  {
    "ticketId": "TK-PRT-00411",
    "type": "Parent",
    "owner": "Michael Owodunmi",
    "priority": "Low",
    "status": "Resolved",
    "slaTimer": "00:00:00"
  },
  {
    "ticketId": "TK-PRT-00411",
    "type": "Technical",
    "owner": "Michael Owodunmi",
    "priority": "Critical",
    "status": "Resolved",
    "slaTimer": "00:00:00"
  }
]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
       <SmallWalletCard 
          title="Pending Verifications"
          :amount="348"
          icon-name="mdi:shield-check"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
          title="Verified This Month"
          :amount="234"
          icon-name="mdi:shield-check"
          icon-color-class="text-red-500"
          icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
          title="Failed Verifications"
          amount="23"
          icon-name="mdi:shield-check" 
          icon-color-class="text-orange-500"
          icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
          title="Verification Success Rate"
          amount="95.4%"
          icon-name="mdi:shield-check"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />
    </div>

    <div>

      <Card class="bg-white rounded-2xl p-6 border-none">
         
          <ParentTitle title="KYC Verification Center" desc="Centralized identity verification for all EduFlex users (BVN, NIN, CAC)" />

          <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
            <Tabs v-model="activeTab" class="w-full">
                <TabsList class="p-0 shadow-none w-full bg-transparent flex flex-col md:flex-row mb-6">
            
                    <TabsTrigger 
                        value="parents" 
                        class="flex-1 w-full py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                        :class="[
                        activeTab === 'parents'
                            ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                            : 'text-gray-100 hover:bg-background'
                        ]"
                    >
                        <span class="font-semibold text-base tracking-tight">
                          Parents
                        </span>
                    </TabsTrigger>
                    <TabsTrigger 
                        value="guarantors" 
                        class="flex-1 w-full py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                        :class="[
                        activeTab === 'guarantors'
                            ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                            : 'text-gray-100 hover:bg-background'
                        ]"
                    >
                        <span class="font-semibold text-base tracking-tight">
                          Guarantors
                        </span>
                    </TabsTrigger>
                    <TabsTrigger 
                        value="schools" 
                        class="flex-1 w-full py-4 px-6 shadow-none justify-center rounded-none flex items-center gap-2 border-b border-gray-border data-[state=active]:bg-muted"
                        :class="[
                        activeTab === 'schools'
                            ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-b-2 border-primary' 
                            : 'text-gray-100 hover:bg-background'
                        ]"
                    >
                        <span class="font-semibold text-base tracking-tight">
                          Schools
                        </span>
                    </TabsTrigger>
                </TabsList>
            
                <TabsContent value="parents">
                  <AdminVerificationsParents />
                </TabsContent>
                <TabsContent value="guarantors">
                  <AdminVerificationsGuarantors />
                </TabsContent>
                <TabsContent value="schools">
                  <AdminVerificationsSchools />
                </TabsContent>
            </Tabs>
          
        </div>
      </Card>
    </div>
  </div>

</template>