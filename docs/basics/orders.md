---
sidebar_position: 4
---

# Orders 

The following orders are supported:

* Limit buy orders
* Limit sell orders
* 
:::tip Multiple features enabled

Keep in mind that you can have multiple features enabled in the same application. For
example, you can have a sqllite database and a REST API enabled.

:::


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

