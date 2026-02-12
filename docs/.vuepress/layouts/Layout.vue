<script setup>
import { Layout, VPIcon } from 'vuepress-theme-plume/client'
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="wechat-wrapper">
        <a class="wechat-link" href="javascript:void(0)" aria-label="WeChat">
          <VPIcon name="mdi:wechat" class="wechat-icon" />
        </a>
        <div class="wechat-qr">
          <img src="/wechat-qr.png" alt="WeChat QR Code" />
        </div>
      </div>
    </template>
    <template #aside-outline-after>
      <div class="aside-help-link">
        <a href="mailto:support@explorationpub.com" class="help-link">
          <VPIcon name="mdi:help-circle-outline" class="help-icon" />
          <span>Help</span>
          <VPIcon name="mdi:arrow-right" class="help-icon" />
        </a>
      </div>
    </template>
  </Layout>
</template>

<style scoped>

.aside-help-link {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

.help-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s;
}

.help-link:hover {
  color: var(--vp-c-brand-1);
}

.help-icon {
  font-size: 14px;
}

/* WeChat Icon & Popup Styles */
.wechat-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.wechat-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.wechat-link:hover {
  color: var(--vp-c-text-1);
}

.wechat-icon {
  width: 32px;
  height: 32px;
  fill: currentColor;
}

.wechat-qr {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 100;
  display: none;
  padding: 12px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  margin-top: 8px; /* Gap between icon and popup */
}

.wechat-wrapper:hover .wechat-qr {
  display: block;
}

.wechat-qr img {
  width: 120px !important;
  height: 120px !important;
  max-width: none !important;
  display: block;
}

</style>
