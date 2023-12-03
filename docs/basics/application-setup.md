---
sidebar_position: 2
---

# Application Setup

The framework allows you to configure different application setups. 
The following sections describe the different setups and how to configure them.

:::tip Multiple features enabled

Keep in mind that you can have multiple features enabled in the same application. For
example, you can have a sqllite database and a REST API enabled.

:::


## The algorithm component
During usage of the framework the algorithm object is you way to interact with your trading 
bot. This object allows you to create orders, list positions, sync with your portfolio on your broker/exchange, etc.

You will access your algorithm component in different ways, but in all setups it will
be provided to you by the framework. For example in the code snippet below the algorithm object 
is passed in as a parameter in the function by the framework

```python
from investing_algorithm_framework import create_app, PortfolioConfiguration, \
TimeUnit, TradingTimeFrame, TradingDataType, TradingStrategy, Algorithm

@app.strategy(time_unit=TimeUnit.SECOND, interval=5)
def perform_strategy(algorithm: Algorithm, market_data):
    print(algorithm.get_portfolio())
    print(algorithm.get_positions())
    print(algorithm.get_orders())
        
app.start()
```

 
## In-memory Setup
The in-memory setup is the default setup.
It is used to run the framework in a single process and without any persistence.
This setup is useful for testing and debugging purposes.

To configure the application with in-memory setup, simply don't pass any arguments to the `create_app` method.
The following code snippet shows how to do this:

```python
from investing_algorithm_framework import create_app
app = create_app()
```

## Stateless Setup
To run the framework in a stateless setup, you need to set the stateless flag to `True` when calling the `create_app` method.
The following code snippet shows how to do this:

:::tip Cloud functions

Use stateless setup when running the framework in a cloud function such as AWS Lambda or Azure Cloud Functions.

:::

```python
from investing_algorithm_framework import create_app
app = create_app(stateless=True)
```

## SQLlite Setup
To run the framework in a SQLlite setup, so you have persitance in your algorithm, you need to specify a resource directory for
you algorithm to store the database in. The following code snippet shows how to do this:

```python
import pathlib
from investing_algorithm_framework import create_app, RESOURCE_DIRECTORY

# Create the resource directory in the parent directory of the current file
app = create_app(config={RESOURCE_DIRECTORY: pathlib.Path(__file__).parent.resolve()})
```

## Rest API Setup
To run the framework in a rest api setup, you need to specify a port to run the rest api on. The following code snippet shows how to do this:

```python
from investing_algorithm_framework import create_app
app = create_app(web=True)
```

Or if you want to specify the port you can specify this in the config class.

```python
from investing_algorithm_framework import create_app, REST_API_PORT
app = create_app({REST_API_PORT: 3000}, web=True)
```

