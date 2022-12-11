<template>
  <div class="analytics" v-if="data">
    <div class="analytics__insights">
      <insight-component
        v-for="(item, index) in data.insights"
        :title="item.label"
        :content="item.value"
        :key="index"
      />
    </div>
    <div class="analytics__content">
      <line-chart
        class="analytics__chart"
        v-if="data.chart"
        v-bind="data.chart[0]"
      />
      <div class="analytics__controls">
        <!-- <form @submit.prevent="submitConfigs">
          <form-group title="Configure os Dados">
            <form-input-number
              label="Idade Mínima"
              v-model:value="options.range.min"
              :min="18"
              :max="options.range.max"
              :step="1"
            />
            <form-input-number
              label="Idade Máxima"
              v-model:value="options.range.max"
              :min="options.range.max"
              :max="data.chart[0].labels[data.chart[0].labels.length - 1]"
              :step="1"
            />
          </form-group>
          <button type="submit">Configurar</button>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import InsightComponent from "@/components/shared/utils/insight-component.vue";
  import LineChart from "@/components/shared/charts/line-chart.vue";
  import { reactive, ref, watch } from "vue";
  import { useFetch } from "@/composables/useFetch";
  import FormInputNumber from "@/components/shared/form/form-input-number.vue";

  import FormGroup from "@/components/shared/form/form-group.vue";

  const { data, loading } = useFetch<any>({ url: "/analytics" });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .analytics {
    margin: 10px;

    &__insights {
      display: flex;
      flex-flow: row nowrap;
      column-gap: 10px;
    }

    &__content {
      margin: 10px 0;

      display: flex;
      flex-flow: row nowrap;
      row-gap: 10px;
      column-gap: 10px;
    }

    &__chart {
      flex-basis: 70%;
      max-width: 70%;
      @include card($color: transparent, $padding: 20px);
    }

    &__controls {
      display: flex;
      height: fit-content;
      flex-basis: 30%;
      max-width: 30%;

      @include card($color: $color-1);

      form {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        input {
          max-width: 100px;
        }

        button {
          align-self: flex-end;
          @include button;
        }
      }
    }
  }
</style>
