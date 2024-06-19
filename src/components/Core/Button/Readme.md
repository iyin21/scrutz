# Button

Variants

Button supports the following variants:primary, ghost, outline, secondary:

#### usage

```js
import Button from 'Button';

<div className="flex items-center justify-center gap-5">
    <Button type="button" variant="primary">
        Primary variant
    </Button>
    <Button type="button" variant="blue">
        Blue variant
    </Button>
    <Button type="button" variant="border">
        Border variant
    </Button>
    <Button type="button" variant="ghost">
        Outline variant
    </Button>
</div>;
```

#### API

| Name      | Type                                     | Description                  |
|-----------|------------------------------------------|------------------------------|
| href      | string                                   | Button label                 |
| exact      | boolean                | Button type attribute       |
| variant   | primary \| secondary \| outline \| ghost | Controls button appearance   |
