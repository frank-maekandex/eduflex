<template>
  <div>
    <header class="h-20 flex items-center">
      <nav class="my_container w-full mx-auto flex items-center justify-between">
        <Logo color-class="text-primary" size-class="text-2xl" />
        <ul class="flex gap-6">
          <li><NuxtLink to="/" exact-active-class="text-primary font-semibold">Home</NuxtLink></li>
          <li><NuxtLink to="/how-it-works" exact-active-class="text-primary font-semibold">How It Works</NuxtLink></li>
          <li><NuxtLink to="/schools" exact-active-class="text-primary font-semibold">Schools</NuxtLink></li>
          <li><NuxtLink to="/support" exact-active-class="text-primary font-semibold">Support</NuxtLink></li>
        </ul>
        <div class="flex gap-4">
          <NuxtLink to="/login">
            <Button variant="outline">Login</Button>
          </NuxtLink>
          <NuxtLink to="/onboarding">
            <Button>Create Account</Button>
          </NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>