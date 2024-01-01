import { Astro } from './Layout.astro';

<Fragment>
<html lang="en" class="scroll-smooth overflow-x-hidden">
<head>
<meta charset="UTF-8" />
<meta name="description" content={description} />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
</head>

<body class="bg-dark-blue-500 font-Onest">
<div class="fixed left-0 top-0 -z-10 h-full w-full">
<div class="relative h-full w-full dark-blue-500">
<div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
</div>
</div>
</div>

<slot />
</body>
</html>
<style is:global>{`
  @import url("https://fonts.googleapis.com/css2?family=Onest:wght@300;500;700&display=swap");
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    color-scheme: light dark;
  }

  body {
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }

  @media (prefers-reduced-motion: reduce) {
    body {
      scroll-behavior: auto;
    }
  }

  .subtitle {
    @apply mb-3 uppercase text-lg text-light-blue-300 laptop:text-xl text-balance tracking-wider;
  }

  .paragraph {
    @apply font-normal text-pretty;
  }

  strong {
    @apply text-accent font-bold animate-neon;
  }

  @keyframes neon {
    0%,
    18%,
    20%,
    50.1%,
    60%,
    65.1%,
    80%,
    90.1%,
    92% {
      text-shadow: none;
      color: #2dffc4;
    }
    18.1%,
    20.1%,
    30%,
    50%,
    60.1%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      text-shadow:
        0 0 10px #2dffc4,
        0 0 20px #2dffc4,
        0 0 40px #2dffc4,
        0 0 80px #2dffc4,
        0 0 1600px #2dffc4;
      color: white;
    }
  }
`}</style>

</Fragment>;
