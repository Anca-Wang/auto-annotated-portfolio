# Anca's Portfolio

![Anca's , Frontend Developer | UX Designer | Content Creator](https://anca.netlify.app/)

This is a full-fledged portfolio website built with Next.js, Tailwind CSS, [visual editor](https://docs.netlify.com/visual-editor/overview/) and the [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

The codebase showcases **how to apply annotations at scale**, meaning: how to make much of your components [highlightable in the visual editor](https://docs.netlify.com/visual-editor/visual-editing/inline-editor/) through data attributes without manually adding code throughout the codebase.

**This is achieved by:**

1. Adding an annotation property to the content objects at they're loaded (see `src/utils/content.ts`)
1. When rendering the page, each content sub-object is dynamically matched to the appropriate component. At this point, wrap each component with an annotation, based on the abovementioned content property. See `src/components/components-registry.tsx`.

**⚡ Demo:** [auto-annotated-portfolio.netlify.app](https://auto-annotated-portfolio.netlify.app)


## Getting Started

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd auto-annotated-portfolio
npm run dev
```

Install the [Netlify visual editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify visual editor URL. Open this, register or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Netlify visual editor dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)


## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
