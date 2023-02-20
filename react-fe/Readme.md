# React FE for This Prject

We need prefix to install:

```
sail npm i --prefix react-fe
```

On run dev:

```
sail npm run dev --prefix react-fe
```

I have added small fix to run dev script:

```js
# package.json

{
// ...
"scripts": {
        "dev": "vite --host",
            // ...
        },
// ...
}

```

> Note: Please add prefix [`react-fe`] everytime you want to add new node package

Example:

```
sail npm install --prefix ./frontend/ -D tailwindcss postcss autoprefixer
```
