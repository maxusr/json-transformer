# json-transformer
This package will help you handle some stuff like minify your data send from your backend to your clients.

## Installation
`npm install json-transformer`
With that you are good. No dependency. Total JS.

## Utilisations
This package include two important classes. Transformer and Reverser.

### Transformer
It transforms your data before you send it to your clients. 
`import { Transformer, transform } from 'json-transformer';


/**** In your code ****/
const data = {
    foo: 'bar',
    john: 'doe',
    baz: {
        foo: 'bar'
    }
};
res.json(Transformer.create().transform(data));
//OR
res.json(transform(data));
`

### Reverser
It reverse json data previously tranformed by Transformer.
`import { Reverser, reverse } from 'json-transformer';


/**** In your code ****/
res.json(Reverser.create().reverse(data));
//OR
res.json(reverse(data));
`
