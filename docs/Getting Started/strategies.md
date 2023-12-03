[//]: # (---)

[//]: # (sidebar_position: 4)

[//]: # (---)

[//]: # ()
[//]: # (# Strategies)

[//]: # (With the framework you can define a trading strategy in a couple of ways. )

[//]: # ()
[//]: # ()
[//]: # (## Class based strategy)

[//]: # ()
[//]: # (```python)

[//]: # (from investing_algorithm_framework import create_app, PortfolioConfiguration, \)

[//]: # (TimeUnit, TradingTimeFrame, TradingDataType, TradingStrategy, Algorithm)

[//]: # ()
[//]: # (class MyTradingStrategy&#40;TradingStrategy&#41;:)

[//]: # (    time_unit = TimeUnit.SECOND)

[//]: # (    interval = 5)

[//]: # (    trading_data_type = TradingDataType.OHLCV)

[//]: # (    trading_time_frame_start_date = datetime.utcnow&#40;&#41; - timedelta&#40;days=1&#41;)

[//]: # (    trading_time_frame = TradingTimeFrame.ONE_MINUTE)

[//]: # (    market = "BITVAVO")

[//]: # (    symbols = ["BTC/EUR"])

[//]: # ()
[//]: # (    def apply_strategy&#40;)

[//]: # (        self,)

[//]: # (        algorithm: Algorithm,)

[//]: # (        market_data,)

[//]: # (    &#41;:)

[//]: # (        print&#40;len&#40;algorithm.get_orders&#40;&#41;&#41;&#41;)

[//]: # (        print&#40;market_data&#41;)

[//]: # (```)

[//]: # ()
[//]: # (## Decorator strategy)

[//]: # (```python)

[//]: # (from investing_algorithm_framework import create_app, PortfolioConfiguration, \)

[//]: # (TimeUnit, TradingTimeFrame, TradingDataType, TradingStrategy, Algorithm)

[//]: # ()
[//]: # (@app.strategy&#40;)

[//]: # (    time_unit=TimeUnit.SECOND,)

[//]: # (    interval=5,)

[//]: # (    market="BITVAVO",)

[//]: # (    trading_data_types=[TradingDataType.OHLCV, TradingDataType.TICKER],)

[//]: # (    trading_time_frame=TradingTimeFrame.ONE_DAY,)

[//]: # (    symbols=["BTC/EUR"],)

[//]: # (    trading_time_frame_start_date=datetime.now&#40;&#41; - timedelta&#40;days=60&#41;,)

[//]: # (&#41;)

[//]: # (def perform_strategy&#40;algorithm: Algorithm, market_data&#41;:)

[//]: # (    print&#40;algorithm.get_portfolio&#40;&#41;&#41;)

[//]: # (    print&#40;algorithm.get_positions&#40;&#41;&#41;)

[//]: # (    print&#40;algorithm.get_orders&#40;&#41;&#41;)

[//]: # (    print&#40;market_data&#41;)

[//]: # (    )
[//]: # (        if algorithm.position_exists&#40;"<symbol>"&#41;:)

[//]: # (            algorithm.close_position&#40;"<symbol>"&#41;)

[//]: # (        else:)

[//]: # (            algorithm.create_limit_order&#40;)

[//]: # (                symbol="<symbol>",)

[//]: # (                side="buy",)

[//]: # (                percentage_portfolio=20,)

[//]: # (                price=market_data["tickers"]["<symbol>"]["bid"])

[//]: # (            &#41;)

[//]: # (```)
