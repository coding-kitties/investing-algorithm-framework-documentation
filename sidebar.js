const sidebars = {
    defaultSideBar: [
        "intro",
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                {
                    type: 'doc',
                    id: 'Getting Started/installation',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/application-setup',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/portfolio-configuration',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/strategies',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/market-data',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/orders',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/positions',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/trades',
                },
                {
                    type: 'doc',
                    id: 'Getting Started/tasks',
                },
            ],
        },
        {
            type: 'category',
            label: 'Data',
            items: [
                {
                    type: 'doc',
                    id: 'Data/market-data-sources',
                },
                {
                    type: 'doc',
                    id: 'Data/multiple-market-data-sources',
                },
            ],
        },
        {
            type: 'category',
            label: 'Advanced Concepts',
            items: [
                {
                    type: 'doc',
                    id: 'Advanced Concepts/logging-configuration',
                },
            ],
        },
    ],
};

module.exports = sidebars;
