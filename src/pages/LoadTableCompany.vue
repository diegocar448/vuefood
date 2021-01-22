<template>
  <div>
    <p>empresa {{ token_company }}</p>
    <p>mesa {{ token_table }}</p>
  </div>
</template>

<script >
export default {
  props: ["token_company", "token_table"],
};
</script>