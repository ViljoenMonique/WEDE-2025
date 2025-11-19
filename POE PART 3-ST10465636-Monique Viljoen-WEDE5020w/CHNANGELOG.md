# Changelog

All notable changes to this project will be documented in this file.  

---

## Part 3

## [1.0.4] - 2025-11-18

###  Features

Part 3 (added JavaScript)
We took all the “magic” that was repeated inside every HTML file and put it into one clean external file called JavaScript.js.
Now the website is no longer just pretty – it actually works like a real modern charity website:

- Click the logo, team photos, or QR code → they zoom big in a nice lightbox
- Start typing in the search bar → a dropdown instantly appears with the right pages (type “volunteer” → Volunteer page shows up, type “sponsorship” → Enquiry and Donate appear)
- Fill in the forms → if you type a wrong email or leave something blank, it turns red and tells you the error
- Click Submit → a lovely popup says “Thank you, Monique! Your message has been sent…” and the form clears

## [1.0.3] - 2025-11-17

###  Features

## Part 2 (only HTML + CSS)
Your website looked absolutely beautiful.
Everything was styled perfectly: the 3D blocks, the rotating cards on About Us, the animated helping-hand on Home, the watermark, the blue buttons, the car driving under the map, the perfect colours and fonts – everything was exactly how you wanted it.
But it was still just a pretty picture:
- Clicking the logo or photos did nothing
- The search bar was just a box – typing anything showed no results
- The forms let you type nonsense and the Submit button did absolutely nothing

## [1.0.2] - 2025-10-01
###  Features
- Added updatd html files in the html/ folder.
- Made CSS folder.
- Improved CSS styling for navigation bar.

###  Fixes
- Fixed footer.

---

## [1.0.1] - 2025-09-29
###  Features
- Updated HTML files in the html/ folder.
- Added new css/ folder with styles for layout and navigation.

###  Fixes
- Corrected minor formatting issues in HTML structure.

---

## [1.0.0] - 2025-09-28
###  Initial Release
- Project repository created.
- Uploaded base HTML, images, CSS and project documents.

### Added
- Screenshots Responsiveness (Word document) added in the images/ folder 

  ## Summary
The CSS file provides a comprehensive styling framework for a website, emphasizing typography, layout, visual design, and responsiveness. It begins by importing the Montserrat and Open Sans fonts from Google Fonts to ensure consistent typography across the site (W3Schools, 2023). Default styles are established with a universal reset (*) for margins, padding, and box-sizing, while the body element sets a base font, background color, and spacing (Duckett, 2011). Typography is meticulously crafted with varying font sizes, line heights, and weights for headings and paragraphs, using Montserrat for headings and Open Sans for body text, creating a harmonious scale (Meyer, 2014). Layouts leverage Flexbox for navigation (nav) and content containers (.content), while visual styles are enhanced with properties like background-color, border, box-shadow, and pseudo-classes such as :hover, :focus, and :active to add interactivity (Rutter, 2019). Unique features include a watermark using the ::before pseudo-element, 3D block effects with hover transitions, and an animated car with keyframes, showcasing advanced CSS techniques (Cederholm, 2010). Responsive design is achieved through a media query at 768px, adjusting layouts, typography, and disabling certain 3D effects for smaller screens (Marcotte, 2011). 

Updated README file

## Reference List
Cederholm, D. (2010). Handcrafted CSS: More bulletproof web design. New Riders, Berkeley, CA.

Duckett, J. (2011). HTML & CSS: Design and build websites. Wiley, Indianapolis, IN.

Marcotte, E. (2011). Responsive web design. A Book Apart, New York, NY.

Meyer, E. A. (2014). CSS: The definitive guide. O'Reilly Media, Sebastopol, CA.

Rutter, R. (2019). Beginning CSS: Cascading style sheets for web design. Apress, Berkeley, CA.

W3Schools. (2023). CSS @import rule. Retrieved 29 September 2025, from https://www.w3schools.com/cssref/pr_import_rule.asp.
