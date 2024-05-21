# Dev Form Filler

## Running the Project

#### Linux/macOS:

```bash
$ pnpm dev
```

or to open extension as a web page

```bash
$ pnpm start
```

#### Windows:

```bash
$ pnpm dev:win
```

or to open extension as a web page

```bash
$ pnpm start:win
```

### After loading the extension into the browser

1. Navigate to the `example` folder:

```bash
$ cd example
```

2. Run the project in development mode:

```bash
$ pnpm dev
```

### Workflow

The form schema can be edited via the extension UI or by uploading a custom JSON file

```json
{
  "name": "schema name",
  "fields": [
    {
      "identifier": "field-id-1",
      "action": "fill",
      "value": "test input value"
    },
    {
      "identifier": "field-id-2",
      "action": "select",
      "value": ["option 1"]
    },
    {
      "identifier": "field-id-3",
      "action": "click"
    },
  ]
}

```

### In next iterations
- [ ] Support for async react select
- [ ] Ability to add timeout between
- [ ] Dragable elements during schema editing 


