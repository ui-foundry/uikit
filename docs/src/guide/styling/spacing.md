<script setup>
import Table from '../Table.vue'
</script>

# Spacings

All spacings are defined as `--spacing-*` CSS variables.

<Table
    :headers="['Value', 'Variable']" 
    :rows="[
        ['4px', 'var(--spacing-xxsmall)'],
        ['8px', 'var(--spacing-xsmall)'],
        ['12px', 'var(--spacing-small)'],
        ['16px', 'var(--spacing-base)'],
        ['20px', 'var(--spacing-medium)'],
        ['24px', 'var(--spacing-large)'],
        ['28px', 'var(--spacing-xlarge)'],
        ['32px', 'var(--spacing-xxlarge)'],
        ['40px', 'var(--spacing-xxxlarge)'],
        ['48px', 'var(--spacing-xxxxlarge)'],
        ['64px', 'var(--spacing-giant)'],
        ['80px', 'var(--spacing-xgiant)']
    ]" 
/>

## Example Usage

```css
.my-element {
    margin-bottom: var(--spacing-medium);
    padding: var(--spacing-small);
}
```
