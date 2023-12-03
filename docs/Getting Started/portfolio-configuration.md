---
---
# Portfolio configuration
In this section we will explain how to configure your portfolio from your broker or exchange.
The framework comes with out of the box support for [CCXT](https://github.com/ccxt/ccxt).
CCXT is a library that provides a unified API to interact with multiple brokers and exchanges.

Please have a look at the ccxt documentation to see which brokers and exchanges are supported.

## Configuration of a portfolio
To configure a portfolio you need to create a `PortfolioConfiguration` object.
The `PortfolioConfiguration` object is used to configure your portfolio from your broker or exchange.

The following code snippet shows how to create a `PortfolioConfiguration` object:

```python
from investing_algorithm_framework import PortfolioConfiguration, create_app

app = create_app()
app.add_portfolio_configuration(
     PortfolioConfiguration(
         api_key="<your broker api key>",
         secret_key="<your broker secret key>",
         market="BITVAVO",
         trading_symbol="EUR",
     )
)
```


### Tracking your portfolio from a specific datetime
If you want to track your portfolio from a specific datetime, you can use the `track_from` parameter.
The `track_from` parameter is used to specify the datetime from which the framework should track your portfolio.

The following code snippet shows how to use the `track_from` parameter:

```python
from datetime import datetime
from investing_algorithm_framework import PortfolioConfiguration, create_app

app = create_app()
app.add_portfolio_configuration(
     PortfolioConfiguration(
         api_key="<your broker api key>",
         secret_key="<your broker secret key>",
         market="BITVAVO",
         trading_symbol="EUR",
         track_from=datetime(2021, 1, 1)
     )
)
```

### Specify the maximum size of the portfolio
If you want to specify the maximum size of your portfolio, you can use the `max_unallocated` parameter.
The `max_unallocated` parameter is used to specify the maximum size of your portfolio.

The following code snippet shows how to use the `max_unallocated` parameter:

```python
from datetime import datetime
from investing_algorithm_framework import PortfolioConfiguration, create_app

app = create_app()
app.add_portfolio_configuration(
     PortfolioConfiguration(
         api_key="<your broker api key>",
         secret_key="<your broker secret key>",
         market="BITVAVO",
         trading_symbol="EUR",
         max_unallocated=1000 # Max unallocated amount of EUR, the rest of your balance of eur will be untouched 
     )
)
```