# Code Challenge: Improve the Shopping Cart System

## Challenge Overview

Great job building your first **Shopping Cart System**
using Object-Oriented Programming.

Now it is time to improve your solution like real software engineers.

Your challenge is to extend the current system by implementing new features and
improving the business logic.

You must **analyze the problem**, **design the solution**, and **implement it
using classes and methods in JavaScript**.

Do **not** rewrite the entire system from scratch. Instead, improve the
previous solution.

# Challenge Requirements

Your shopping cart system must now support the following new features.

## 1. Discount System

Add support for discounts.

The customer should be able to receive a percentage discount on the
total purchase.

### Example

```text
Total purchase: $500
Discount: 10%
Final total: $450
```

### Hint

Ask yourself:

- Should discount be a property or calculated dynamically?
- Do you need a new method?
- How can you calculate a percentage?

Think about:

```text
original total - discount amount
```

## 2. Tax Calculation

The store now applies taxes to purchases.

You must calculate taxes based on the subtotal.

### Example

```text
Subtotal: $100
Tax: 19%
Final price: $119
```

### Hint

Ask yourself:

- Should taxes be fixed or configurable?
- Should tax calculation happen inside another method?
- What happens if discounts are applied before taxes?

Think carefully about the order of calculations.

## 3. Empty Cart Feature

Add a feature that allows customers to empty their cart.

### Hint

Ask yourself:

- Which property needs to change?
- What should happen to the quantity?
- What message should be returned?
