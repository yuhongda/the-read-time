# the-read-time 🍱🍔🍣

> Show the read time in emoji

![The-Persistence-of-Memory_m](https://user-images.githubusercontent.com/259410/222467352-37420c47-fe99-486f-b5a0-d595f7656f25.png)

## 🎨 Features

- Show the read time in emoji automatically. like `🍱🍔🍣21'10"`
- Support reading speed setting.
- You can choose your emoji.
- Make your own custom display.

## Installation

```bash
pnpm add @silverage/the-read-time
```

## Usage

```jsx
import { TheReadTime } from '@silverage/the-read-time'

<TheReadTime>
  {/* your article */}
</TheReadTime>
```

🪄 Boom! The read time will show top the article

![image](https://user-images.githubusercontent.com/259410/222621402-79d885a4-2dd9-4403-a316-bd4464e39b7b.png)

## Options

### `steps`

type: `Step[]`

default: `[{icon:"🍣",minutes:1},{icon:"🍔",minutes:5},{icon:"🍱",minutes:15}]`

> Using `steps` to change the emoji and its time consuming.

### `speed`

type: `number`

default: `200`

> It's how many words can be read per minute.

### `time`

type: `number`

default: `undefined`

> Set this will skip the read time calculation, and just use this number as total read time to convert to emoji.

### `displayRender`

type: `(emoji: ReactNode[], totalTime: number) => ReactNode`

default: `undefined`

> You can make your own custom display by this option.
