<script setup>
import chartData from './chartData.json';

const cssStyle={}
const total= {
  width:680,
  height:324
}

let totalCount = chartData.reduce((acc, e) => {
  const sum = e.reduce((count, e2) => {
    return count + e2[1]
  },0);
  return acc + sum;
},0)

function colWidth(col) {
 const colH = col.reduce((acc,e)=>acc + e[1],0);
 let colWPercent = colH / totalCount * 100;
 return colWPercent + "%";
}

function rowHeight(row, col) {
  const rowH= row[1];
  const totalH = col.reduce((acc,e)=>acc + e[1],0);
  const percent= (rowH / totalH) * 100;
  return percent + "%";
}

</script>

<template>
  <div class="w-full sm:w-auto overflow-x-auto">
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
  </div>
</template>