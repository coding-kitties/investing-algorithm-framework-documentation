---
sidebar_position: 5
---

# Orders
In this section we will discuss how to create, retrieve and list orders.
The orders of your trading bot are centrally managed by the algorithm component.
In your strategy you can create orders, retrieve orders and list orders through the algorithm component.
The following orders are supported by the framework:

* Limit buy orders
* Limit sell orders
* Market sell orders


## Creating limit buy order
You can create orders by using the following methods of the framework

```python
from investing_algortihm_framework import OrderSide

@app.strategy(time_unit=TimeUnit.SECOND, interval=5)
def perform_strategy(algorithm: Algorithm, market_data: Dict[str, Any]):
    algorithm.create_limit_order(
        symbol="<symbol>", # E.g BTC
        side=OrderSide.BUY, # or "buy"
        amount=20,
        price=10
    )
```

### Creating a limit buy order based on a percentage of your portfolio
```python
from investing_algortihm_framework import OrderSide

@app.strategy(time_unit=TimeUnit.SECOND, interval=5)
def perform_strategy(algorithm: Algorithm, market_data: Dict[str, Any]):
    algorithm.create_limit_order(
        symbol="<symbol>", # E.g BTC 
        side=OrderSide.BUY, # or "buy"
        price=10,
        percentage_of_portfolio=20 # Invest 20% of your portfolio unallocated funds
    )
```


## Creating a limit sell order

```python
from investing_algortihm_framework import OrderSide

@app.strategy(time_unit=TimeUnit.SECOND, interval=5)
def perform_strategy(algorithm: Algorithm, market_data: Dict[str, Any]):
    algorithm.create_limit_order(
        symbol="<symbol>", # E.g BTC
        side=OrderSide.SELL, # or "sell"
        price=10,
        amount=20
    )
```


### Creating a limit sell order based on a percentage of your position
```python
from investing_algortihm_framework import OrderSide

@app.strategy(time_unit=TimeUnit.SECOND, interval=5)
def perform_strategy(algorithm: Algorithm, market_data: Dict[str, Any]):
    algorithm.create_limit_order(
        symbol="<symbol>", # E.g BTC  
        side=OrderSide.SELL, # or "sell"
        price=10,
        percentage_of_position=20 # Sell 20% of your position of the given symbol
    )
```

### Closing a position with a limit sell order
```python
from investing_algortihm_framework import OrderSide

@app.strategy(time_unit=TimeUnit.SECOND, interval=5)
def perform_strategy(algorithm: Algorithm, market_data: Dict[str, Any]):
    algorithm.close_position(<symbol>) # E.g BTC close your BTC position
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