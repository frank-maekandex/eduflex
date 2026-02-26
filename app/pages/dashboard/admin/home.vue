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

import { ref, provide } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

type LoanStatus = 'Pending' | 'Active' | 'Inactive'

interface Student {
  id: string
  name: string
  school: string
  grade: string
  avatar: string
  loanStatus: LoanStatus
}

definePageMeta({
    layout: "admin-dashboard",
    title: "Welcome Back",
    userName: "Admin",
    icon: "mdi:hand-wave"
})

// Register necessary ECharts modules
use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
]);

const chartOption = ref({
  color: ["#1e3a8a", "#E4626F"], // Your Navy and Pink colors
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Active Loans", "Defaulted Loans"],
    bottom: 0,
    left: "left",
    icon: "circle",
    itemWidth: 8,
    itemHeight: 8,
    textStyle: { color: "#8f8f8f" }
  },
  grid: {
    top: 10,
    left: "0",
    right: "0",
    bottom: "50",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri"],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#000" }
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 1000,
    interval: 500, // Matches your 0, 100, 500, 1M labels
    axisLabel: {
      formatter: (value: number) => (value === 1000 ? "1M" : value),
      color: "#000"
    },
    splitLine: {
      lineStyle: { type: "dashed", color: "#f1f5f9" }
    }
  },
  series: [
    {
      name: "Active Loans",
      type: "line",
      smooth: true, // This makes the lines curvy like your image
      symbol: "circle",
      symbolSize: 8,
      lineStyle: { width: 2 },
      data: [0, 100, 800, 400, 600, 80, 80],
    },
    {
      name: "Defaulted Loans",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: { width: 2 },
      data: [850, 200, 400, 700, 150, 200, 550],
    },
  ],
});

const histories = [
  {
    "id": "tx_001",
    "description": "Repayment for Sunrise Academy 1st Term Fees",
    "date": "22 Oct 2025",
    "amount": 40000,
    "currency": "NGN",
    "status": "Pending"
  },
  {
    "id": "tx_002",
    "description": "Auto-Debit Attempt – Sunrise Academy",
    "date": "09 Oct 2025",
    "amount": 40000,
    "currency": "NGN",
    "status": "Successful"
  },
  {
    "id": "tx_003",
    "description": "Manual Wallet Top-Up",
    "date": "25 Sep 2025",
    "amount": 15000,
    "currency": "NGN",
    "status": "Failed"
  },
  {
    "id": "tx_004",
    "description": "Loan Disbursement Received",
    "date": "18 Sep 2025",
    "amount": 120000,
    "currency": "NGN",
    "status": "Successful"
  },
  {
    "id": "tx_005",
    "description": "Payment Attempt – Springfield High School",
    "date": "07 Sep 2025",
    "amount": 30000,
    "currency": "NGN",
    "status": "Successful"
  },
  {
    "id": "tx_006",
    "description": "Manual Wallet Top-Up",
    "date": "02 Sep 2025",
    "amount": 15000,
    "currency": "NGN",
    "status": "Failed"
  }
]

const verifications = [
  {
    "id": "1",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "2",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "3",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "4",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "5",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  }
]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-4">
       <SmallWalletCard 
            title="Total Active Parents"
            :amount="1420"
            icon-name="mdi:user"
            icon-color-class="text-slate-800"
            icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
            title="Verified Schools"
            amount="185"
            icon-name="garden:book-open-fill-12" 
            icon-color-class="text-orange-500"
            icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
            title="Active Loans"
            :amount="displayCurrency(Number(5400), 'NGN')"
            icon-name="solar:banknote-2-bold"
            icon-color-class="text-slate-800"
            icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
            title="Disbursed Amount"
            :amount="displayCurrency(Number(5400), 'NGN')"
            icon-name="solar:banknote-2-bold"
            icon-color-class="text-red-500"
            icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
            title="Pending Verifications"
            amount="2456"
            icon-name="material-symbols:verified-rounded"
            icon-color-class="text-slate-800"
            icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
            title="Default Rate"
            amount="7%"
            icon-name="fluent:hat-graduation-20-filled"
            icon-color-class="text-green-700"
            icon-bg-class="bg-green-100/80"
        />
    </div>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 xl:col-span-3 bg-white rounded-xl p-4 space-y-6">
            <div>
                <h3 class="font-bold self-start">Loan Performance</h3>
                <p class="text-xs text-gray-100">Active vs Defaulted Loans</p>
            </div>

            <div class="flex-shrink-0 flex flex-col items-center py-4 justify-center">
                <ve-progress
                    :progress="70" 
                    :size="130" 
                    color="#1E3A8A"
                    empty-color="#E4626F"
                    :thickness="12"
                    empty-thickness="12"
                    :line="'butt'"
                >
                    <span class="text-xl font-bold text-[#1C274D]">
                        70%
                    </span>
                </ve-progress>
            </div>

            <div class="flex flex-col gap-2 border-t border-gray-border pt-2">
                <div class="flex items-center gap-1">
                    <span class="size-2 rounded-full shrink-0 bg-primary"></span>
                    <span class="text-gray-100 text-xs">Active Loan</span>
                </div>
                <div class="flex items-center gap-1">
                    <span class="size-2 rounded-full shrink-0 bg-[#E4626F]"></span>
                    <span class="text-gray-100 text-xs">Defaulted Loan</span>
                </div>
            </div>
        </div>

        <div class="col-span-12 xl:col-span-5 bg-white rounded-xl p-4 space-y-6">
            <div>
                <h3 class="font-bold self-start">Fee Disbursement Timeline</h3>
                <p class="text-xs text-gray-100">Active vs Defaulted Loans</p>
            </div>

            <v-chart class="h-[250px]" :option="chartOption" autoresize />
        </div>

        <div class="col-span-12 xl:col-span-4 bg-white rounded-xl p-4 space-y-6">
            <div>
                <h3 class="font-bold self-start">Parent Repayment Summary</h3>
                <p class="text-xs text-gray-100">Current repayment performance across all active loans</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-background px-2 py-8 rounded-lg flex flex-col items-center">
                    <p class="text-gray-100 text-xs text-center">Total Repaid</p>
                    <h2 class="font-semibold text-sm text-center mt-1">₦32,500,000</h2>
                </div>
                <div class="bg-background px-2 py-8 rounded-lg flex flex-col items-center">
                    <p class="text-gray-100 text-xs text-center">Outstanding Repayments</p>
                    <h2 class="font-semibold text-sm text-center mt-1">₦32,500,000</h2>
                </div>
                <div class="bg-background px-2 py-8 rounded-lg flex flex-col items-center">
                    <p class="text-gray-100 text-xs text-center">Overdue Repayments</p>
                    <h2 class="font-semibold text-sm text-center mt-1">₦32,500,000</h2>
                </div>
                <div class="bg-background px-2 py-8 rounded-lg flex flex-col items-center">
                    <p class="text-gray-100 text-xs text-center">Repayment Completion Rate</p>
                    <h2 class="font-semibold text-sm text-center mt-1">72%</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      
      <div class="col-span-12 xl:col-span-7 space-y-6">

        <Card class="bg-white rounded-2xl p-6 border-none">
           <div class="flex justify-between gap-2 flex-col sm:flex-row items-start mb-6">
              <div>
                  <h3 class="font-bold text-lg">Recent Transactions</h3>
                  <p class="text-gray-100 text-sm">Here are your latest payment activities</p>
              </div>
              <NuxtLink to="/dashboard/admin/transactions">
                <Button variant="outline">
                  View All
                </Button>
              </NuxtLink>
           </div>
           <div class="w-full min-h-[40vh] flex flex-col items-center justify-between overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow class="bg-background text-left">
                            <TableHead class="capitalize p-3 text-gray-100 font-semibold">Description</TableHead>
                            <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Amount</TableHead>
                            <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="history in histories" :key="history?.id">
                            <TableCell class="capitalize"> {{ ReduceTextLength(history.description, 40) }}</TableCell>
                            <TableCell class="capitalize">{{ displayCurrency(Number(history?.amount), 'NGN') }}</TableCell>
                            <TableCell class="capitalize">{{ history?.date }}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div> 
        </Card>
      </div>

      <div class="col-span-12 xl:col-span-5 space-y-6">
        
       <Card class="bg-white rounded-2xl p-6 border-none">
           <div class="flex justify-between gap-2 flex-col sm:flex-row items-start mb-6">
              <div>
                  <h3 class="font-bold text-lg">Top 5 Schools by Volume</h3>
                  <p class="text-gray-100 text-sm">Schools with highest transactions via EduFlex</p>
              </div>
           </div>
           <div class="w-full min-h-[40vh] flex flex-col items-center justify-between overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow class="bg-background text-left">
                            <TableHead class="capitalize p-3 text-gray-100 font-semibold">Rank</TableHead>
                            <TableHead class="capitalize p-3 text-gray-100 font-semibold">School</TableHead>
                            <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Volume</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="verification in verifications" :key="verification?.id">
                            <TableCell class="capitalize"> {{ verification?.id }}</TableCell>
                            <TableCell class="capitalize"> {{ verification?.student }}</TableCell>
                            <TableCell class="capitalize">{{ verification?.added_by }}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div> 
        </Card>
      </div>

    </div>
  </div>
</template>