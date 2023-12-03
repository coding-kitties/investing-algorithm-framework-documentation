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
