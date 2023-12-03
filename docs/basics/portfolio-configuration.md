---
sidebar_position: 3
---

# Portfolio configuration

You can create a portfolio configuration to connect an algorithm to 
a broker or exchange.

You do this by registering a **PortfolioConfiguration** object.

:::tip CCXT support
The framework has full support for [ccxt](https://github.com/ccxt). You can check there the full
list of supported exchanges and brokers.
:::



## Creating and registering a portfolio configuration
A simple portfolio configuration requires a market, trading symbol and api key/secret key combination.
The trading symbol or quated symbol is the asset that is used to trade the targets assets with.

> For example if you buy bitcoin with euro your trading symbol is euro.

```python
from investing_algorithm_framework import PortfolioConfiguration
app.add_portfolio_configuration(
    PortfolioConfiguration(
        market="<your_market>", 
        api_key="<your_api_key>",
        secret_key="<your_secret_key>",
        trading_symbol="<your_trading_symbol>"
    )
)
```

## Portfolio configuration with a start date
You can register a portfolio configuration with a start date. This is convenient when you
don't want to load the full order history of your account at a specific broker or exchange.

The format of the datetime string should be of 'dd/MM/YYYY hh:mm:ss'
```python
from investing_algorithm_framework import PortfolioConfiguration
app.add_portfolio_configuration(
    PortfolioConfiguration(
        market="<your_market>", 
        api_key="<your_api_key>",
        secret_key="<your_secret_key>",
        trading_symbol="<your_trading_symbol>",
        track_from="10/09/2023"
    )
)
```

## Portfolio configuration with a specified size
You can specify the size of a portfolio configuration with the 'max_unallocated' parameter. 

```python
from investing_algorithm_framework import PortfolioConfiguration
app.add_portfolio_configuration(
    PortfolioConfiguration(
        market="<your_market>", 
        api_key="<your_api_key>",
        secret_key="<your_secret_key>",
        trading_symbol="<your_trading_symbol>",
        max_unallocated=1000
    )
)
```


