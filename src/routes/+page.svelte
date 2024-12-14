<script>
  export let form;
</script>

<header>
  <div>Spotics</div>
</header>
<main>
  <form method="post" enctype="multipart/form-data" use:enhance>
    <input type="file" name="file" />
    <button>Upload</button>
  </form>
  {#if form?.success}
    <!-- ここに成功時の処理を記述 -->
  {:else}
    <!-- ここに失敗時の処理を記述 -->
  {/if}
</main>