# Common

- Metadata là những thông tin của trang web, thường để tối ưu cho việc SEO website
- title: tiêu đề của trang web
- description: mô tả của trang web

# Next/font

- Google fonts
- Font weight
- Subset
- Variables
- Mulitple fonts
- Local fonts
- Tailwind fonts

  ## Hướng dẫn

  - Import: `import {fontName} from "next/font/google"`
  - Khai báo: `const fontNameVariable = fontName({subset: ["latin], vvv })`
  - weight: font-weight của chữ
  - subsets: kiểu chữ, thông thường là latin
  - Khi sử dụng nhiều font trong 1 trang web thì sẽ nên taọ 1 file font.ts rồi khai báo các font đó trong file đó rồi export ra. khi sử dụng thì sẽ lấy từ trong file đó ra
  - variable: tên biến để sử dụng trong CSS: ví dụ: variable: "--font-manrope"
  - Sử dụng trong css: `body { font-family: var(--font-manrope) }`
  - Tailwindcss: `<h1 className="font-primary">Hello</h1>`

  ```ts
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-manrope)",
        secondary: "var(--font-roboto)",
      },
    },
  },
  ```

  -Local fonts: `import localFont from "next/font/local";`

  ```ts
  const fontOnLocal = localFont({
    src: "../app/Chalkduster.ttf",
    display: "swap",
  });
  ```

# TypeScript

- `ComponentProps<"svg">`: sẽ lấy ra các props của thẻ svg

# Next/link

- Link
- href: đường dẫn, có thể điền vào chuỗi hoặc object

```js
<Link href={{ path: "urlName", query: "queryName" }}></Link>
```

- replace: chỉ thay thế đường dẫn chứ không lưu lại lịch sử (khi ấn back lại không quay lại trang trước đó mình vào)
- scroll: mặc định là true, nghĩa là khi ấn link thì sẽ scroll lên trên cùng -> nếu không muốn scroll thì sẽ scroll = false
- prefetch: Khi thẻ <Link> xuất hiện trên viewport thì link trong href của thẻ link sẽ được load trước (chạy ngầm). Giúp cho việc điều huớng trở nên mượt mà (chạy trên production)

# Kiến thức:

# Errors:

- You're importing a component that needs `usePathname`. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default. => Sử dụng hook `usePathName` thì có nghĩa file này sử dụng client
