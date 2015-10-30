H5P Transition
==============

H5P Transition contains helper function relevant for doing transitions

API overview
============

<a name="H5P"></a>
## H5P : <code>object</code>
**Kind**: global namespace  

* [H5P](#H5P) : <code>object</code>
  * [.Transition](#H5P.Transition)
    * [.onTransitionEnd($element, callback, timeout)](#H5P.Transition.onTransitionEnd)
    * [.sequence(transitions, transitions[].$element, [transitions[].timeout], [transitions[].break])](#H5P.Transition.sequence)

<a name="H5P.Transition"></a>
### H5P.Transition
Transition contains helper function relevant for transitioning

**Kind**: static property of <code>[H5P](#H5P)</code>  

* [.Transition](#H5P.Transition)
  * [.onTransitionEnd($element, callback, timeout)](#H5P.Transition.onTransitionEnd)
  * [.sequence(transitions, transitions[].$element, [transitions[].timeout], [transitions[].break])](#H5P.Transition.sequence)

<a name="H5P.Transition.onTransitionEnd"></a>
#### Transition.onTransitionEnd($element, callback, timeout)
Helper function for listening on transition end events

**Kind**: static method of <code>[Transition](#H5P.Transition)</code>  

| Param | Type | Description |
| --- | --- | --- |
| $element | <code>domElement</code> | The element which is transitioned |
| callback | <code>function</code> | The callback to be invoked when transition is finished |
| timeout | <code>number</code> | Timeout in milliseconds. Fallback if transition event is never fired |

<a name="H5P.Transition.sequence"></a>
#### Transition.sequence(transitions, transitions[].$element, [transitions[].timeout], [transitions[].break])
Run a sequence of transitions

**Kind**: static method of <code>[Transition](#H5P.Transition)</code>  

| Param | Type | Description |
| --- | --- | --- |
| transitions | <code>Array.&lt;Object&gt;</code> | Array of transitions |
| transitions[].$element | <code>H5P.jQuery</code> | Dom element transition is performed on |
| [transitions[].timeout] | <code>number</code> | Timeout fallback if transition end never is triggered |
| [transitions[].break] | <code>bool</code> | If true, sequence breaks after this transition |

Versions
========

Version  | Description
---------| -------------
1.0      | Initial version
1.1      | Added possibility to define a sequence of transitions

## License

(The MIT License)

Copyright (c) 2015 Joubel AS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
