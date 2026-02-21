<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ref } from 'vue'
import {
  Avatar,
  AvatarImage,
} from '@/components/ui/avatar'
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"

definePageMeta({
  layout: "school-dashboard",
  title: 'Settings'
})

const activeTab = ref('profile')

</script>

<template>
  <div>
    <Tabs v-model="activeTab">
      <div class="grid grid-cols-12 items-start gap-6">
      
        <div class="col-span-12 lg:col-span-3 space-y-6 bg-white rounded-lg pt-6 pb-6 lg:pb-20">
          <TabsList class="flex flex-col gap-4 p-0 shadow-none w-full bg-transparent">
    
            <TabsTrigger 
              value="profile" 
              class="w-full py-4 px-6 shadow-none justify-start rounded-none flex items-center gap-2 data-[state=active]:bg-muted"
              :class="[
                activeTab === 'profile'
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-l-4 border-primary' 
                  : 'text-gray-100 hover:bg-background'
              ]"
            >
              <Icon 
                :name=" activeTab === 'profile' ? 'mingcute:user-2-fill' : 'mingcute:user-2-line'" 
                class="size-4 transition-colors"
                :class=" activeTab === 'profile' ? 'hover:text-white' : 'text-gray-100'" 
              />
              <span class="font-semibold text-base tracking-tight">
                Profile
              </span>
            </TabsTrigger>

            <TabsTrigger 
              value="manage" 
              class="w-full py-4 px-6 shadow-none justify-start rounded-none flex items-center gap-2 data-[state=active]:bg-muted"
              :class="[
                activeTab === 'manage'
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-l-4 border-primary' 
                  : 'text-gray-100 hover:bg-background'
              ]"
            >
              <Icon 
                :name=" activeTab === 'manage' ? 'gravity-ui:lock-fill' : 'gravity-ui:lock'" 
                class="size-4 transition-colors"
                :class=" activeTab === 'manage' ? 'hover:text-white' : 'text-gray-100'" 
              />
              <span class="font-semibold text-base tracking-tight">
                Bank Info
              </span>
            </TabsTrigger>

            <TabsTrigger 
              value="password" 
              class="w-full py-4 px-6 shadow-none justify-start rounded-none flex items-center gap-2 data-[state=active]:bg-muted"
              :class="[
                activeTab === 'password'
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-l-4 border-primary' 
                  : 'text-gray-100 hover:bg-background'
              ]"
            >
              <Icon 
                :name=" activeTab === 'password' ? 'gravity-ui:lock-fill' : 'gravity-ui:lock'" 
                class="size-4 transition-colors"
                :class=" activeTab === 'password' ? 'hover:text-white' : 'text-gray-100'" 
              />
              <span class="font-semibold text-base tracking-tight">
                Password
              </span>
            </TabsTrigger>

            <TabsTrigger 
              value="2fa" 
              class="w-full py-4 px-6 shadow-none justify-start rounded-none flex items-center gap-2 data-[state=active]:bg-muted"
              :class="[
                activeTab === '2fa'
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-l-4 border-primary' 
                  : 'text-gray-100 hover:bg-background'
              ]"
            >
              <Icon 
                :name=" activeTab === '2fa' ? 'gravity-ui:lock-fill' : 'gravity-ui:lock'" 
                class="size-4 transition-colors"
                :class=" activeTab === '2fa' ? 'hover:text-white' : 'text-gray-100'" 
              />
              <span class="font-semibold text-base tracking-tight">
                2FA
              </span>
            </TabsTrigger>

            <button 
              class="w-full font-semibold text-base text-left py-4 px-7 flex items-center gap-2 text-gray-100 hover:bg-background"
            >
              <Icon name="ant-design:logout-outlined" class="size-4" />
              <span class="font-semibold text-base tracking-tight">
                Logout
              </span>
            </button>
          </TabsList>
      
        </div>

        <div class="col-span-12 lg:col-span-9 space-y-6 bg-white rounded-lg p-6 min-h-[80vh]">
          <TabsContent value="profile">
            <div>
              <div class="flex flex-col md:flex-row gap-6 items-start md:items-end">
                <div class='relative'>
                  <Avatar class='size-28 border border-gray-border'>
                    <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="P" />
                  </Avatar>
                  <Input id="picture" type="file" class="hidden" accept="image/png, image/jpeg, image/jpg"/>
                  <label htmlFor="picture" class="absolute bottom-2 -right-1 flex size-10 items-center justify-center rounded-full bg-primary cursor-pointer border-2 border-white">
                    <Icon name="solar:camera-outline" class="size-5 text-white" />
                  </label>
                </div>
                <Button class="w-fit">
                  Upload Now
                </Button>
              </div>

              <div class="mt-10">
                <form>
                  <FieldGroup>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Field class="grid gap-1">
                        <FieldLabel for="email">
                          School Email
                        </FieldLabel>
                        <Input id="email" type="email" placeholder="Enter email address here" required />
                      </Field>
                      <Field class="grid gap-1">
                        <FieldLabel for="email">
                          School Address
                        </FieldLabel>
                        <Input id="name" type="text" placeholder="Enter name here" required />
                      </Field>
                      <Field class="grid gap-1">
                        <FieldLabel for="phone" class="font-semibold">
                          School Phone Number
                        </FieldLabel>
                        
                        <div class="flex items-center gap-2 px-3 py-2 rounded-md border border-input bg-transparent ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          
                          <div class="flex items-center gap-1 pr-2 border-r border-gray-200">
                            <Icon name="twemoji:flag-nigeria" class="size-5" />
                          </div>
  
                          <input 
                            id="phone" 
                            type="tel" 
                            placeholder="Enter phone number here" 
                            class="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                            required 
                          />
                        </div>
                      </Field>
                    </div>

                    <Field class="w-fit mt-16">
                      <Button type="submit">
                        Save Changes
                      </Button>
                    </Field>
                  </FieldGroup>
                </form>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="manage">
            <div>
              <h1 class="text-xl font-semibold text-center">Manage Your Bank Account</h1>
              <div class="mt-10 border border-gray-border rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4">
                <div class="flex flex-col items-start xl:flex-row xl:items-center gap-6">
                  <h2 class="text-gray-100 font-semibold">12345678901</h2>
                  <h2 class="text-gray-100 font-semibold">GT BANK</h2>
                  <h2 class="text-gray-100 font-semibold">SUNRISE ACADEMY</h2>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <Button variant="secondary" size="sm">Default</Button>
                  <button>
                    <Icon name="fluent-mdl2:delete" class="size-6" />
                  </button>
                </div>
              </div>
              <div class="max-w-[350px]">
                <FieldGroup>
                  <Field class="grid gap-1 mt-10">
                    <FieldLabel>
                      Add Another Account
                    </FieldLabel>
                    <button type="submit" class="border border-gray-border border-dashed text-gray-100 hover:bg-gray-border/20 rounded-lg h-9 px-7 py-5 flex items-center justify-center">
                      <Icon name="ei:plus" class="size-6"/>
                    </button>
                  </Field>
                  <Field class="w-full max-w-[300px] mt-16">
                      <Button type="submit">
                        Save Changes
                      </Button>
                  </Field>
                </FieldGroup>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div class="max-w-[400px]">
              <div>
                <h1 class="text-xl font-semibold">Change Password</h1>
                <p class="text-gray-100 text-sm">Update password for enhanced security</p>
              </div>
              <div class="mt-10">
                <FieldGroup>
                  <Field class="grid gap-1">
                    <FieldLabel for="email">
                      Current Password
                    </FieldLabel>
                    <Input id="password" type="password" placeholder="Enter current password here" required />
                  </Field>
                  <Field class="grid gap-1">
                    <FieldLabel for="new-password">
                      New Password
                    </FieldLabel>
                    <Input id="new-password" type="password" placeholder="Enter new password here" required />
                  </Field>
                  <Field class="grid gap-1">
                    <FieldLabel for="confirm-password">
                      Confirm New Password
                    </FieldLabel>
                    <Input id="confirm-password" type="password" placeholder="Re-enter new password here" required />
                  </Field>
                  <Field class="w-fit mt-16">
                      <Button type="submit">
                        Save Changes
                      </Button>
                  </Field>
                </FieldGroup>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="2fa">
            <div>
              <div class="max-w-[600px] mx-auto">
                <h1 class="text-xl font-semibold text-center">Two Factor Authentication</h1>
                <p class="text-gray-100 text-center">Use at least one method of 2FA to sector your account. You will use it for transaction and login.</p>
              </div>
              <div>
                <FieldGroup>
                  <Field class="grid gap-1 mt-10">
                    <button class="bg-background hover:bg-gray-border/20 rounded-lg px-4 py-5 flex items-center gap-2 justify-between">
                      <div class="flex flex-row gap-2">
                        <span class="flex size-10 items-center justify-center rounded-md bg-gray-border">
                          <Icon name="heroicons:envelope" class="text-gray-100 size-6" />
                        </span>
                        <div class="flex flex-col items-start justify-start -mt-1">
                          <h1 class="text-xl font-semibold">Email</h1>
                          <p class="text-[10px] sm:text-xs">Send OTP to my email</p>
                        </div>
                      </div>
                      <div>
                        <div class="size-6 rounded-full border border-gray-100"/>
                      </div>
                    </button>
                  </Field>
                  <Field class="w-full max-w-[300px] mt-16">
                      <Button type="submit">
                        Continue
                      </Button>
                  </Field>
                </FieldGroup>
              </div>
            </div>
          </TabsContent>
        </div> 
      </div>
    </Tabs>
  </div>
</template>