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
import Hero               from './index/Hero.vue'
import Features           from './index/Features.vue'
import BlockPelliclePools from './index/BlockPelliclePools.vue'
import DesignerCall       from './index/DesignerCall.vue'
import PolypropylenePools from './index/PolypropylenePools.vue'
import Calculator          from './index/Calculator.vue'
import Pavilions          from './index/Pavilions.vue'
import YouTubeChannel     from './index/YouTubeChannel.vue'
import Map                from './index/Map.vue'

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
