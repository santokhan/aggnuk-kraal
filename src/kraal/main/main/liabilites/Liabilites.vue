<script setup>
import Col1 from "../table/Col1.vue";
import Col2 from "../table/Col2.vue";
import Row from "../table/Row.vue";

const tableData = [
  ["Loans", ["0.5%", "12.1K"], "#34d399"],
  ["Credit Cards", ["0.5%", "12.1K"], "#ef4444"],
];
</script>
<script></script>

<template>
    <div class="py-2">
        <table class="w-64">
            <thead>
                <tr class="text-start text-sm">
                    <th class="font-semibold text-start">Liabilities</th>
                    <th class="font-semibold text-end">-$51.8K</th>
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
