/**
 * Handles smooth scrolling to different sections of a webpage when clickable elements are activated.
 * 
 * @param {Array<string>} contents - An array of strings representing class names or IDs of target sections. 
 *                                    The function scrolls to these sections when their corresponding elements are clicked.
 * @param {string} targetSelector - A CSS selector string identifying clickable elements. 
 *                                    This can be a class, ID, or tag name.
 * @param {number} [offset=0] - The offset to adjust the scroll position from the top of the section. Defaults to 0.
 */

function scrollToSection(contents, targetSelector, offset = 0) {
    // Check if contents array is valid
    if (!Array.isArray(contents) || contents.length === 0) {
        console.error("Invalid contents array provided.");
        return;
    }

    // Check if targetSelector is valid
    if (typeof targetSelector !== 'string' || targetSelector.trim() === '') {
        console.error("Invalid target selector provided.");
        return;
    }

    // Dynamically handle target selection for ID, class, or tag
    const selector = targetSelector.startsWith('#') || targetSelector.startsWith('.') 
        ? targetSelector 
        : `.${targetSelector}, #${targetSelector}, ${targetSelector}`;

    // Select elements based on the dynamic selector
    let elements = document.querySelectorAll(selector);

    // Check if a single element is selected and treat it as an array of one element
    if (elements.length === 0) {
        console.warn(`No elements found for targetSelector: ${targetSelector}`);
        return;
    } else if (elements.length === 1) {
        elements = [elements[0]]; // Convert single element to array
    }

    // Handle scroll behavior for each selected element
    elements.forEach(el => {
        // Get the target section from the data-target attribute
        const target = el.dataset.target;

        if (!target) {
            console.warn("No data-target attribute found.");
            return;
        }

        if (contents.includes(target)) {
            el.addEventListener('click', (e) => {
                // Check if the element is an anchor tag or has a default action
                if (el.tagName.toLowerCase() === 'a' || el.hasAttribute('href')) {
                    e.preventDefault(); // Prevent default anchor behavior
                }

                // Find the section element by ID or class
                const sectionElement = document.getElementById(target) || document.querySelector(`.${target}`);

                if (sectionElement) {
                    const offsetPosition = sectionElement.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                } else {
                    console.warn(`No section found for target: ${target}`);
                }
            });
        } else {
            console.warn(`Target '${target}' not found in contents.`);
        }
    });
}

