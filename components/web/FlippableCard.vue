<template>
  <div class="flippable-card">
    <div :class="['flippable-card-content', { flipped: side === 'code' }]">
      <div class="front-side" :tabindex="side === 'preview' ? null : '-1'">
        <b-card variant="outline" size="sm">
          <div role="button" tabindex="0" @click="side = 'code'">
            <b-card-section border-bottom class="flippable-card-header lh-sm">
              <strong>
                Vista prèvia
              </strong>
              <b-button size="sm" class="flippable-card-button" variant="supermuted" outline>
                <fa :icon="['far', 'code']" fixed-width /> Codi
              </b-button>
            </b-card-section>
          </div>
          <b-card-section class="p-5">
            <slot name="frontSide" />
          </b-card-section>
        </b-card>
      </div>
      <div class="back-side" :tabindex="side === 'code' ? null : '-1'">
        <b-card variant="outline" size="sm" class="bg-black dark">
          <div role="button" tabindex="0" @click="side = 'preview'">
            <b-card-section class="flippable-card-header lh-sm text-white" border-bottom>
              <strong>
                Codi
              </strong>
              <b-button size="sm" class="flippable-card-button" variant="supermuted" outline>
                <fa :icon="['far', 'eye']" fixed-width /> Vista prèvia
              </b-button>
            </b-card-section>
          </div>
          <slot name="backSide" />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      side: 'preview'
    }
  }
}
</script>

<style lang="scss" scoped>
.flippable-card {
  perspective: 1000px;
  margin-top: calc(2.75rem + 2px);
  min-height: 700px;

  &-content {
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;

    &.flipped {
      transform: rotateY( 180deg ) ;
      transition: transform 0.5s;

      .front-side {
        pointer-events: none;
      }
    }
  }

  &-header {
    position: relative;
    display: flex;
    cursor: pointer;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    &:hover {
      background: var(--gray-50);
    }
  }

  &-button {
    position: absolute;
    right: var(--card-padding);
    top: 50%;
    transform: translateY(-50%);
  }

  .front-side,
  .back-side {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    backface-visibility: hidden;
  }

  .back-side {
    transform: rotateY(180deg);

    .flippable-card-header {
      &:hover {
        background: $gray-1000;
      }
    }
  }
}
</style>
