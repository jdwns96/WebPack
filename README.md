# ⚙️ webpack

```bash
$ npm i -D webpack webpack-cli webpack-dev-server
```

`webpack`: 웹펙 설치 및 cli 설치  
`webpack-dev-server`: 웹펙 개발 서버 제공

# 🛠 webpack - loader

```bash
$ npm i -D babel-loader html-loader
$ npm i -D css-loader style-loader
$ npm i -D sass sass-loader
$ npm i -D file-loader url-loader
$ npm i -D ts-loader
```

`babel-loader`: es6 를 es5 로 바꿔주는 바벨을 웹팩에서 사용할 수 있게 해줍니다.  
`html-loader`: 웹팩이 html을 읽을 수 있게 해줍니다.  
`sass-loader`: sass 와 로더를 같이 설치해야 scss 해석이 가능하다. scss 로더.  
`css-loader`: css 파일들을 읽어준다  
`style-loader`: 읽은 css 파일들을 style 태그로 만들어 head 태그 안에 넣어줍니다.  
`file-loader`:  
`url-loader`:  
`ts-loader`: webpack 과 ts 연결 로더 ts-loader 는 TypeScript 컴파일러인 tsc를 사용하고, tsconfig.json의 설정을 따릅니다

# 🗝 webpack - plugin

```bash
$ npm i -D html-webpack-plugin
$ npm i -D mini-css-extract-plugin
$ npm i -D clean-webpack-plugin

```

`html-webpack-plugin`: html 관련 plugin 입니다. 템플릿을 지정하거나 favicon을 설정할 수 있습니다.  
`mini-css-extract-plugin`: style-loader를 대체하면서, link로 연결해주는 플러그인  
("style-loader"와 MiniCssExtractPlugin.loader를 함께 사용하면 안됩니다!)  
`clean-webpack-plugin`: 빌드 이전 결과물 제거

# babel

```bash
$ npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

`@babel/core`: 바벨을 사용하기 위한 필수 패키지  
`@babel/cli`: 명령줄 바벨  
`@babel/plugin`: 화살표 함수, 템플릿 리터럴 등의 플러그인, presets 을 설치해도 된다.  
`@babel/preset-env`: 바벨 기능 모음  
`@babel/preset-react`: 리엑트 - 바벨, JSX 컴파일 하기 위한 presets

# react

```bash
$ npm i react react-dom
```

# typescript

```bash
$ npm i -D typescript
```
