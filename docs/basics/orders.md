---
sidebar_position: 5
---

# Orders 

The following orders are supported:

* Limit buy orders
* Limit sell orders
* Market sell orders

## Creating an order
You can create orders by using the following methods of the framework

### Creating a limit buy order
```python
from investing_algortihm_framework import OrderSide

algorithm.create_limit_order(
    symbol="<symbol>",
    side=OrderSide.BUY,
    amount=20,
    price=10
)
```

### Creating a limit sell order
```python
algorithm.create_limit_order(
    symbol="<symbol>",
    side=OrderSide.SELL,
    amount=20,
    price=10
)
```

### Creating a market sell order
```python
algorithm.create_market_order(
    symbol="<symbol>",
    side=OrderSide.SELL,
    amount=20,
)
```

### Creating an order by portfolio percentage
For limit buy order you can specify a portfolio percentage, so the buy order will take a size 
relative to the size of you portfolio. You can do this in the following way:
```python
algorithm.create_limit_order(
    symbol="<symbol>",
    side="buy",
    percentage_portfolio=20,
    price=10
)
```

## Retrieving an order
You can retrieve an order by using the `get_order` method of your algorithm component.


### Retrieving an order by reference id
You can retrieve an order by the id provided to you by the brokder/exchange. You can do this in
the following way:
```python
algorithm.get_order(self, reference_id=<your broker/exchange reference id>)
```

### Retrieving an order other parameters
You can retrieve an order by symbol and market in the following way.

:::warning Multiple orders mismatch

Keep in mind that when there exist multiple order for a given symbol and market that you will
likely not retrieve the order you are looking for.

:::

```python
algorithm.get_order(
    market=<market e.g. binance, bitvavo>,
    target_symbol=<target symbol e.g. btc, dot>,
    trading_symbol=<trading symbol e.g. eur>,
    side=<order side e.g. SELL, BUY>,
    type=<order type e.g. LIMIT, MARKET>,
)
```
## Listing all orders
You can retrieve an order by using the `get_orders` method of your algorithm component.

```python
algorithm.get_orders(
    market=<market e.g. binance, bitvavo>,
    target_symbol=<target symbol e.g. btc, dot>,
    trading_symbol=<trading symbol e.g. eur>,
    side=<order side e.g. SELL, BUY>,
    type=<order type e.g. LIMIT, MARKET>,
)
```

## Checking pending orders
You can check the status of your oders by using the `check_pending_orders` method of 
your algorithm component.

```python
algorithm.check_pending_orders()
```