This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Lottie Animation Component

This project includes a reusable Lottie animation component that you can easily integrate throughout your application.

### Current Implementation

The `LoadingAnimation` component in `app/page.tsx` can be reused across your app:

```tsx
// From app/page.tsx
function LoadingAnimation() {
  return (
    <div className="w-1/2 h-1/2">
      <Lottie animationData={animationData} />
    </div>
  );
}
```

### Reusing the Component

To reuse this component in other parts of your app:

1. **Copy the component** to a new file (e.g., `components/LoadingAnimation.tsx`)
2. **Import your animation data**:
   ```tsx
   import animationData from "@/public/climb_the_mountain.json";
   ```
3. **Use it anywhere**:

   ```tsx
   import LoadingAnimation from "@/components/LoadingAnimation";

   function MyPage() {
     return (
       <div>
         <h1>Welcome</h1>
         <LoadingAnimation />
       </div>
     );
   }
   ```

### Customizing the Component

Modify the component to accept props for different use cases:

```tsx
// Enhanced version with props
function LoadingAnimation({
  size = "w-1/2 h-1/2",
  animation = animationData
}) {
  return (
    <div className={size}>
      <Lottie animationData={animation} />
    </div>
  );
}

// Usage examples:
<LoadingAnimation size="w-32 h-32" />
<LoadingAnimation size="w-full h-64" />
```

### Adding New Animations

1. Place your `.json` animation files in the `public/` directory
2. Import them in your component:
   ```tsx
   import newAnimation from "@/public/your_animation.json";
   ```
3. Use with the existing component structure:
   ```tsx
   <div className="w-1/2 h-1/2">
     <Lottie animationData={newAnimation} />
   </div>
   ```

### Performance Tips

- The current `w-1/2 h-1/2` sizing works well for responsive layouts
- Consider using fixed dimensions (`w-64 h-64`) for consistent sizing across pages
- The component automatically handles the Lottie animation lifecycle
