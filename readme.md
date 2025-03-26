# @paciu/utils

### `npm i @paciu/utils`

### nounForm
```javascript
import { nounForm } from '@paciu/utils'

nounForm( 1, [ 'час', 'часа', 'часов' ] ) // час
nounForm( 3, [ 'час', 'часа', 'часов' ] ) // часа
nounForm( 5, [ 'час', 'часа', 'часов' ] ) // часов
```



### pluralize
```javascript
import { pluralize } from '@paciu/utils'

pluralize( 1, [ 'hour', 'hours' ] ) // hour
pluralize( 2, [ 'hour', 'hours' ] ) // hours
```



### interpolateTemplate
```javascript
import { interpolateTemplate } from '@paciu/utils'

interpolateTemplate( 'Hello, {{name}}.', { name: 'John' } ) // Hello, John.
interpolateTemplate( 'Hello, ((name)).', { name: 'John' }, { delimiters: [ '((', '))' ] } ) // Hello, John.
```



### secondsToTimeString
```javascript
import { secondsToTimeString } from '@paciu/utils'

secondsToTimeString( 1830 ) // 00:30:30
secondsToTimeString( 5400, 'hh:mm' ) // 01:30
```


