### NobleUtils - `scrollToSection` Utility

### Function: 
- `scrollToSection(contents, targetSelector, offset)`

### Parameters:

- **`contents`** (`Array<string>`): An array of strings where each string represents a class name or ID of the target sections. The function scrolls to these sections when their corresponding elements are clicked.

- **`targetSelector`** (`string`): A CSS selector string to identify the clickable elements. This can be a class, ID, or tag name. The function applies the scroll behavior to these elements.

- **`offset`** (`number`): The offset (in pixels) to adjust the scroll position from the top of the section. Default is `0`.

### Description:

The `scrollToSection` function enables smooth scrolling to different sections of a webpage when the associated elements are clicked. It is dynamic and can handle single or multiple elements, based on the `targetSelector`. The function also adjusts for the default behavior of clickable elements where necessary.

### How It Works:

1. **Validate Inputs**:
   - The function checks if the `contents` parameter is a valid array and `targetSelector` is a non-empty string.

2. **Dynamic Target Selector**:
   - The function builds a dynamic CSS selector based on `targetSelector`, which can be a class, ID, or tag name.

3. **Event Listener Attachment**:
   - For each selected element, it checks if the `data-target` attribute exists and is included in the `contents` array.
   - Adds a click event listener to smoothly scroll to the corresponding section.

4. **Prevent Default Behavior**:
   - If the clicked element is an anchor tag (`<a>`) or has an `href` attribute, `e.preventDefault()` is called to prevent the default navigation behavior.

5. **Scroll to Section**:
   - Finds the target section by ID or class and scrolls to it with smooth behavior, adjusting for the specified `offset`.

### Examples

**Using Tags:**
```javascript
scrollToSection(['section1', 'section2', 'section3'], 'a', 50);
```
**HTML:**
```html
<a href="#" data-target="section1">Go to Section 1</a>
<a href="#" data-target="section2">Go to Section 2</a>
<a href="#" data-target="section3">Go to Section 3</a>
<div id="section1">Section 1 Content</div>
<div id="section2">Section 2 Content</div>
<div id="section3">Section 3 Content</div>
```

**Using Classes:**
```javascript
scrollToSection(['section1', 'section2', 'section3'], '.scroll-link', 50);
```
**HTML:**
```html
<a class="scroll-link" data-target="section1">Go to Section 1</a>
<a class="scroll-link" data-target="section2">Go to Section 2</a>
<a class="scroll-link" data-target="section3">Go to Section 3</a>
<div class="section" id="section1">Section 1 Content</div>
<div class="section" id="section2">Section 2 Content</div>
<div class="section" id="section3">Section 3 Content</div>
```

**Using IDs:**
```javascript
scrollToSection(['section1', 'section2', 'section3'], '#scroll-link', 50);
```
**HTML:**
```html
<a id="scroll-link" data-target="section1">Go to Section 1</a>
<a id="scroll-link" data-target="section2">Go to Section 2</a>
<a id="scroll-link" data-target="section3">Go to Section 3</a>
<div id="section1">Section 1 Content</div>
<div id="section2">Section 2 Content</div>
<div id="section3">Section 3 Content</div>
```

### Installation

Installation details for NobleUtils will be provided soon.
