<template>
  <div
    class="max-w-full min-h-[40vh] sm:min-h-[80vh] overflow-hidden relative bg-cover bg-[60%_center] bg-hero-pattern"
  >
    <slot />
    <div
      class="flex flex-col justify-center absolute top-0 right-6 bottom-0 left-6 my-auto mx-0 sm:left-16 sm:right-16"
    >
      <h2
        class="font-cavet text-5xl !leading-tiny sm:text-5xl md:text-6xl lg:text-8xl"
      >
        El secreto <span class="block">de tu cocina</span>
      </h2>
    </div>
  </div>
</template>
