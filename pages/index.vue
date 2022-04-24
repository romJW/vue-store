<template>
  <div>
    <Hero />
    <Features />
    <BlockPelliclePools />
    <DesignerCall />
    <PolypropylenePools />
    <Calculator />
    <Pavilions />
    <YouTubeChannel />
    <Map />
  </div>
</template>

<script>
import Hero               from '@/components/index/Hero.vue'
import Features           from '@/components/index/Features.vue'
import BlockPelliclePools from '@/components/index/BlockPelliclePools.vue'
import DesignerCall       from '@/components/index/DesignerCall.vue'
import PolypropylenePools from '@/components/index/PolypropylenePools.vue'
import Calculator         from '@/components/index/Calculator.vue'
import Pavilions          from '@/components/index/Pavilions.vue'
import YouTubeChannel     from '@/components/index/YouTubeChannel.vue'
import Map                from '@/components/index/Map.vue'

export default {
  components: {
    Hero,
    Features,
    BlockPelliclePools,
    DesignerCall,
    PolypropylenePools,
    Calculator,
    Pavilions,
    YouTubeChannel,
    Map,
  }
}
</script>
