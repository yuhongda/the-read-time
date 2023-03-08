# `steps` needs to be descending order by minutes  (the-read-time/steps)

`steps` prop in `<TheReadTime />` needs to be descending order by `minutes`.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx

<TheReadTime steps={[{ icon: '🍣', minutes: 1 },{ icon: '🍔', minutes: 5 },{ icon: '🍱', minutes: 15 }]} />

```

Examples of **correct** code for this rule:

```jsx

<TheReadTime steps={[{ icon: '🍱', minutes: 15 },{ icon: '🍔', minutes: 5 },{ icon: '🍣', minutes: 1 }]} />

```

### Options

## When Not To Use It

## Further Reading
