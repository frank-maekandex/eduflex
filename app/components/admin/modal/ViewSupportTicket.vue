<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const confirmSend = ref(false)
const showSendSuccess = ref(false)
const confirmDraft = ref(false)
const showDraftSuccess = ref(false)

const handleSend = () => {
  confirmSend.value = false  
  showSendSuccess.value = true
}

const openConfirmSend = () => {
  confirmSend.value = true
}

const closeConfirmSend = () => {
  showSendSuccess.value = false
}

const handleDraft = () => {
  confirmDraft.value = false  
  showDraftSuccess.value = true
}

const openConfirmDraft = () => {
  confirmDraft.value = true
}

const closeConfirmDraft = () => {
  showDraftSuccess.value = false
}

</script>

<template>
  <Dialog>
    <form>
      <DialogTrigger as-child>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent class="lg:max-w-[1024px] max-h-[95%] bg-white overflow-y-auto scrollbar-rounded">
        <DialogHeader>
          <DialogTitle>Ticket Details -  TK-00411</DialogTitle>
        </DialogHeader>
        <div>
          <div class="mt-4">
            <h3 class="text-base font-semibold">
              Payment not reflecting in account
            </h3>

            <div class="text-sm text-gray-500 mt-2 flex flex-wrap gap-4">
              <p><span class="font-medium text-black">From:</span> Michael Owodunmi</p>
              <p><span class="font-medium text-black">Email:</span> michaelowo@gmail.com</p>
              <p><span class="font-medium text-black">Created:</span> 2026-01-29 14:30</p>
            </div>
          </div>

          <!-- Message -->
          <div class="bg-background rounded-xl p-4 mt-4 leading-relaxed">
            <p>Hello Support Team,</p>
            <br />
            <p>
              I made a payment of ₦450,000 for my son's tuition fee on January 14th,
              2024, but the payment is not reflecting in my account dashboard. The
              transaction was successful according to my bank statement (Reference:
              TXN-2024-ABC123).
            </p>
            <br />
            <p>
              Please help me resolve this issue urgently as the school payment
              deadline is approaching.
            </p>
            <br />
            <p>Thank you.</p>
          </div>

          <!-- Download Button -->
          <div class="mt-4">
            <button class="border border-dashed border-gray-border rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50">
              <Icon name="solar:download-linear" class="text-primary" /> 
              Download File
            </button>
          </div>

          <!-- Reply Section -->
          <div class="mt-4">
            <h4 class="text-sm font-medium mb-2">Reply to User</h4>

            <Textarea placeholder="Type your response here." class="h-32" />

            <div class="flex items-center mt-3 flex-wrap gap-3">
              <button class="border border-dashed border-gray-border rounded-lg px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2">
                <Icon name="streamline-ultimate:attachment" class="text-primary" />
                Attach File ≤ 2MB
              </button>
              <p class="text-xs text-gray-100 mt-2">
                Supported formats: PDF, JPG, PNG, DOC
              </p>
            </div>
          </div>
        </div>
        <DialogFooter class="gap-4">
          <div class="flex gap-3">
            <Button @click="openConfirmSend">
              Send Reply
            </Button>
            <Button variant="outline" @click="openConfirmDraft">
              Save as Draft
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>

  <AlertModal
    v-model="confirmSend"
    title="Are you sure you want to send this reply?"
    icon="mingcute:question-fill" 
    iconColor="text-primary"
  >
    <Button class="w-full" @click="handleSend">
      Send
    </Button>
  </AlertModal>

  <AlertModal
    v-model="showSendSuccess"
    title="Reply Sent!"
    description="Funds will be sent to the school account"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmSend">
      Close
    </Button>
  </AlertModal>

  <AlertModal
    v-model="confirmDraft"
    title="Are you sure you want to save as draft?"
    icon="mingcute:question-fill" 
    iconColor="text-primary"
  >
    <Button class="w-full" @click="handleDraft">
      Save
    </Button>
  </AlertModal>

  <AlertModal
    v-model="showDraftSuccess"
    title="Saved!"
    description="Funds will be sent to the school account"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmDraft">
      Close
    </Button>
  </AlertModal>
  

</template>
