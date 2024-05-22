# eRunner UI

## FOLDER STRUCTURE
>
> `eRunner.dApp` _Root directory_ <br>
> -- `UIdev  _root` UI directory_ <br>
> --- `UIdev.react`  _React JS development environment directory_ <br>
> --- `UIdev.sass`  _SASS compiler environment directory_
>

## Technology specifications

### 1. React JS with Vite

Create the React project base with Vite. <br>
Documentation URL: [https://vitejs.dev/guide/] (<https://vitejs.dev/guide/>)

#### Installation

`npm create vite@latest eRunnerGUI`

Creates the react project bases for the eRunner Generic UI. This is the collection of common components of the eRunner dApp(s). All React applications with sit under UIdev.react directory.

##### React + Vite

Two official plugins are installed:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### 2. SASS - css styling compiler

 `sass --version` <br>
 1.77.2 compiled with dart2js 3.4.0

 Documentation URL: [https://sass-lang.com/guide/] (<https://sass-lang.com/guide/>)
