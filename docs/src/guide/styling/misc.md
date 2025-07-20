<script setup>
import Table from './../Table.vue'
</script>

# Miscellaneous

## border-radius
In our Design System, most components have rounded edges. Depending on the size of the component, this rounding can vary between 4px, 8px, 12px and fully rounded.

### Usage
This token must be used **only** with `border-radius` CSS property.
### Example



## z-index
All z-index variables to keep consistency

<Table 
    :headers="['Value', 'Variable']" 
    :rows="[
        ['1', 'var(--zindex-1)'],
        ['10', 'var(--zindex-10)'],
        ['100', 'var(--zindex-100)'],
        ['500', 'var(--zindex-500)'],
        ['1000', 'var(--zindex-1000)']
    ]" 
/>
