# EDGE-IIUC-CBI015-C201265__JS


## The typeof operator
The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

A call to typeof x returns a string with the type name:

        typeof undefined // "undefined"

        typeof 0 // "number"

        typeof 10n // "bigint"

        typeof true // "boolean"

        typeof "foo" // "string"

        typeof Symbol("id") // "symbol"

        typeof Math // "object"  (1)

        typeof null // "object"  (2)

        typeof alert // "function"  (3)

<br>
## The conversion follows the rules:

        Value	              Becomes…
        undefined	           NaN
        null	                0
        true / false	      1 / 0
        string	              The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.