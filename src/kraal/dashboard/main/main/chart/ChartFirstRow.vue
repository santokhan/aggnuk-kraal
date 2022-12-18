<script setup>
import chartData from './chartData.json';

const cssStyle={}
const total= {
  width:600,
  height:324
}

let rowTotal=chartData.map(e=>e[0][1]);
rowTotal = parseInt(rowTotal.reduce((acc, e) => acc + e))
function colWidth(col) {
 const colW= col[0][1];
 let w = colW / rowTotal * 100 
 return w + "%";
}

function rowHeight(row, col) {
  const rowH= row[1];
  const sum = col[0][1] + col[1][1];
  const percent= (rowH / sum) * 100;
  return percent + "%";
}

</script>

<template>
  <div class="rounded-xl flex text-center text-white" :style="{ width: `${total.width}px`, height: `${total.height}px` }">
    <div v-for="(column, index) of chartData" class="flex flex-col" :style="{ width: colWidth(column) }">
      <div v-for="(row, i) of column" class="bg-sky-400 border rounded-xl flex justify-center items-center p-4 overflow-hidden hover:brightness-90"
        :style="{ height: rowHeight(row, column), backgroundColor: row[2] }">
        {{ row[0] }}
        <br>
        {{ row[1] }}%
      </div>
    </div>
  </div>
</template>