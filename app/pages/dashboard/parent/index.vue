<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      
      <div class="col-span-12 lg:col-span-8 space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card class="bg-primary text-white p-6 rounded-2xl relative overflow-hidden">
            <div class="flex flex-col gap-1">
              <span class="text-xs opacity-80 flex items-center gap-2">
                Wallet Balance <Icon name="lucide:eye" class="size-3" />
              </span>
              <h2 class="text-3xl font-bold">₦ 240,000.000</h2>
              <p class="text-[10px] opacity-60 italic mt-2">Update 5mins ago</p>
            </div>
            <Icon name="ph:wallet-fill" class="absolute right-4 top-1/2 -translate-y-1/2 size-12 opacity-10" />
          </Card>

          <Card class="bg-white p-6 rounded-2xl flex items-center gap-4">
            <div class="size-12 bg-pink-50 rounded-xl flex items-center justify-center">
               <Icon name="ph:hand-coins-fill" class="text-pink-500 size-6" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-slate-900">₦ 50,000.00</h3>
              <p class="text-sm text-slate-400">Active Loan Balance</p>
            </div>
          </Card>
        </div>

        <Card class="bg-white rounded-2xl p-6 border-none shadow-sm">
           <div class="flex justify-between items-center mb-6">
             <h3 class="font-bold text-lg text-slate-800">Recent Transactions</h3>
             <Button variant="outline" class="rounded-full border-[#1e3a8a] text-[#1e3a8a]">
               View All Transactions
             </Button>
           </div>
           <TransactionTable /> 
        </Card>
      </div>

      <div class="col-span-12 lg:col-span-4 space-y-6">
        
        <Card class="bg-white p-6 rounded-2xl flex flex-col items-center">
          <h3 class="font-bold self-start mb-4">Loan Progress</h3>
          <div class="relative size-48">
             <ve-progress :progress="70" color="#10b981" :size="180" :thickness="12">
               <template #default>
                 <span class="text-3xl font-bold">70%</span>
               </template>
             </ve-progress>
          </div>
          <div class="mt-4 text-center">
            <p class="text-xs text-slate-400">Remaining Balance:</p>
            <p class="font-bold text-lg">₦ 50,000</p>
          </div>
        </Card>

        <Card class="bg-white rounded-2xl p-6">
          <div class="flex justify-between items-center mb-4">
             <h3 class="font-bold">Students Summary</h3>
             <Button size="sm" class="bg-[#1e3a8a] rounded-full">Add Students</Button>
          </div>
          <StudentList />
          <Button class="w-full mt-6 bg-[#1e3a8a] h-12 rounded-xl">Apply For Loan Now</Button>
        </Card>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    layout: "parent-dashboard"
  })

</script>