---
sidebar_position: 4
---

# Strategies
With the framework you can define a trading strategy in a couple of ways. 


## Class based strategy

```python
from investing_algorithm_framework import create_app, PortfolioConfiguration, \
TimeUnit, TradingTimeFrame, TradingDataType, TradingStrategy, Algorithm

class MyTradingStrategy(TradingStrategy):
    time_unit = TimeUnit.SECOND
    interval = 5
    trading_data_type = TradingDataType.OHLCV
    trading_time_frame_start_date = datetime.utcnow() - timedelta(days=1)
    trading_time_frame = TradingTimeFrame.ONE_MINUTE
    market = "BITVAVO"
    symbols = ["BTC/EUR"]

    def apply_strategy(
        self,
        algorithm: Algorithm,
        market_data,
    ):
        print(len(algorithm.get_orders()))
        print(market_data)
```

## Decorator strategy
```python
from investing_algorithm_framework import create_app, PortfolioConfiguration, \
TimeUnit, TradingTimeFrame, TradingDataType, TradingStrategy, Algorithm

@app.strategy(
    time_unit=TimeUnit.SECOND,
    interval=5,
    market="BITVAVO",
    trading_data_types=[TradingDataType.OHLCV, TradingDataType.TICKER],
    trading_time_frame=TradingTimeFrame.ONE_DAY,
    symbols=["BTC/EUR"],
    trading_time_frame_start_date=datetime.now() - timedelta(days=60),
)
def perform_strategy(algorithm: Algorithm, market_data):
    print(algorithm.get_portfolio())
    print(algorithm.get_positions())
    print(algorithm.get_orders())
    print(market_data)
    
        if algorithm.position_exists("<symbol>"):
            algorithm.close_position("<symbol>")
        else:
            algorithm.create_limit_order(
                symbol="<symbol>",
                side="buy",
                percentage_portfolio=20,
                price=market_data["tickers"]["<symbol>"]["bid"]
            )
```
