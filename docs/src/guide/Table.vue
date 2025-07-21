<template>
    <table>
        <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps({
    headers: { type: Array, required: true },
    rows: { type: Array, required: true },
})
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
}
th,
td {
    border: 1px solid #ccc;
    padding: 0.5em;
    text-align: left;
}
thead {
    background-color: #f9f9f9;
}
</style>
