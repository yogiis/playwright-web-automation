# playwright-web-automation

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **Playwright**

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install the necessary dependencies**

```bash
  npm install
```

## Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```

**Additional Commands**

Run tests in a specific browser:

```bash
npx playwright test --project=firefox
```

npx playwright test --project=firefox
Replace firefox with the desired browser (e.g., webkit, chromium).

Run tests in headed mode (useful for debugging):

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test <test-file>
```

## Test Suite Overview

### Suite Name: @e2e Web Test Online Shopping

## Test Setup

### `beforeEach`

**Description:** Logs in a user before each test.

**Details:**

1. Navigate to the Sauce Demo website.
2. Fill in the username and password.
3. Click the submit button.

## Tests

### 1. User Select Some Items

**Description:** Selects random items from the dashboard.

**Details:**

- Iterates 4 times to select random items from the available products on the dashboard.

### 2. Full Flow Create Transaction

**Description:** Completes a full shopping transaction.

**Details:**

1. Select 5 random items from the dashboard.
2. Navigate to the cart.
3. Remove one item from the cart.
4. Proceed to checkout.
5. Fill out shipping information.
6. Complete the transaction.

## Contribution

Contributions are welcome, feel free to submit pull requests or open issues for discussion.

## Contact

<yogiis.ari047@gmail.com> - Feel free to email me with any questions or suggestions.
