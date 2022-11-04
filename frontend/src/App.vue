<template>
  <div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sint
      libero commodi? Quo, ipsam facilis. Molestias eligendi porro tenetur, rem
      asperiores non omnis provident? Debitis ipsa blanditiis quidem commodi
      reprehenderit?
    </div>
    <div>
      <pie-chart
        :chart-data="{
          labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
          datasets: [
            {
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
              data: [40, 20, 80, 10],
            },
          ],
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Pie as PieChart } from "vue-chartjs";

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
  } from "chart.js";

  ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>

<style scoped></style>
