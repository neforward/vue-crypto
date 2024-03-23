<template>
  <div>
    <Links />
    <div class="order__price">
      <div class="title">
        <p>Order Price</p>
      </div>
      <div class="input dflex">
        <input type="text" />
        <img src="../../../assets/icons/calc-ic.svg" alt="calc icon" />
      </div>
    </div>
    <div class="order__qty">
      <div class="title dflex">
        <p>Orderby Qty</p>
        <img src="../../../assets/icons/arrow_drop_down.svg" alt="arrow" />
      </div>
      <div class="input dflex">
        <input type="text" />
        <img src="../../../assets/icons/calc-ic.svg" alt="calc icon" />
      </div>
    </div>
    <Percent />
    <div class="order__check dflex">
      <div>
        <input type="checkbox" />
        <p>Buy Long with TP/SL</p>
      </div>
      <div>
        <input type="checkbox" />
        <p>Sell Short with TP/SL</p>
      </div>
    </div>
    <div class="order__value dflex">
      <div class="value">
        <p class="title-grey">Order Value:</p>
        <p class="title-white">-- USDT</p>
      </div>
      <div class="value1">
        <p class="title-grey">Order Value:</p>
        <p class="title-white">-- USDT</p>
      </div>
    </div>
    <div class="long-short__btn dflex">
      <button class="open-long__btn">Open Long</button>
      <button class="open-short__btn">Open Short</button>
    </div>
    <div class="post-good dflex">
      <div class="post-only dflex">
        <input type="checkbox" />
        <p>Post-Only</p>
      </div>
      <div class="till-canc dflex">
        <p>Good-Till-Canceled</p>
        <img src="../../../assets/icons/arrow_drop_down.svg" alt="arrow" />
      </div>
    </div>
    <div class="line__horiz"></div>
    <div class="deriv__up">
      <div class="deriv__list dflex">
        <div class="dflex">
          <p>Derivatives Account</p>
          <img src="../../../assets/icons/visibility.svg" alt="visibility" />
        </div>
        <div class="dflex">
          <p class="yellow">Upgrade</p>
          <img src="../../../assets/icons/file_upload.svg" alt="upgrade" />
        </div>
      </div>
      <div class="deriv__list dflex">
        <p>Equity</p>
        <p>0.0000 USDT</p>
      </div>
      <div class="deriv__list dflex">
        <p>Available Balance</p>
        <p>0.0000 USDT</p>
      </div>
      <div class="deriv__list dflex">
        <a href="#" class="btn2">Deposit</a>
        <a href="#" class="btn2">Deposit</a>
        <a href="#" class="btn2">Deposit</a>
      </div>
    </div>
    <div class="line__horiz"></div>
    <div class="contract__details">
      <div>
        <p class="title-white">Contract Details BTCUSDT</p>
      </div>
      <div class="details">
        <p>Expiration Date</p>
        <p>Perpetual</p>
      </div>
      <div class="details">
        <p>Expiration Date</p>
        <p>19,781.46</p>
      </div>
      <div class="details">
        <p>Mark Price</p>
        <p>19,776.00</p>
      </div>
      <div class="details">
        <p>Open Interest</p>
        <p>55,279.826 BTC</p>
      </div>
      <div class="details">
        <p>24H Turnover</p>
        <p>3,426,960,589.48 USDT</p>
      </div>
      <div class="details">
        <p>24H Volume</p>
        <p>172,600.812 BTC</p>
      </div>
      <div class="details">
        <p>Risk Limit</p>
        <p>2,000,000 USDT | 2,000,000 USDT</p>
      </div>
      <div class="details">
        <p>Contract Value</p>
        <p>1 BTC</p>
      </div>
    </div>
    <div class="hide__btn">
      <p>Hide</p>
      <img src="../../../assets/icons/Group.svg" alt="hideIcon" />
    </div>
  </div>
</template>

<script setup>
import Links from "./Links.vue";
import Percent from "./Percent.vue";
</script>
