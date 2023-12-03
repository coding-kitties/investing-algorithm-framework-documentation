---
sidebar_position: 1
---

# Logging configuration

The following code snippet shows how to setup a baseline configuration for logging in your application.

> Notice the explicit logger for the investing_algorithm_framework package. This is required to ensure
that the framework logs are not suppressed by the root logger. You can change the logging level to
`logging.DEBUG` to see more detailed logs.

```python
import logging.config
config = {
    'version': 1,
    'disable_existing_loggers': True,
    'formatters': {
        'standard': {
            'format': '%(asctime)s [%(levelname)s] %(name)s: %(message)s'
        },
    },
    'handlers': {
        'default': {
            'level': 'INFO',
            'formatter': 'standard',
            'class': 'logging.StreamHandler',
            'stream': 'ext://sys.stdout',  # Default is stderr
        },
    },
    'loggers': {
        '': {  # root logger
            'handlers': ['default'],
            'level': 'WARNING',
            'propagate': False
        },
        'investing_algorithm_framework': {
            'level': 'INFO',  # Set the desired root log level
            'handlers': ['default'],
            'propagate': False
        }
    },
}
logging.config.dictConfig(config)
```

