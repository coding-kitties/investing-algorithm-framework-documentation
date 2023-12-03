---

sidebar_position: 2

---

# Application Setup
The framework allows you to configure different application setups. Currently the following configurations are supported:

* Stateless (Ideal for cloud functions)
* Stateful with an in memory database 
* Stateful with a SQLlite database

Also, the framework can expose a REST api to allow you to interact with your trading bot.


## Stateful in-memory Setup

The in-memory setup is the default setup. It is used to run the framework 
in a single process and without any persistence. This setup is useful for testing and debugging purposes.
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
Use stateless setup when running the framework in a cloud function such as AWS Lambda or Azure Cloud Functions. You can find
examples on how to deploy to this cloud environments here: [Cloud functions](https://github.com/coding-kitties/investing-algorithm-framework/tree/master/examples/stateless) 
:::


```python
from investing_algorithm_framework import create_app
app = create_app(stateless=True)
```


## Stateful with a sqllite setup
To run the framework with a SQLlite setup, you need to specify a resource directory for
you algorithm to store the database in. The following code snippet specifies the resource directory to 
the parent directory where the trading bot is running in.

```python
import pathlib
from investing_algorithm_framework import create_app, RESOURCE_DIRECTORY
# Create the resource directory in the parent directory of the current file
app = create_app(config={RESOURCE_DIRECTORY: pathlib.Path(__file__).parent.resolve()})
```


### Rest API plugin
To run the framework in a rest api setup, you need to specify a port to run the rest api on. 
The following code snippet shows how to do this:

:::warning Cloud functions
The REST api plugin is not supported when you run you algorithm in a stateless setup.
:::

```python

from investing_algorithm_framework import create_app
app = create_app(web=True)
```

Or if you want to specify the port you can specify this in the config class.

```python

from investing_algorithm_framework import create_app, REST_API_PORT
app = create_app({REST_API_PORT: 3000}, web=True)
```
