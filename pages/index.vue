<template>
  <div class="container">
    <div class="card">
      <p class="title">Join our mailing list for updates on internship and graduate opportunities.</p>
      <form name="newsletter" data-netlify="true">
        <input type="email" name="email" id="email" placeholder="Email" />
        <button type="submit" id="submit">Join</button>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  font-family: Inter, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  width: 320px;
  padding: 48px;
  background: #fff5e5;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}

.title {
  margin-bottom: 48px;
}

.links {
  padding-top: 15px;
}

#email {
  width: 100%;
  padding: 12px;
  border: 0px;
  border-radius: 2px;
}

#submit {
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 16px;
  font-family: Inter, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background: #ffa06a;
  border: 0;
  border-radius: 2px;
  letter-spacing: 0.5px;
}

#submit:hover {
  background: #ff7d31;
}
</style>
