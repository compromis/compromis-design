<template>
  <div>
    <h3>
      Targes
      <span class="lock"><fa :icon="['far', 'lock-alt']" /></span>
    </h3>
    <div class="template-selector">
      <div class="template-selector-templates">
        <ul>
          <li>
            <a href="https://compromis.net/espai/targes/?template=headline" class="template-item" target="_blank" rel="noreferrer noopener">
              <span class="template-item-icon">
                <fa :icon="['far', 'newspaper']" fixed-width />
              </span>
              <span class="template-item-name">Titular</span>
            </a>
          </li>
          <li>
            <a href="https://compromis.net/espai/targes/?template=quote" class="template-item" target="_blank" rel="noreferrer noopener">
              <span class="template-item-icon">
                <fa :icon="['far', 'quote-left']" fixed-width />
              </span>
              <span class="template-item-name">Cita</span>
            </a>
          </li>
          <li>
            <a href="https://compromis.net/espai/targes/?template=text" class="template-item" target="_blank" rel="noreferrer noopener">
              <span class="template-item-icon">
                <fa :icon="['far', 'align-left']" fixed-width />
              </span>
              <span class="template-item-name">Text lliure</span>
            </a>
          </li>
          <li>
            <a href="https://compromis.net/espai/targes/?template=event" class="template-item" target="_blank" rel="noreferrer noopener">
              <span class="template-item-icon">
                <fa :icon="['far', 'portrait']" fixed-width />
              </span>
              <span class="template-item-name">Acte</span>
            </a>
          </li>
        </ul>
        <div class="template-selector-more">
          <a href="https://compromis.net/espai/targes" class="apple-link" target="_blank" rel="noreferrer noopener"><span>Totes les targes</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a.apple-link {
    position: relative;
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--gray-900);
    opacity: .75;
    transition: .25s ease-in-out;

    span {
      transition: .25s ease-in-out;
      border-bottom: 2px solid transparent;
    }

    &:hover {
      color: var(--gray-900);
      text-decoration: none;
      opacity: 1;

      span {
        border-color: var(--gray-900);
      }
    }

    &::after {
      content: ' >';
    }
  }

  .lock {
    font-size: 1.5rem;
    position: relative;
    top: -2px;
  }

  .template-selector {
    display: grid;
    position: relative;
    margin: 0 auto;

    ul {
      display: grid;
      grid-template-columns: repeat(4, minmax(10rem, 1fr));
      grid-gap: 2rem;
      margin: 0 auto;
      list-style: none;
      padding: 0;
    }

    .template-item {
      width: 100%;
      display: block;
      position: relative;
      background: var(--white);
      color: var(--gray-900);
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: -1px;
      height: 100%;
      border-radius: 1rem;
      box-shadow: var(--shadow-default);
      transition: .2s ease-in-out;

      &::after {
        content:'';
        display: block;
        padding-bottom: 100%;
      }

      &:hover {
        box-shadow: var(--shadow-raised);
        transform: rotate($rotation) scale(1.05);

        .template-item-name {
          background: linear-gradient(45deg, $gradient-primary-start, $gradient-primary-end);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      &:active {
        transform: rotate(0) scale(.95);
        opacity: .75;
      }

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -4rem;
        margin-left: -3.5rem;
        color: var(--gray-400);
        width: 7rem;
        height: 7rem;
        background: var(--gray-100);
        border-radius: $border-radius;
        font-size: 2.5rem;
      }

      &-name {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem;
      }

      &-label {
        background: $blue;
        padding: .25rem .5rem;
        border-radius: .25rem;
        color: $white;
        font-size: 1rem;
        position: absolute;
        right: 1rem;
        top: -.85rem;
        transition: .25s ease-in-out;
      }

      &:hover {
        .template-item-label {
          background: $orange;
        }
      }
    }

    &-more {
      margin-top: 2rem;
    }
  }

  @include media-breakpoint-down(md) {
    .template-selector {
      ul {
        grid-gap: 1rem;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .template-selector {
      ul {
        grid-template-columns: 1fr 1fr;
      }

      .template-item {
        border-radius: .5rem;

        &-name {
          font-size: 1.25rem;
          padding: .5rem .75rem;
        }

        &-icon {
          transform: scale(.75);
        }
      }
    }
  }
</style>
