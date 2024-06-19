This is a form control which exposes common form inputs such as regular input, select and text area, currently what we have available is the regular input

### Usage

```js

import FormControls from "./form-controls.tsx"

<FormControls
control="input"
type="password"
prefix={<FaLock />}
placeholder="Password"
aria-label="Password"
name="password">

```


### API

| control | Description           | props                   |
|---------|-----------------------|-------------------------|
| Input   | returns an antd input | All html and Antd props |
|         |                       |                         |
|         |                       |                         |
