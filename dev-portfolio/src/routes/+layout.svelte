<script lang="ts">
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
