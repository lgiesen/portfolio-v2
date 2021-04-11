<template>
  <div>
    <svg
      width="100vw"
      fill="none"
      viewBox="0 0 1440 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          id="background-gradient"
          d="M-45.3998 -84.2708L1506.45 -84.2708L1506.45 639.532L-45.3998 830.076L-45.3998 -84.2708Z"
          fill="url(#paint0_linear)"
        />
        <path
          id="white-rectangle-center"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1067.54 93.6823L146.811 206.734V908.691L1067.54 795.64V93.6823Z"
          fill="url(#paint1_linear)"
          fill-opacity="0.1"
        />
        <path
          id="white-rectangle-bottom-right"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1353.29 401.555L432.554 514.607V776.787L1353.29 663.735V401.555Z"
          fill="url(#paint2_linear)"
          fill-opacity="0.1"
        />
        <path
          id="white-rectangle-bottom"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M961.711 618.028L40.9785 731.08V826.777L961.711 713.725V618.028Z"
          fill="url(#paint3_linear)"
          fill-opacity="0.1"
        />
        <path
          id="white-rectangle-top-left"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M370.017 -138.364L-107.737 -77.1483L-54.0056 379.52L370.017 325.189V-138.364Z"
          fill="url(#paint4_radial)"
          fill-opacity="0.1"
        />
        <path
          id="white-rectangle-top"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1067.54 -284L421.972 -204.734V123.384L1067.54 44.1182V-284Z"
          fill="url(#paint5_radial)"
          fill-opacity="0.1"
        />
        <path
          id="white-rectangle-right"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1137.4 691.961L1114.68 545.62V-64.615L1554.99 -107.386L1671 640.127L1137.4 691.961Z"
          fill="url(#paint6_linear)"
          fill-opacity="0.1"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-610.723"
          y1="491.163"
          x2="366.02"
          y2="1537.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop class="stopColorPrimary" />
          <stop class="stopColorSecondary" offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="266.592"
          y1="-101.415"
          x2="600.69"
          y2="611.934"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="892.92"
          y1="401.555"
          x2="893.067"
          y2="634.963"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="501.345"
          y1="618.028"
          x2="501.492"
          y2="851.436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint4_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(370.017 331.802) rotate(-138.939) scale(623.955 547.663)"
        >
          <stop stop-color="white" />
          <stop offset="0.676051" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint5_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(421.972 123.452) rotate(-9.63379) scale(944.148 488.054)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint6_linear"
          x1="1374.83"
          y1="-97.0781"
          x2="1375.3"
          y2="216.264"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="1440" height="1024" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "HeroBackgroundGradientGroup"
};
</script>

<style lang="scss" scoped>
$primary: var(--v-primary-base);
$secondary: var(--v-secondary-base);

.stopColorPrimary {
  stop-color: $primary;
}

.stopColorSecondary {
  stop-color: $secondary;
}
</style>
