<template>
    <div class="border border-gray-border rounded-lg p-6 mb-7">
        <h1 class="font-bold mb-4 text-sm">Platform Fee Configuration</h1>
        <form>
            <FieldGroup>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field class="grid gap-1">
                        <FieldLabel for="processing_fee">
                            Processing Fee (%)
                        </FieldLabel>
                        <Input id="processing_fee" type="text" placeholder="Enter fee here" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="service_fee">
                            Service Fee (₦)
                        </FieldLabel>
                        <Input id="service_fee" type="text" placeholder="Enter fee here" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="late_payment">
                            Late Payment Fee (₦)
                        </FieldLabel>
                        <Input id="late_payment" type="text" placeholder="Enter fee here" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="loan_amount">
                            Minimum Loan Amount (₦)
                        </FieldLabel>
                        <Input id="loan_amount" type="text" placeholder="Enter amount here" />
                    </Field>
                </div>
                <Field class="w-fit">
                    <Button type="submit" @click.prevent>
                        Save changes
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    </div>

    <div class="border border-gray-border rounded-lg p-6">
        <h1 class="font-bold mb-4 text-sm">Platform Fees Configuration</h1>
        <form>
            <FieldGroup>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field class="grid gap-1">
                        <FieldLabel for="period">
                            Grace Period (Days)
                        </FieldLabel>
                        <Input id="period" type="text" placeholder="Enter period here" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="threshold">
                            Default Threshold (Days)
                        </FieldLabel>
                        <Input id="threshold" type="text" placeholder="Enter threshold here" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="interest">
                            Interest Rate (%)
                        </FieldLabel>
                        <Input id="interest" type="text" placeholder="Enter rate here" />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="repayment">
                            Repayment Period (Months)
                        </FieldLabel>
                        <Input id="repayment" type="text" placeholder="Enter period here" />
                    </Field>
                </div>
                <Field class="w-fit">
                    <Button type="submit" @click.prevent>
                        Update Rules
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    </div>
</template>