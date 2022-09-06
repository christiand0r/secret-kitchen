<template>
  <div>
    <HeroBanner>
      <Header />
    </HeroBanner>

    <div
      class="grid grid-cols-1 gap-8 max-w-7xl px-8 mx-auto md:grid-cols-main xl:px-0"
    >
      <AsideMenu>
        <AsideItem route="Todos" routePath="/" />
        <AsideItem route="Productos" routePath="/productos" />
        <AsideItem route="Recetas" routePath="/recetas" />
        <AsideItem route="Consejos" routePath="/consejos" />
      </AsideMenu>

      <div class="col-span-2">
        <TextBrush>
          <h1 class="font-cavet text-center text-6xl">Nuestros Articulos</h1>
        </TextBrush>

        <NuxtPage />
      </div>
    </div>

    <Newsletter />
  </div>
</template>

<script setup lang="ts"></script>
