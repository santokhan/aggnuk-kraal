<script setup>
import Col1 from "../table/Col1.vue";
import Col2 from "../table/Col2.vue";
import Row from "../table/Row.vue";

const tableData = [
  ["Cash", ["0.5%", "12.1K"], '#d946ef'],
  ["Crypto", ["0.5%", "12.1K"], '#6366f1'],
  ["Public Investments", ["0.5%", "12.1K"], '#22d3ee'],
  ["Employer Equity", ["0.5%", "12.1K"], '#4ade80'],
  ["Fund Investments", ["0.5%", "12.1K"], '#eab308'],
  ["Angel", ["0.5%", "12.1K"], '#f97316'],
  ["Real Estate", ["0.5%", "12.1K"], '#f87171'],
];
</script>
<template>
  <div class="py-2">
    <table class="w-64">
      <thead>
        <tr class="text-start text-sm">
          <th class="font-semibold text-start">Assets</th>
          <th class="font-semibold text-end">$2.29M</th>
        </tr>
      </thead>
      <tbody>
        <Row v-for="row of tableData">
          <Col1>
            <div class="h-3 w-3 rounded-full" :style="{ backgroundColor: row[2] }"></div>
            {{ row[0] }}
          </Col1>
          <Col2>
            <span>{{ row[1][0] }}</span>
            <span>{{ row[1][1] }}</span>
          </Col2>
        </Row>
      </tbody>
    </table>
  </div>
</template>
