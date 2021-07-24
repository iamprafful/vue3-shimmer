# Vue 3 Shimmer

 <p align="center"><img src="./assets/card.gif" /></p>

A vue 3 library that provides an easy way to add a shimmer effect to any view in your vue.js app. It is useful as an unobtrusive loading indicator just like facebook cards.

## Installation

```
npm install vue3-shimmer
```

## Usage
### Register the shimmer plugin
Register the plugin globally in your app
```js
import { createApp } from 'vue';
import App from './App.vue';
import Shimmer from 'vue3-shimmer';

const app = createApp(App);
app.use(Shimmer);

app.mount('#app');
````
or add locally in your Vue componenet
```js
import { CardShimmer, ParagraphShimmer, FreeStyleShimmer } from 'shimmer'

export default {
  components: {
     CardShimmer,
     ParagraphShimmer,
     FreeStyleShimmer,
  },
}
```
### Card Shimmer
```html
<card-shimmer :is-loading="true" />
```
### Paragraph Shimmer
```html
<paragraph-shimmer :is-loading="true" :lines="4" :random-size="true" />
```
### Free Style Shimmer
```html
<free-style-shimmer
  :is-loading="true"
  height="100px"
  width="100px"
  border-radius="50px"
  color="#bdbdbd"
/>
```

## Props
### Card Shimmer

| Property   | Type    | values         | description                            | default |
|------------|---------|----------------|----------------------------------------|---------|
| is-loading | Boolean | `true` `false` | Shimmer is visible only if passed true | `true`  |

### Paragraph Shimmer
 
| Property    | Type    | values         | description                                                          | default |
|-------------|---------|----------------|----------------------------------------------------------------------|---------|
| is-loading  | Boolean | `true` `false` | Shimmer is visible only if passed true                               | `true`  |
| lines       | Number  | any number     | Denotes number of lines in paragraph                                 | `3`     |
| random-size | Boolean | `true` `false` | The width of line is always random if passed true else width is 100% | `true`  |

<p align="center"><img src="./assets/paragraph.gif" /></p>

### Free Style Shimmer

| Property      | Type    | values                       | description                                | default            |
|---------------|---------|------------------------------|--------------------------------------------|--------------------|
| is-loading    | Boolean | `true` `false`               | Shimmer is visible only if passed true     | `true`             |
| width         | String  | `10px` `1.5rem` `80%`        | Width of your shimmer component            |                    |
| height        | String  | `10px` `1.5rem` `80%`        | Height of your shimmer component           |                    |
| border-radius | String  | `10px` `1.5rem` `80%`        | Border radius of your shimmer component    | `5px`              |
| color         | String  | `#fbfbfb` `rgb(211,211,211)` | Background color of your shimmer component | `rgb(211,211,211)` |

# Licemse

MIT License

Copyright (c) 2021 Prafful Lachhwani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
