<script setup>
import Button from "../../header/button/Button.vue";</script>
<template>
    <div class="font-medium text-gray-400 mb-2 text-lg">Current Net Worth</div>
    <div class="flex justify-between">
        <div class="font-medium text-[28px] text-gray-900">$2.24 M</div>
        <div class="flex items-center gap-2">
            <button type="button" class="rounded-lg h-8 flex justify-center items-center bg-whit bg-gray-200 border px-3">
                Today
            </button>
            <div class="flex rounded-lg border h-8">
                <Button class="border-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 13V14H1.5L1 13.5V0H2V13H15Z" fill="currentColor" />
                        <path d="M13 3.207L7.854 8.354H7.146L5.5 6.707L1.854 10.354L1.146 9.646L5.146 5.646H5.854L7.5 7.293L12.646 2.146H13.353L15.353 4.146L14.646 4.854L13 3.207Z" fill="black" />
                    </svg>
                </Button>
                <Button class="border-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20ZM11 5H5V19H11V5ZM19 13H13V19H19V13ZM19 5H13V11H19V5Z"
                            fill="currentColor" />
                    </svg>
                </Button>
            </div>
            <Button>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.00005 6.975C5.86672 6.975 5.73772 6.95 5.61305 6.9C5.48772 6.85 5.38338 6.78334 5.30005 6.7L0.700048 2.1C0.516715 1.91667 0.425049 1.68334 0.425049 1.4C0.425049 1.11667 0.516715 0.883336 0.700048 0.700003C0.883382 0.516669 1.11672 0.425003 1.40005 0.425003C1.68338 0.425003 1.91672 0.516669 2.10005 0.700003L6.00005 4.6L9.90005 0.700003C10.0834 0.516669 10.3167 0.425003 10.6 0.425003C10.8834 0.425003 11.1167 0.516669 11.3 0.700003C11.4834 0.883336 11.575 1.11667 11.575 1.4C11.575 1.68334 11.4834 1.91667 11.3 2.1L6.70005 6.7C6.60005 6.8 6.49172 6.87067 6.37505 6.912C6.25838 6.954 6.13338 6.975 6.00005 6.975Z"
                        fill="currentColor" />
                </svg>
            </Button>
        </div>
    </div>
</template>