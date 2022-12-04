<script setup>
import stripe from "../../../assets/kraal/stripe.png";
import figma from "../../../assets/kraal/figma.png";
</script>
<template>
  <div class="bg-white p-8 rounded-xl">
    <div>
      <table class="w-full">
        <thead>
          <tr class="font-medium text-xl">
            <td class="pb-2"><span>Enployer Equity</span></td>
            <td>$1.32M</td>
            <td class="text-end">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t font-medium text-gray-700">
            <td>
              <div class="flex items-center gap-4">
                <div>
                  <img
                    width="40"
                    height="40"
                    class="object-cover"
                    :src="stripe"
                    alt="card"
                  />
                </div>
                <div class="py-2">
                  <div class="text-lg">Stripe</div>
                  <p class="font-normal text-gray-500">
                    Common Shares & Vested Options
                  </p>
                </div>
              </div>
            </td>
            <td>$856,320</td>
            <td class="text-end">2 mins ago</td>
          </tr>
          <tr class="border-t font-medium text-gray-700">
            <td>
              <div class="flex items-center gap-4">
                <div>
                  <img
                    width="40"
                    height="40"
                    class="object-cover"
                    :src="figma"
                    alt="card"
                  />
                </div>
                <div class="py-2">
                  <div class="text-lg">Stripe</div>
                  <p class="font-normal text-gray-500">
                    Common Shares & Vested Options
                  </p>
                </div>
              </div>
            </td>
            <td>$856,320</td>
            <td class="text-end">2 mins ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
