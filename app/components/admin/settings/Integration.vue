<template>
    <div class="border border-gray-border rounded-lg p-6 mb-7">
        <div class="w-full mb-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div>
                <h1 class="font-bold text-sm">Paystack Integration</h1>
                <p class="text-gray-100 text-xs">Payment gateway for loan disbursements</p>
            </div>
            <button class="px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">Connected</button>
        </div>
        <form>
            <FieldGroup>
                <div class="grid grid-cols-1 gap-6">
                    <Field class="grid gap-1">
                        <FieldLabel for="test_public">
                            Public Key
                        </FieldLabel>
                        <Input id="test_public" type="text" placeholder="pk_live_••••••••••••••••" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="test_secret">
                            Secret Key
                        </FieldLabel>
                        <Input id="test_secret" type="text" placeholder="••••••••••••••••" />
                    </Field>
                </div>
                <Field class="w-fit flex flex-row gap-2">
                    <Button type="submit" @click.prevent>
                        Test Connections
                    </Button>
                    <Button type="submit" variant="outline" @click.prevent>
                        Update Keys
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    </div>

    <div class="border border-gray-border rounded-lg p-6">
        <div class="w-full mb-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div>
                <h1 class="font-bold text-sm">Flutterwave Integration</h1>
                <p class="text-gray-100 text-xs">Alternative payment gateway</p>
            </div>
            <button class="px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">Connected</button>
        </div>
        <form>
            <FieldGroup>
                <div class="grid grid-cols-1 gap-6">
                    <Field class="grid gap-1">
                        <FieldLabel for="test_public">
                            Public Key
                        </FieldLabel>
                        <Input id="test_public" type="text" placeholder="FLWQWERT-••••••••••••••••" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="test_secret">
                            Secret Key
                        </FieldLabel>
                        <Input id="test_secret" type="text" placeholder="••••••••••••••••" />
                    </Field>
                </div>
                <Field class="w-fit flex flex-row gap-2">
                    <Button type="submit" @click.prevent>
                        Test Connections
                    </Button>
                    <Button type="submit" variant="outline" @click.prevent>
                        Update Keys
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    </div>
</template>