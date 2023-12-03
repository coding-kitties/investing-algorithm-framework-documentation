---
sidebar_position: 7
---

# Market data
To get market data in your trading bot, you need to register a market data source object in your strategy.
The framework comes with a couple of market data sources out of the box. You can also create your own market data source.


## CCXT market data sources
The framework comes with the following ccxt market data sources:

- CCXTTickerMarketDataSource  
- CCXTOHLCVMarketDataSource  
- CCXTOrderBookMarketDataSource  

### CCXTTickerMarketDataSource
The CCXTTickerMarketDataSource is used to get the latest ticker data for a symbol. It is based 
on the popular [ccxt](https://github.com/ccxt/ccxt) library.
    
```python
from investing_algorithm_framework import CCXTTickerMarketDataSource, TradingStrategy, \
    Algorithm, TimeUnit

# A ohlcv market data source for the BTC/EUR symbol on the BITVAVO exchange
bitvavo_ticker_btc_eur = CCXTTickerMarketDataSource(
    identifier="BTC-ticker",
    market="BITVAVO",
    symbol="BTC/EUR",
)

class MyTradingStrategy(TradingStrategy):
    time_unit = TimeUnit.SECOND # The time unit of the strategy
    interval = 5 # The interval of the strategy, runs every 5 seconds
    # Registering the market data source
    market_data_sources = [bitvavo_ticker_btc_eur]

    def apply_strategy(self, algorithm: Algorithm, market_data: Dict[str, Any]):
        print(market_data[bitvavo_ticker_btc_eur.get_identifier()])
```

### CCXTOHLCVMarketDataSource
The CCXTOHLCVMarketDataSource is used to get candle stick/OHLCV data for a symbol. It is based
on the popular [ccxt](https://github.com/ccxt/ccxt) library.

:::info
For ohlcv data you need to specify a start date, and/or an end date.
If you don't specify an end date, the framework will use the current date as the end date. The daterange between
the start and end date is used to determine the number of candlesticks in your ohlcv data. E.g. if you
specify a start date of `start_date=datetime.utcnow() - timedelta(days=17)` and a timeframe of 2h, the framework will
fetch 216 candlesticks (17 days * 12 candlesticks per day). Keep in mind that by leveraging a function like `datetime.utcnow()`
you will get the current date in UTC time everytime the market data source is used. This allows you to get the latest data
everytime the strategy runs.
:::

```python
from investing_algorithm_framework import CCXTOHLCVMarketDataSource, TradingStrategy, \
    Algorithm, TimeUnit

# A order book market data source for the BTC/EUR symbol on the BITVAVO exchange
bitvavo_btc_eur_ohlcv_2h = CCXTTickerMarketDataSource(
    identifier="BTC-ohlcv-2h",
    market="BITVAVO",
    symbol="BTC/EUR",
)

class MyTradingStrategy(TradingStrategy):
    time_unit = TimeUnit.SECOND # The time unit of the strategy
    interval = 5 # The interval of the strategy, runs every 5 seconds
    # Registering the market data source
    market_data_sources = [bitvavo_btc_eur_ohlcv_2h]

    def apply_strategy(self, algorithm: Algorithm, market_data: Dict[str, Any]):
        print(market_data[bitvavo_btc_eur_ohlcv_2h.get_identifier()])
```

### CCXTOrderBookMarketDataSource
The CCXTOrderBookMarketDataSource is used to get order book data for a symbol. It is based
on the popular [ccxt](https://github.com/ccxt/ccxt) library.


```python
from investing_algorithm_framework import CCXTOrderBookMarketDataSource, TradingStrategy, \
    Algorithm, TimeUnit

# A ticker market data source for the BTC/EUR symbol on the BITVAVO exchange
bitvavo_btc_eur_order_book = CCXTOrderBookMarketDataSource(
    identifier="BTC-order-book",
    market="BITVAVO",
    symbol="BTC/EUR",
)

class MyTradingStrategy(TradingStrategy):
    time_unit = TimeUnit.SECOND # The time unit of the strategy
    interval = 5 # The interval of the strategy, runs every 5 seconds
    # Registering the market data source
    market_data_sources = [bitvavo_btc_eur_order_book]

    def apply_strategy(self, algorithm: Algorithm, market_data: Dict[str, Any]):
        print(market_data[bitvavo_btc_eur_order_book.get_identifier()])
```
