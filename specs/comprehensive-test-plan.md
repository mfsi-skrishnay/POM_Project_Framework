# Comprehensive Test Plan for POM Project Framework

## 1. Framework Overview

This repository is a Playwright-based Page Object Model (POM) test automation framework targeting a mix of Amazon India flows and a public file upload/download demo page.

### Observed framework structure
- Test runner: Playwright with JavaScript/CommonJS
- Configuration: [playwright.config.js](../playwright.config.js)
- Page objects: [pages/HomePage.js](../pages/HomePage.js), [pages/SearchResultsPage.js](../pages/SearchResultsPage.js), [pages/ProductDetailsPage.js](../pages/ProductDetailsPage.js), [pages/LoginPage.js](../pages/LoginPage.js), [pages/wishlistPage.js](../pages/wishlistPage.js)
- Test data: [utils/testData.js](../utils/testData.js)
- Existing test suites: [tests/wishlistAddRemove.spec.js](../tests/wishlistAddRemove.spec.js), [tests/UploadDownload.spec.js](../tests/UploadDownload.spec.js), [tests/seed.spec.ts](../tests/seed.spec.ts)

### Current automation intent
- Validate Amazon home page interactions
- Sign in and verify the authenticated account state
- Search for products and validate results
- Validate product details and add products to wishlist
- Manage wishlist items (remove, rename, search, clear)
- Verify upload/download workflows on the demo site

## 2. Test Plan Objective

Create a comprehensive, reusable test plan that covers the functional areas implemented by the current POM framework and highlights the highest-value automation scenarios for future execution.

## 3. Scope

### In scope
- Home page navigation and basic UI validation
- Search flow and result validation
- Product detail validation
- Login flow using stored credentials
- Wishlist add/remove/rename/search/clear operations
- File upload and file download workflows
- Basic failure handling, screenshots, and traces

### Out of scope
- Full e-commerce checkout flow
- Payment gateway testing
- Real-world account recovery or multi-factor authentication
- Non-browser API testing beyond what is already represented in the framework

## 4. Test Environment and Assumptions

### Environment
- Browser: Chromium (desktop)
- Base URL: https://www.amazon.in
- Secondary demo URL: https://testautomationpractice.blogspot.com/p/download-files_25.html
- Headless mode: disabled in current config

### Test data
- Valid Amazon credentials from [utils/testData.js](../utils/testData.js)
- Sample search term: Laptop
- Sample wishlist name: MyShoppingList
- Sample test file: [Files/sampleFile.pdf](../Files/sampleFile.pdf)

### Assumptions
- Test accounts remain valid during execution
- External sites remain accessible and stable enough for UI automation
- The Amazon UI continues to expose the current locators used in the page objects

## 5. Test Strategy

### Approach
- Use end-to-end UI tests that follow the Page Object Model pattern
- Validate both positive and negative paths where practical
- Keep tests deterministic by using explicit waits and reusable helpers
- Capture screenshots and traces on failure for debugging

### Priorities
- P0: Critical user journeys and core business flows
- P1: Important supporting flows and validations
- P2: Extended regression and resilience scenarios

## 6. Test Scenarios and Cases

The test cases below are grouped by feature area so they are easier to read and execute.

### A. Home Page and Navigation

- TC-HOME-001 (P0): Open home page successfully
  - Expected result: The home page loads, the continue-shopping popup is handled if present, and the search box is visible.
- TC-HOME-002 (P1): Validate home page core elements
  - Expected result: The logo, search box, and search button are visible.
- TC-HOME-003 (P0): Search for a valid product keyword
  - Expected result: The search results page opens and the entered keyword is reflected in the search box.
- TC-HOME-004 (P2): Search for an invalid or non-existing keyword
  - Expected result: An empty or no-match state is shown without breaking the flow.

### B. Authentication

- TC-AUTH-001 (P0): Login with valid credentials
  - Expected result: The user signs in successfully and the account name appears in the header.
- TC-AUTH-002 (P0): Validate logged-in state after sign-in
  - Expected result: Account-specific UI elements are visible and match the signed-in account.
- TC-AUTH-003 (P1): Logout from the signed-in account
  - Expected result: The user signs out and the sign-in option is available again.
- TC-AUTH-004 (P2): Login with invalid credentials
  - Expected result: An authentication error or validation message is displayed.

### C. Search Results and Product Details

- TC-PROD-001 (P0): Validate search results page contents
  - Expected result: At least one non-sponsored result is displayed.
- TC-PROD-002 (P0): Open the first visible product from results
  - Expected result: The product details page opens successfully.
- TC-PROD-003 (P0): Validate product details page fields
  - Expected result: The product title, price, rating, and delivery information are visible.
- TC-PROD-004 (P0): Add a product to wishlist from product details
  - Expected result: A confirmation dialog appears and the product can be tracked in the wishlist.
- TC-PROD-005 (P1): Add multiple products to wishlist
  - Expected result: Multiple wishlist items are created successfully and the count is updated.
- TC-PROD-006 (P1): Add a product to cart from product details
  - Expected result: A cart confirmation message appears or the cart page opens.

### D. Wishlist Management

- TC-WISHLIST-001 (P0): Open wishlist from account navigation
  - Expected result: The wishlist page opens and the expected URL is loaded.
- TC-WISHLIST-002 (P0): Validate wishlist item count
  - Expected result: The wishlist shows the expected number of items after product addition.
- TC-WISHLIST-003 (P0): Remove a single item from wishlist
  - Expected result: The item is removed and a deletion confirmation is shown.
- TC-WISHLIST-004 (P1): Rename the wishlist
  - Expected result: The wishlist name is updated successfully and the new name is visible.
- TC-WISHLIST-005 (P1): Search within the wishlist
  - Expected result: The search filters the items to the matching product and the item remains visible.
- TC-WISHLIST-006 (P1): Clear all wishlist items
  - Expected result: The wishlist becomes empty and the empty-state message is shown.
- TC-WISHLIST-007 (P2): Handle empty wishlist state
  - Expected result: The empty-state message is displayed without UI layout issues.

### E. Filters, Sorting, and Product Discovery

- TC-FILTER-001 (P1): Apply brand filter to search results
  - Expected result: Brand-filtered products are shown and the product titles reflect the selected brand.
- TC-FILTER-002 (P1): Apply RAM filter to search results
  - Expected result: The selected RAM filter is reflected and matching products are displayed.
- TC-FILTER-003 (P1): Apply processor filter to search results
  - Expected result: Processor-filtered results render correctly and the selection is visible.
- TC-FILTER-004 (P1): Sort products by price low to high
  - Expected result: The displayed product prices are in ascending order.

### F. Language Settings

- TC-LANG-001 (P2): Open language settings from the header
  - Expected result: The language settings page opens and language options are available.
- TC-LANG-002 (P2): Select a language and save changes
  - Expected result: The selected language is marked active and the save action completes.
- TC-LANG-003 (P2): Validate the header reflects the selected language
  - Expected result: The header or page content shows the selected language state.

### G. Upload and Download

- TC-FILE-001 (P0): Download a PDF from the demo page
  - Expected result: The PDF download is initiated and the file is saved with a .pdf extension.
- TC-FILE-002 (P0): Upload a single file to the demo page
  - Expected result: An upload confirmation is displayed and the file status is updated.
- TC-FILE-003 (P2): Upload a missing or invalid file
  - Expected result: The page shows an appropriate validation error without breaking the test flow.

## 7. Suggested Automation Mapping

The mapping below links each functional area to the corresponding automation files in the repository in a simpler, screen-friendly format.

- Home page
  - Automation file: [pages/HomePage.js](../pages/HomePage.js)
  - Purpose: Navigation, search, and language-related actions

- Search results
  - Automation file: [pages/SearchResultsPage.js](../pages/SearchResultsPage.js)
  - Purpose: Validating search result pages, filters, sorting, and product selection

- Product details
  - Automation file: [pages/ProductDetailsPage.js](../pages/ProductDetailsPage.js)
  - Purpose: Product detail validation, wishlist addition, and cart actions

- Login
  - Automation file: [pages/LoginPage.js](../pages/LoginPage.js)
  - Purpose: Login, logout, and signed-in account validation

- Wishlist
  - Automation file: [pages/wishlistPage.js](../pages/wishlistPage.js)
  - Purpose: Wishlist opening, item removal, name changes, and cleanup

- Upload/Download
  - Automation file: [tests/UploadDownload.spec.js](../tests/UploadDownload.spec.js)
  - Purpose: File download and single-file upload validation

## 8. Recommended Execution Order

1. Smoke suite: home page, login, search, wishlist add/remove
2. Functional suite: filters, sorting, product detail validation
3. File suite: download and upload validation
4. Regression suite: language settings and empty-state resilience

## 9. Risks and Observability

- Amazon UI may change frequently, so locators should be reviewed regularly
- Login and wishlist flows may depend on account state and external factors
- Use screenshots, traces, and failure captures for faster debugging
- Consider adding retries for flaky network or transient UI issues

## 10. Exit Criteria

The feature set is considered ready for release when:
- All P0 scenarios pass consistently
- P1 scenarios pass in regression runs
- Failure screenshots and traces are captured automatically
- The framework remains maintainable through clear page object coverage
